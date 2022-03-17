import { useEffect, useState } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

import { useMovie } from '@/context/MovieContext'
import { MovieListItemType } from '@/types/movie'

import { MovieListItem } from '../movieListItem'
import {
	MovieListStyled,
	MovieListSkeltonStyled,
	MovieListHeaderStyled,
} from './MovieList.styled'

// const dummyMovieList = {
// 	movies: [
// 		{
// 			Title: 'Batman Begins',
// 			Year: '2005',
// 			imdbID: 'tt0372784',
// 			Type: 'movie',
// 			Poster:
// 				'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
// 		},
// 		{
// 			Title: 'Batman v Superman: Dawn of Justice',
// 			Year: '2016',
// 			imdbID: 'tt2975590',
// 			Type: 'movie',
// 			Poster:
// 				'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
// 		},
// 		{
// 			Title: 'Batman',
// 			Year: '1989',
// 			imdbID: 'tt0096895',
// 			Type: 'movie',
// 			Poster:
// 				'https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg',
// 		},
// 		{
// 			Title: 'Batman Returns',
// 			Year: '1992',
// 			imdbID: 'tt0103776',
// 			Type: 'movie',
// 			Poster:
// 				'https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg',
// 		},
// 		{
// 			Title: 'Batman Forever',
// 			Year: '1995',
// 			imdbID: 'tt0112462',
// 			Type: 'movie',
// 			Poster:
// 				'https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
// 		},
// 		{
// 			Title: 'Batman & Robin',
// 			Year: '1997',
// 			imdbID: 'tt0118688',
// 			Type: 'movie',
// 			Poster:
// 				'https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg',
// 		},
// 		{
// 			Title: 'The Lego Batman Movie',
// 			Year: '2017',
// 			imdbID: 'tt4116284',
// 			Type: 'movie',
// 			Poster:
// 				'https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg',
// 		},
// 		{
// 			Title: 'Batman: The Animated Series',
// 			Year: '1992–1995',
// 			imdbID: 'tt0103359',
// 			Type: 'series',
// 			Poster:
// 				'https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg',
// 		},
// 		{
// 			Title: 'Batman: Under the Red Hood',
// 			Year: '2010',
// 			imdbID: 'tt1569923',
// 			Type: 'movie',
// 			Poster:
// 				'https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
// 		},
// 		{
// 			Title: 'Batman: The Killing Joke',
// 			Year: '2016',
// 			imdbID: 'tt4853102',
// 			Type: 'movie',
// 			Poster:
// 				'https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
// 		},
// 	],
// 	totalResults: '498',
// 	Response: 'True',
// }

const MovieListSkelton = (): JSX.Element => (
	<MovieListSkeltonStyled>
		<div>
			<Skeleton
				borderRadius={4}
				height="5rem"
				width="5rem"
				containerClassName="avatar-skeleton"
			/>
		</div>
		<div>
			<Skeleton count={2} />
			<Skeleton height={8} count={1} width={50} />
		</div>
	</MovieListSkeltonStyled>
)

export const MovieList = (): JSX.Element => {
	const {
		movieSearchedResult,
		isLoading,
		loadMoreMoviesHandler,
		movieSearchQuery,
	} = useMovie()

	const [movieList, setMovieList] = useState<MovieListItemType[]>([])

	const loadMoreMovies = async () => {
		if (movieSearchQuery.title !== '') {
			const moreMovies = await loadMoreMoviesHandler({
				title: movieSearchQuery.title,
				year: movieSearchQuery.year,
				type: movieSearchQuery.type,
				page: movieSearchQuery.page ? movieSearchQuery.page + 1 : 1,
			})

			setMovieList((currentMovieList) => [
				...currentMovieList,
				...(moreMovies.SearchResult || []),
			])
			// console.log(movieList)
		}
	}

	useEffect(() => {
		if (movieSearchedResult?.SearchResult) {
			setMovieList(movieSearchedResult?.SearchResult)
		}
	}, [movieSearchedResult])

	if (isLoading) {
		return (
			<MovieListStyled>
				<MovieListHeaderStyled>
					<Skeleton width={160} inline />
				</MovieListHeaderStyled>
				<>
					<MovieListSkelton />
					<MovieListSkelton />
					<MovieListSkelton />
					<MovieListSkelton />
					<MovieListSkelton />
				</>
			</MovieListStyled>
		)
	}

	if (movieList.length > 0) {
		return (
			<MovieListStyled id="scrollableDiv">
				<MovieListHeaderStyled>
					{movieSearchedResult?.TotalResults
						? movieSearchedResult?.TotalResults
						: null}

					{movieSearchedResult?.TotalResults === 1
						? ' RESULT'
						: ' RESULTS' || 'No movie find related to searced title'}
				</MovieListHeaderStyled>
				<InfiniteScroll
					dataLength={movieSearchedResult?.TotalResults || 0}
					next={loadMoreMovies}
					hasMore
					loader={
						<div className="loader" key={0}>
							Loading ...
						</div>
					}
					scrollableTarget="scrollableDiv"
				>
					{movieList.map((movie) => (
						<MovieListItem
							key={movie?.imdbid}
							title={movie?.Title}
							year={movie?.Year}
							imdbid={movie?.imdbid}
							poster={movie?.Poster}
						/>
					))}
				</InfiniteScroll>
			</MovieListStyled>
		)
	}
	return (
		<MovieListStyled>
			<div>Please search movie by name</div>
		</MovieListStyled>
	)
}
