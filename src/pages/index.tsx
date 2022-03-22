import { useEffect, useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '@/components/header'
import {
	Layout,
	Main,
	ListContainer,
	EmptyMovieDetailStyled,
	ContentCenterBlock,
} from '@/components/layout'
import { MovieDetail } from '@/components/movieDetail'
import { MovieList, WatchedMovieList } from '@/components/movieList'
import { Switch } from '@/components/toggleSwitch/ToggleSwitch.stories'
import { useMovie } from '@/context/MovieContext'
import { MovieDetailTypes, MovieListItemType } from '@/types/movie'

const Home: NextPage = () => {
	const {
		initialLoad,
		isLoading,
		isLoadingMovieDetail,
		selectedMovieDetail,
		movieDetailToggleOnMobile,
		movieSearchedResult,
		watchedMovies,
		setMovieDetailToggleOnMobile,
		watchedMoviesHandler,
		setInitialLoad,
	} = useMovie()
	const [showWatchedList, setShowWatchedList] = useState<boolean>(false)

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

	const watchedListHandler = (): void => {
		setShowWatchedList(!showWatchedList)
		setInitialLoad(false)
	}

	useEffect(() => {
		if (isLoading) {
			setShowWatchedList(false)
		}
	}, [isLoading])

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
					<ListContainer>
						{showWatchedList ? (
							<WatchedMovieList
								isLoading={isLoading}
								movies={{
									Response: true,
									SearchResult: watchedMovies,
								}}
								selectedItemId={
									selectedMovieDetail?.SelectedMovieDetail?.imdbID
								}
							/>
						) : (
							<MovieList
								isLoading={isLoading}
								movies={movieSearchedResult}
								selectedItemId={
									selectedMovieDetail?.SelectedMovieDetail?.imdbID
								}
							/>
						)}
						<footer>
							<Switch onToggle={() => watchedListHandler()} />
						</footer>
					</ListContainer>

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
						<EmptyMovieDetailStyled>
							<ContentCenterBlock>
								Please select an movie to find more details about the movie.
							</ContentCenterBlock>
						</EmptyMovieDetailStyled>
					)}
				</Main>
			) : (
				<ContentCenterBlock>
					<h1>Welcome to Movie finder</h1>
					<p>Please search movie by it`s title</p>
					or see your watched movie list
					<Switch onToggle={() => watchedListHandler()} />
				</ContentCenterBlock>
			)}
		</Layout>
	)
}

export default Home
