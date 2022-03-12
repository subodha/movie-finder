import { useState } from 'react'

import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '@/components/header'
import { MovieDetail } from '@/components/movieDetail'
import { MovieList } from '@/components/movieList'
import { breakpoint, theme } from '@/styles/theme'
import { MovieSearchFormProps } from '@/types/movieSearch'

const Main = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	${breakpoint('md')} {
		grid-template-columns: 1fr 2fr;
	}

	${breakpoint('lg')} {
		grid-template-columns: 4fr 8fr;
	}

	${breakpoint('xl')} {
		grid-template-columns: 3fr 9fr;
	}
`

const Layout = styled.div`
	height: 100vh;
	display: grid;
	grid-template-rows: ${(props) => props.theme.spacing[21]} auto;
	overflow: hidden;
`

const Home: NextPage = () => {
	const [movieSearch, setMovieSearch] = useState<MovieSearchFormProps>({})

	return (
		<Layout>
			<Head>
				<title>Movie Finder</title>
				<meta name="description" content="Find movie details" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header movieSearch={movieSearch} />

			<Main className="main">
				<MovieList isLoading={false} />
				<MovieDetail />
			</Main>
		</Layout>
	)
}

export default Home
