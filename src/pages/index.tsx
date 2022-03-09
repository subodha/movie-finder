import { useState } from 'react'

import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '@/components/header'
import { MovieDetail } from '@/components/movieDetail'
import { MovieList } from '@/components/movieList'
import { MovieSearchFormProps } from '@/types/movieSearch'

const Main = styled.main`
	min-height: 100vh;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
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
				<MovieList />
				<MovieDetail />
			</Main>
		</div>
	)
}

export default Home
