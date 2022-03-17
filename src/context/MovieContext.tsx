import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react'

import { MovieSearchResponseTypes } from '@/types/movie'
import { MovieSearchQueryTypes } from '@/types/movieSearch'

export type MovieProviderType = {
	movieSearchHandler: (param: MovieSearchQueryTypes) => void
	movieSearchedResult?: MovieSearchResponseTypes
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

	const movieSearchHandler = useCallback(
		async ({ title, year, type, page = 1 }: MovieSearchQueryTypes) => {
			let payload = ``
			if (title) {
				payload += `s=${title}`

				if (year && year.length >= 1) payload += `&y=${year[0]}`

				if (type) payload += `&type=${type}`

				if (page) payload += `&page=${page}`
			} else {
				console.log('Please add search title')
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
			// finally {
			// 	setIsLoading(false)
			// }
		},
		[]
	)

	return (
		<MovieContext.Provider
			value={{
				movieSearchHandler,
				movieSearchedResult,
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
