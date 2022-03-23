import { useEffect, useState } from 'react'

import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

import { ContentCenterBlock } from '@/components/layout'
import { MovieListItem } from '@/components/movieListItem'
import { useMovie } from '@/context/MovieContext'
import { MovieListItemType, WatchedMoviesTypes } from '@/types/movie'

import { MovieListStyled, MovieListHeaderStyled } from './MovieList.styled'
import { MovieListSkelton } from './MovieListSkelton'

export type MovieListPropTypes = {
	isLoading: boolean
	movies?: WatchedMoviesTypes
	selectedItemId?: string
}

export const WatchedMovieList = ({
	isLoading,
	movies,
	selectedItemId,
}: MovieListPropTypes): JSX.Element => {
	const { getMovieDetailHandler } = useMovie()
	const [movieList, setMovieList] = useState<MovieListItemType[]>([])

	const itemOnClickHandler = (imdbId: string) => {
		getMovieDetailHandler({ imdbId })
	}

	useEffect(() => {
		if (movies?.SearchResult) {
			setMovieList(movies?.SearchResult)
		}
	}, [movies])

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
			<MovieListStyled id="scrollableDiv" style={{ paddingBottom: '50px' }}>
				<MovieListHeaderStyled>
					{movieList.length}

					{movieList.length === 1 ? ' WATCHED MOVIE' : ' WATCHED MOVIES'}
				</MovieListHeaderStyled>
				<div>
					{movieList.map((movie) => (
						<MovieListItem
							key={movie?.imdbID}
							Title={movie?.Title}
							Year={movie?.Year}
							imdbID={movie?.imdbID}
							Poster={movie?.Poster}
							onClickHandler={itemOnClickHandler}
							isSelected={selectedItemId === movie?.imdbID}
						/>
					))}
				</div>
			</MovieListStyled>
		)
	}

	return (
		<MovieListStyled>
			<ContentCenterBlock>Your watched list is empty!</ContentCenterBlock>
		</MovieListStyled>
	)
}
