import type { AppProps } from 'next/app'

import globalStyles from '@/styles/globals.styled'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
