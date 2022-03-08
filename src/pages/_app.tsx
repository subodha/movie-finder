import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'

import globalStyles from '@/styles/globals.styled'
import { theme } from '@/styles/theme'

type themeProps = typeof theme

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={theme}>
			{globalStyles}
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
