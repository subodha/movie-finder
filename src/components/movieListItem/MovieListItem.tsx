// eslint-disable-next-line no-use-before-define
import React from 'react'

import Image from 'next/image'

import { MovieDetailTypes } from '@/types/movie'

import { MovieListItemStyled } from './MovieListItem.styled'

const posterPlaceholder = '/movie_placeholder.png'

type MovieListItemProps = {
	onClickHandler: (imdbId: string) => void
	isSelected: boolean
}

type MovieListItemPropsTypes = Pick<
	MovieDetailTypes,
	'Title' | 'Poster' | 'imdbID' | 'Year'
> &
	MovieListItemProps

export const MovieListItem = ({
	Title,
	Year,
	Poster,
	imdbID,
	onClickHandler,
	isSelected = false,
}: MovieListItemPropsTypes): JSX.Element => {
	const itemClickHandler = (e: React.MouseEvent<HTMLElement>): void => {
		e.preventDefault()
		onClickHandler(imdbID)
	}

	const itemKeyUpkHandler = (e: React.KeyboardEvent<HTMLElement>): void => {
		if (e.key === 'Enter') {
			e.preventDefault()
			onClickHandler(imdbID)
		}
	}
	return (
		<MovieListItemStyled isSelected={isSelected}>
			<div
				className="movie"
				role="button"
				tabIndex={0}
				id={imdbID}
				onClick={itemClickHandler}
				onKeyUp={itemKeyUpkHandler}
			>
				<div className="movie-poster">
					<div className="image-ratio">
						<Image
							alt={`${Title} poster`}
							src={Poster && Poster !== 'N/A' ? Poster : posterPlaceholder}
							layout="fill"
							objectFit="cover"
							loading="eager"
						/>
					</div>
				</div>
				<div className="movie-details">
					<h4>{Title}</h4>
					<span>{Year}</span>
				</div>
			</div>
		</MovieListItemStyled>
	)
}
