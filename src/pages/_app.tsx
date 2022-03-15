import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'

import { MovieProvider } from '@/context/MovieContext'
import globalStyles from '@/styles/globals.styled'
import { theme } from '@/styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={theme}>
			{globalStyles}
			<MovieProvider>
				<Component {...pageProps} />
			</MovieProvider>
		</ThemeProvider>
	)
}

export default MyApp
