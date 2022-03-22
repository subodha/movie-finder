import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'

import {
	MovieSearchResponseTypes,
	MovieDetailResponseTypes,
	MovieListItemType,
} from '@/types/movie'
import { MovieSearchQueryTypes } from '@/types/movieSearch'

type MovieProviderPropsTypes = {
	children: ReactNode
}

type getMovieParmTypes = {
	imdbId: string
}

export type MovieProviderType = {
	initialLoad: boolean
	isLoading: boolean
	isLoadingMore: boolean
	isLoadingMovieDetail: boolean
	movieDetailToggleOnMobile: boolean
	movieSearchQuery: MovieSearchQueryTypes
	movieSearchedResult?: MovieSearchResponseTypes
	selectedMovieDetail: MovieDetailResponseTypes | undefined
	watchedMovies: MovieListItemType[]
	setInitialLoad: (param: boolean) => void
	setMovieDetailToggleOnMobile: (param: boolean) => void
	movieSearchHandler: (param: MovieSearchQueryTypes) => void
	loadMoreMoviesHandler: (
		param: MovieSearchQueryTypes
	) => Promise<MovieSearchResponseTypes>
	getMovieDetailHandler: (param: getMovieParmTypes) => void
	watchedMoviesHandler: (imdbID: string) => void
}

export const MovieContext = createContext<MovieProviderType>(
	{} as MovieProviderType
)

export const MovieProvider = ({
	children,
}: MovieProviderPropsTypes): JSX.Element => {
	const [movieSearchedResult, setMovieSearchedResult] =
		useState<MovieSearchResponseTypes>({} as MovieSearchResponseTypes)
	const [initialLoad, setInitialLoad] = useState<boolean>(true)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false)
	const [isLoadingMovieDetail, setIsLoadingMovieDetail] =
		useState<boolean>(false)
	const [selectedMovieDetail, setSelectedMovieDetail] =
		useState<MovieDetailResponseTypes>({} as MovieDetailResponseTypes)
	const [movieDetailToggleOnMobile, setMovieDetailToggleOnMobile] =
		useState<boolean>(false)
	const [movieSearchQuery, setMovieSearchQuery] =
		useState<MovieSearchQueryTypes>({
			title: '',
			year: [1985, 2022],
			type: '',
			page: 1,
		})

	const [watchedMovies, setWatchedMovies] = useState<MovieListItemType[]>([])

	const movieSearchHandler = useCallback(
		async ({ title, year, type, page = 1 }: MovieSearchQueryTypes) => {
			let payload = ``
			if (title) {
				payload += `s=${title}`

				if (year && year.length >= 1) payload += `&y=${year[0]}`

				if (type) payload += `&type=${type}`

				if (page) payload += `&page=${page}`

				setMovieSearchQuery({
					title,
					year,
					type,
					page,
				})
			} else {
				// // console.log('Please add search title')
			}

			try {
				setIsLoading(true)
				setInitialLoad(false)
				const MoviesSearch = await fetch(`api/movies?${payload}`)
				const MoviesSearchResult = await MoviesSearch.json()

				if (MoviesSearchResult?.Response) {
					setMovieSearchedResult({
						Response: true,
						SearchResult: MoviesSearchResult?.SearchResult,
						TotalResults: MoviesSearchResult?.TotalResults,
						CurrentPage: MoviesSearchResult?.CurrentPage,
						HasMorePage: MoviesSearchResult?.HasMorePage,
					})
					setIsLoading(false)
				} else {
					setMovieSearchedResult({
						Response: false,
						Error: 'something wrong',
					})
					setIsLoading(false)
				}
				// // console.log(MoviesList)
			} catch (err: any) {
				console.error(err)
			}
		},
		[]
	)

	const loadMoreMoviesHandler = async ({
		title,
		year,
		type,
		page = 1,
	}: MovieSearchQueryTypes): Promise<MovieSearchResponseTypes> => {
		let moreMovies: MovieSearchResponseTypes = {
			Response: false,
		}

		let payload = ``
		if (title) {
			payload += `s=${title}`

			if (year && year.length >= 1) payload += `&y=${year[0]}`

			if (type) payload += `&type=${type}`

			if (page) payload += `&page=${page}`

			setMovieSearchQuery({
				title,
				year,
				type,
				page,
			})
		} else {
			// // console.log('Please add search title')
		}

		try {
			setIsLoadingMore(true)
			const moreMoviesSearch = await fetch(`api/movies?${payload}`)
			const moreMoviesSearchResult = await moreMoviesSearch.json()

			if (moreMoviesSearchResult?.Response) {
				moreMovies = {
					Response: true,
					SearchResult: moreMoviesSearchResult?.SearchResult,
					TotalResults: moreMoviesSearchResult?.TotalResults,
					CurrentPage: moreMoviesSearchResult?.CurrentPage,
					HasMorePage: moreMoviesSearchResult?.HasMorePage,
				}
				setIsLoadingMore(false)
			} else {
				moreMovies = {
					Response: false,
					Error: 'somthin wrong',
				}
				setIsLoadingMore(false)
			}
		} catch (err: any) {
			console.error(err)
		}

		return moreMovies
	}

	const getMovieDetailHandler = async ({ imdbId }: getMovieParmTypes) => {
		// console.log('fetching movie detail for movie ID:', imdbId)
		let payload = ``
		if (imdbId) {
			payload += `i=${imdbId}`
		} else {
			// // console.log('Please add search title')
		}

		try {
			setIsLoadingMovieDetail(true)
			setMovieDetailToggleOnMobile(true)
			const MoviesDetailFetching = await fetch(`api/movie?${payload}`)
			const MoviesDetailResult = await MoviesDetailFetching.json()

			if (MoviesDetailResult?.Response) {
				setSelectedMovieDetail({
					Response: true,
					SelectedMovieDetail: MoviesDetailResult.SelectedMovieDetail,
				})
				setIsLoadingMovieDetail(false)
			} else {
				setSelectedMovieDetail({
					Response: false,
					Error: 'something wrong',
				})
				setIsLoadingMovieDetail(false)
			}
			// // console.log(MoviesList)
		} catch (err: any) {
			console.error(err)
			setSelectedMovieDetail({
				Response: false,
				Error: err.message || 'Oops, Something wrong',
			})
			setIsLoadingMovieDetail(false)
		}
	}

	const watchedMoviesHandler = async (imdbID: string) => {
		const watchedMovieList = watchedMovies.filter(
			(watchedMovie) => watchedMovie.imdbID === imdbID
		)

		let newMovieList: MovieListItemType[] = []

		if (watchedMovieList.length >= 1) {
			// remove movies
			newMovieList = watchedMovies.filter(
				(watchedMovie) => watchedMovie.imdbID !== imdbID
			)
		} else {
			// Add movies
			const newMovieItem: MovieListItemType = {
				imdbID,
				Title: selectedMovieDetail.SelectedMovieDetail?.Title || 'N/A',
				Year: selectedMovieDetail?.SelectedMovieDetail?.Year || 'N/A',
				Type: selectedMovieDetail?.SelectedMovieDetail?.Type || '',
				Poster: selectedMovieDetail?.SelectedMovieDetail?.Poster || 'N/A',
			}
			newMovieList = [...watchedMovies, newMovieItem]
		}

		await localStorage.setItem('watchedMovieList', JSON.stringify(newMovieList))
		setWatchedMovies(newMovieList)
	}

	useEffect(() => {
		const savedWatchedList = localStorage.getItem('watchedMovieList')

		if (savedWatchedList) {
			const watchedMovies = JSON.parse(savedWatchedList)
			setWatchedMovies(watchedMovies)
		}
	}, [])

	return (
		<MovieContext.Provider
			value={{
				initialLoad,
				isLoading,
				isLoadingMore,
				isLoadingMovieDetail,
				movieSearchQuery,
				movieSearchHandler,
				loadMoreMoviesHandler,
				movieSearchedResult,
				getMovieDetailHandler,
				selectedMovieDetail,
				movieDetailToggleOnMobile,
				setMovieDetailToggleOnMobile,
				watchedMoviesHandler,
				watchedMovies,
				setInitialLoad,
			}}
		>
			{children}
		</MovieContext.Provider>
	)
}

export function useMovie() {
	return useContext(MovieContext)
}
