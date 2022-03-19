// eslint-disable-next-line no-use-before-define
import React from 'react'

import Image from 'next/image'

import { MovieDetailTypes } from '@/types/movie'

import { MovieListItemStyled } from './MovieListItem.styled'

const posterPlaceholder = '/movie_placeholder.png'

type ClickEventType = {
	onClickHandler: (imdbId: string) => void
}

type MovieListItemProps = Pick<
	MovieDetailTypes,
	'title' | 'poster' | 'imdbid' | 'year'
> &
	ClickEventType

export const MovieListItem = ({
	title,
	year,
	poster,
	imdbid,
	onClickHandler,
}: MovieListItemProps): JSX.Element => {
	const itemClickHandler = (e: React.MouseEvent<HTMLElement>): void => {
		e.preventDefault()
		onClickHandler(imdbid)
	}

	const itemKeyUpkHandler = (e: React.KeyboardEvent<HTMLElement>): void => {
		if (e.key === 'Enter') {
			e.preventDefault()
			onClickHandler(imdbid)
		}
	}
	return (
		<MovieListItemStyled>
			<div
				className="movie"
				role="button"
				tabIndex={0}
				id={imdbid}
				onClick={itemClickHandler}
				onKeyUp={itemKeyUpkHandler}
			>
				<div className="movie-poster">
					<div className="image-ratio">
						<Image
							alt={`${title} poster`}
							src={poster !== 'N/A' ? poster : posterPlaceholder}
							layout="fill"
							objectFit="cover"
							loading="eager"
						/>
					</div>
				</div>
				<div className="movie-details">
					<h4>{title}</h4>
					<span>{year}</span>
				</div>
			</div>
		</MovieListItemStyled>
	)
}
