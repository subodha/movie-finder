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
		<div className="movie" role="button" tabIndex={0}>
			<div className="movie-poster">
				<div className="image-ratio">
					<Image
						alt={`${title} poster`}
						src={poster}
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
