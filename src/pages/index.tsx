import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '@/components/header'
import { MovieDetail } from '@/components/movieDetail'
import { MovieList } from '@/components/movieList'
import { useMovie } from '@/context/MovieContext'
import { breakpoint } from '@/styles/theme'
import { MovieDetailTypes, MovieListItemType } from '@/types/movie'

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

const ContentCenterBlock = styled.main`
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-align: center;
	display: flex;
`

const Layout = styled.div`
	grid-template-rows: ${({ theme }) => theme.spacing[21]} auto;
	overflow: hidden;
	height: 100vh;
	display: grid;
`

const Home: NextPage = () => {
	const {
		initialLoad,
		isLoading,
		isLoadingMovieDetail,
		selectedMovieDetail,
		movieDetailToggleOnMobile,
		movieSearchedResult,
		setMovieDetailToggleOnMobile,
		watchedMoviesHandler,
		watchedMovies,
	} = useMovie()

	const checkIsSelectedWatch = (
		imdbID: string,
		watchedMovies: MovieListItemType[]
	): boolean => {
		let isSelectedWatch = false
		watchedMovies.filter((watchedMovie) => {
			if (watchedMovie.imdbID === imdbID) {
				isSelectedWatch = true
			}
			return isSelectedWatch
		})

		return isSelectedWatch
	}

	return (
		<Layout>
			<Head>
				<title>Movie Finder</title>
				<meta name="description" content="Find movie details" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />

			{!initialLoad ? (
				<Main className="main">
					<MovieList
						isLoading={isLoading}
						movies={movieSearchedResult}
						selectedItemId={selectedMovieDetail?.SelectedMovieDetail?.imdbID}
					/>

					{/* <MovieList
						isLoading={isLoading}
						movies={{
							Response: true,
							SearchResult: watchedMovies,
							TotalResults: watchedMovies.length,
						}}
						selectedItemId={selectedMovieDetail?.SelectedMovieDetail?.imdbID}
					/> */}

					{Object.keys(selectedMovieDetail || {}).length !== 0 ? (
						<MovieDetail
							isLoading={isLoadingMovieDetail}
							activeInMobile={movieDetailToggleOnMobile || false}
							movieDetail={
								selectedMovieDetail?.SelectedMovieDetail ||
								({} as MovieDetailTypes)
							}
							deactivateInMobileHandle={() =>
								setMovieDetailToggleOnMobile(false)
							}
							watchedToggleHandle={() =>
								watchedMoviesHandler(
									selectedMovieDetail?.SelectedMovieDetail?.imdbID as string
								)
							}
							isWatched={checkIsSelectedWatch(
								selectedMovieDetail?.SelectedMovieDetail?.imdbID as string,
								watchedMovies
							)}
						/>
					) : (
						<ContentCenterBlock>
							Please select an movie to find more details about the movie.
						</ContentCenterBlock>
					)}
				</Main>
			) : (
				<ContentCenterBlock>
					<h1>Welcome to Movie finder</h1>
					<p>Please search movie by it`s title</p>
				</ContentCenterBlock>
			)}
		</Layout>
	)
}

export default Home
