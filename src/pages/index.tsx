import { useState } from 'react'

import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '@/components/header'
import { MovieSearchFormProps } from '@/types/movieSearch'

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Home: NextPage = () => {
  const [movieSearch, setMovieSearch] = useState<MovieSearchFormProps>({})

  return (
    <div className="container">
      <Head>
        <title>Movie Finder</title>
        <meta name="description" content="Find movie details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header movieSearch={movieSearch} />

      <Main className="main">
        <h1 className="title">Welcome to Movie Finder !</h1>
      </Main>
    </div>
  )
}

export default Home
