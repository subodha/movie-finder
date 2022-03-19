import { useState } from 'react'

import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '@/components/header'
import { MovieDetail } from '@/components/movieDetail'
import { MovieList } from '@/components/movieList'
import { useMovie } from '@/context/MovieContext'
import { breakpoint } from '@/styles/theme'
import { MovieDetailTypes } from '@/types/movie'

const Main = styled.main`
	grid-template-columns: 1fr;
	justify-content: center;
	overflow: hidden;
	display: grid;

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
	grid-template-rows: ${({ theme }) => theme.spacing[21]} auto;
	overflow: hidden;
	height: 100vh;
	display: grid;
`

const Home: NextPage = () => {
	const { isLoading, isLoadingMovieDetail, selectedMovieDetail } = useMovie()
	return (
		<Layout>
			<Head>
				<title>Movie Finder</title>
				<meta name="description" content="Find movie details" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />

			<Main className="main">
				<MovieList isLoading={isLoading} />
				<MovieDetail
					isLoading={isLoadingMovieDetail}
					movieDetail={
						selectedMovieDetail?.SelectedMovieDetail || ({} as MovieDetailTypes)
					}
				/>
			</Main>
		</Layout>
	)
}

export default Home
