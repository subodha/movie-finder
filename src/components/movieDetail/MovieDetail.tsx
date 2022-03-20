// eslint-disable-next-line no-use-before-define
import React, { Fragment } from 'react'

import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

import { MovieDetailTypes } from '@/types/movie'

import { Button } from '../button'
import {
	MovieDetailStyled,
	BackToListMobileButtonStyled,
} from './MovieDetail.styled'

const posterPlaceholder = '/movie_placeholder.png'

type MovieDetailProps = {
	isLoading: boolean
	movieDetail?: MovieDetailTypes
	activeInMobile?: boolean
	deactivateInMobileHandle?: () => void
}

export const ratingSkelton = (ratingCount: number) => {
	let i = 0
	const skeletons = []
	do {
		skeletons.push(
			<Fragment key={`skelton_${i}`}>
				<div className="movie-ratings-item skelton">
					<p>
						<Skeleton width="50%" height="1.8rem" count={1} />
					</p>
					<span>
						<Skeleton width="100%" count={1} />
					</span>
				</div>

				<div className="divider" />
			</Fragment>
		)
		// eslint-disable-next-line no-plusplus
		i++
	} while (i < ratingCount)

	return skeletons
}

export const MovieDetail = ({
	isLoading,
	movieDetail,
	activeInMobile,
	deactivateInMobileHandle,
}: MovieDetailProps): JSX.Element => {
	return (
		<>
			<MovieDetailStyled
				className={activeInMobile ? 'active-on-mobile' : 'deactive-on-mobile'}
			>
				<article className="movie">
					<header>
						<div className="movie-poster">
							<div className="image-ratio">
								<Image
									src={
										movieDetail?.Poster && movieDetail?.Poster !== 'N/A'
											? movieDetail?.Poster
											: posterPlaceholder
									}
									alt={`${movieDetail?.Title} poster`}
									// placeholder="blur"
									objectFit="cover"
									loading="eager"
									layout="fill"
								/>
							</div>
						</div>

						<div className="movie-info">
							<div className="movie-info-watchlist-container">
								{isLoading ? (
									<Skeleton width="8rem" height="2rem" />
								) : (
									// TODO: Toggle item for watch list
									<Button
										onClick={() => console.log('Toggle item for watch list')}
										label="Watchlist"
									/>
								)}
							</div>
							<div>
								<h2>
									{isLoading ? (
										<>
											<Skeleton width="100%" inline height="1.8rem" count={1} />
											<Skeleton width="40%" inline height="1.8rem" count={1} />
										</>
									) : (
										movieDetail?.Title
									)}
								</h2>
								{isLoading ? (
									<ul>
										<li>
											<Skeleton width={40} />
										</li>
										<li className="year">
											<Skeleton width={60} />
										</li>
										<li className="genre">
											<Skeleton width={150} />
										</li>
										<li className="run-time">
											<Skeleton width={80} />
										</li>
									</ul>
								) : (
									<ul>
										<li className="rated">{movieDetail?.Rated}</li>
										<li className="year">{movieDetail?.Year}</li>
										<li className="genre">{movieDetail?.Genre}</li>
										<li className="run-time">{movieDetail?.Runtime}</li>
									</ul>
								)}

								{isLoading ? (
									<Skeleton width={300} />
								) : (
									<p>{movieDetail?.Actors}</p>
								)}
							</div>
						</div>
					</header>

					<div className="movie-plot">
						{isLoading ? (
							<p>
								<Skeleton width="100%" count={1} />
								<Skeleton width="80%" count={1} />
								<Skeleton width="90%" count={1} />
								<Skeleton width="25%" count={1} />
							</p>
						) : (
							<p>{movieDetail?.Plot}</p>
						)}
					</div>

					<div className="movie-ratings">
						{isLoading
							? ratingSkelton(3)
							: movieDetail?.Ratings?.map((rate) => (
									<div key={rate?.Source}>
										<div className="movie-ratings-item">
											<p>{rate?.Value}</p>
											<span>{rate?.Source}</span>
										</div>
										<div className="divider" />
									</div>
							  ))}
					</div>
				</article>
			</MovieDetailStyled>
			{activeInMobile && (
				<BackToListMobileButtonStyled
					type="button"
					onClick={deactivateInMobileHandle}
				>
					Back to list
				</BackToListMobileButtonStyled>
			)}
		</>
	)
}
