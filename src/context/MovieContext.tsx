import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useState,
} from 'react'

import {
	MovieSearchResponseTypes,
	MovieDetailResponseTypes,
} from '@/types/movie'
import { MovieSearchQueryTypes } from '@/types/movieSearch'

type MovieProviderPropsTypes = {
	children: ReactNode
}

type getMovieParmTypes = {
	imdbId: string
}

export type MovieProviderType = {
	isLoading: boolean
	isLoadingMore: boolean
	isLoadingMovieDetail: boolean
	movieSearchQuery: MovieSearchQueryTypes
	movieSearchHandler: (param: MovieSearchQueryTypes) => void
	movieSearchedResult?: MovieSearchResponseTypes
	loadMoreMoviesHandler: (
		param: MovieSearchQueryTypes
	) => Promise<MovieSearchResponseTypes>
	getMovieDetailHandler: (
		param: getMovieParmTypes
	) => Promise<MovieDetailResponseTypes>
	selectedMovieDetail: MovieDetailResponseTypes
}

export const MovieContext = createContext<MovieProviderType>(
	{} as MovieProviderType
)

export const MovieProvider = ({
	children,
}: MovieProviderPropsTypes): JSX.Element => {
	const [movieSearchedResult, setMovieSearchedResult] =
		useState<MovieSearchResponseTypes>({} as MovieSearchResponseTypes)

	const [isLoading, setIsLoading] = useState<boolean>(false)

	const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false)

	const [isLoadingMovieDetail, setIsLoadingMovieDetail] =
		useState<boolean>(false)

	const [selectedMovieDetail, setSelectedMovieDetail] =
		useState<MovieDetailResponseTypes>({} as MovieDetailResponseTypes)

	const [movieSearchQuery, setMovieSearchQuery] =
		useState<MovieSearchQueryTypes>({
			title: '',
			year: [2004, 2022],
			type: 'any',
			page: 1,
		})

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

	return (
		<MovieContext.Provider
			value={{
				isLoading,
				isLoadingMore,
				isLoadingMovieDetail,
				movieSearchQuery,
				movieSearchHandler,
				loadMoreMoviesHandler,
				movieSearchedResult,
				getMovieDetailHandler,
				selectedMovieDetail
			}}
		>
			{children}
		</MovieContext.Provider>
	)
}

export function useMovie() {
	return useContext(MovieContext)
}
