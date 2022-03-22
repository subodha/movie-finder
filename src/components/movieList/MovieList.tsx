import { useEffect, useState } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

import { ContentCenterBlock } from '@/components/layout'
import { MovieListItem } from '@/components/movieListItem'
import { useMovie } from '@/context/MovieContext'
import { MovieListItemType, MovieSearchResponseTypes } from '@/types/movie'

import { MovieListStyled, MovieListHeaderStyled } from './MovieList.styled'
import { MovieListSkelton } from './MovieListSkelton'

export type MovieListPropTypes = {
	isLoading: boolean
	movies?: MovieSearchResponseTypes
	selectedItemId?: string
}

export const MovieList = ({
	isLoading,
	movies,
	selectedItemId,
}: MovieListPropTypes): JSX.Element => {
	const { loadMoreMoviesHandler, getMovieDetailHandler, movieSearchQuery } =
		useMovie()
	const [movieList, setMovieList] = useState<MovieListItemType[]>([])
	const [hasMorePage, setHasMorePage] = useState<boolean>(false)

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

			setHasMorePage(moreMovies?.HasMorePage || false)
		}
	}

	const itemOnClickHandler = (imdbId: string) => {
		getMovieDetailHandler({ imdbId })
	}

	useEffect(() => {
		if (movies?.SearchResult) {
			setMovieList(movies?.SearchResult)
			setHasMorePage(movies?.HasMorePage || false)
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

	if (movies?.Response === false) {
		return (
			<MovieListStyled>
				<ContentCenterBlock>
					{movies?.Error && <h4>{movies.Error}</h4>}
					Please try again with different search terms
				</ContentCenterBlock>
			</MovieListStyled>
		)
	}

	if (movieList.length > 0) {
		return (
			<MovieListStyled id="scrollableDiv" style={{ paddingBottom: '50px' }}>
				<MovieListHeaderStyled>
					{movies?.TotalResults ? movies?.TotalResults : null}

					{movies?.TotalResults === 1 ? ' RESULT' : ' RESULTS' || 'No result!'}
				</MovieListHeaderStyled>
				<InfiniteScroll
					dataLength={movies?.TotalResults || 0}
					next={loadMoreMovies}
					hasMore={movies?.HasMorePage || false}
					loader={
						<div className="loader" key={0}>
							Lading more movies ...!
						</div>
					}
					scrollableTarget="scrollableDiv"
					endMessage={
						<p style={{ textAlign: 'center' }}>
							<b>You have seen it all</b>
						</p>
					}
				>
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
				</InfiniteScroll>
				{/* Adding tempory button to fetch more page */}
				{hasMorePage && (
					<button type="button" onClick={loadMoreMovies}>
						Load more movies
					</button>
				)}
			</MovieListStyled>
		)
	}

	return (
		<MovieListStyled>
			<ContentCenterBlock>Please search movie by name</ContentCenterBlock>
		</MovieListStyled>
	)
}
