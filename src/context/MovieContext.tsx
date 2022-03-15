import { createContext, ReactNode, useContext, useMemo } from 'react'

export type MovieProviderType = {
	testData?: string
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
	const movieValues = useMemo(() => ({ testData: 'tes provider data' }), [])

	return (
		<MovieContext.Provider value={movieValues}>
			{children}
		</MovieContext.Provider>
	)
}

export function useMovie() {
	return useContext(MovieContext)
}
