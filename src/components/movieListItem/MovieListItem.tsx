// eslint-disable-next-line no-use-before-define
import React from 'react'

import Image from 'next/image'

import { Movie } from '@/types/movie'

import { MovieListItemStyled } from './MovieListItem.styled'

type MovieListItemProps = Pick<Movie, 'title' | 'poster' | 'imdbid' | 'year'>

export const MovieListItem = ({
	title,
	year,
	poster,
	imdbid,
}: MovieListItemProps): JSX.Element => (
	<MovieListItemStyled>
		<div className="poster">
			<Image
				src={poster}
				layout="responsive"
				loading="eager"
				width="100"
				height="160"
				alt={`${title} poster`}
			/>
		</div>
		<div className="movie-details">
			<h4>{title}</h4>
			<span>{year}</span>
		</div>
	</MovieListItemStyled>
)
