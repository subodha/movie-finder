import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useState,
} from 'react'

import { MovieSearchResponseTypes } from '@/types/movie'
import { MovieSearchQueryTypes } from '@/types/movieSearch'

export type MovieProviderType = {
	movieSearchHandler: (param: MovieSearchQueryTypes) => void
	loadMoreMoviesHandler: (
		param: MovieSearchQueryTypes
	) => Promise<MovieSearchResponseTypes>
	movieSearchedResult?: MovieSearchResponseTypes
	movieSearchQuery: MovieSearchQueryTypes
	isLoading: boolean
}

type MovieProviderPropsTypes = {
	children: ReactNode
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
				// console.log('Please add search title')
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
					})
					setIsLoading(false)
				} else {
					setMovieSearchedResult({
						Response: false,
						Error: 'somthin wrong',
					})
					setIsLoading(false)
				}
				// console.log(MoviesList)
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
			// console.log('Please add search title')
		}

		try {
			setIsLoading(true)
			const moreMoviesSearch = await fetch(`api/movies?${payload}`)
			const moreMoviesSearchResult = await moreMoviesSearch.json()

			if (moreMoviesSearchResult?.Response) {
				moreMovies = {
					Response: true,
					SearchResult: moreMoviesSearchResult?.SearchResult,
					TotalResults: moreMoviesSearchResult?.TotalResults,
				}
				setIsLoading(false)
			} else {
				moreMovies = {
					Response: false,
					Error: 'somthin wrong',
				}
				setIsLoading(false)
			}
			// console.log(MoviesList)
		} catch (err: any) {
			console.error(err)
		}

		return moreMovies
	}

	return (
		<MovieContext.Provider
			value={{
				movieSearchHandler,
				loadMoreMoviesHandler,
				movieSearchedResult,
				movieSearchQuery,
				isLoading,
			}}
		>
			{children}
		</MovieContext.Provider>
	)
}

export function useMovie() {
	return useContext(MovieContext)
}
