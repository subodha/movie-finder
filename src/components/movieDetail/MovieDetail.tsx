// eslint-disable-next-line no-use-before-define
import React, { Fragment, useState } from 'react'

import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

import { Button } from '../button'
import { MovieDetailStyled } from './MovieDetail.styled'

const posterPlaceholder = '/poster_placeholder.png'

// type MovieDetailProps = {}

export const dummyMovieDetails = {
	Title: 'Batman Begins',
	Year: '2005',
	Rated: 'PG-13',
	Released: '15 Jun 2005',
	Runtime: '140 min',
	Genre: 'Action, Crime, Drama',
	Director: 'Christopher Nolan',
	Writer: 'Bob Kane, David S. Goyer, Christopher Nolan',
	Actors: 'Christian Bale, Michael Caine, Ken Watanabe',
	Plot: 'When his parents are killed, billionaire playboy Bruce Wayne relocates to Asia, where he is mentored by Henri Ducard and Ras Al Ghul in how to fight evil. When learning about the plan to wipe out evil in Gotham City by Ducard, Bruce prevents this plan from getting any further and heads back to his home. Back in his original surroundings, Bruce adopts the image of a bat to strike fear into the criminals and the corrupt as the icon known as "Batman". But it doesn\'t stay quiet for long.',
	Language: 'English, Mandarin',
	Country: 'United States, United Kingdom',
	Awards: 'Nominated for 1 Oscar. 13 wins & 79 nominations total',

	Ratings: [
		{
			Source: 'Internet Movie Database',
			Value: '8.2/10',
		},
		{
			Source: 'Rotten Tomatoes',
			Value: '84%',
		},
		{
			Source: 'Metacritic',
			Value: '70/100',
		},
	],
	Metascore: '70',
	imdbRating: '8.2',
	imdbVotes: '1,392,519',
	imdbID: 'tt0372784',
	Type: 'movie',
	DVD: '18 Oct 2005',
	BoxOffice: '$206,852,432',
	Production: 'N/A',
	Website: 'N/A',
	Response: 'True',
}

export const ratingSkelton = (ratingCount: number) => {
	let i = 0
	const skeletons = []
	do {
		skeletons.push(
			<>
				<div className="movie-ratings-item skelton">
					<p>
						<Skeleton width="50%" height="1.8rem" count={1} />
					</p>
					<span>
						<Skeleton width="100%" count={1} />
					</span>
				</div>

				<div className="divider" />
			</>
		)
		// eslint-disable-next-line no-plusplus
		i++
	} while (i < ratingCount)

	return skeletons
}

export const MovieDetail = (): JSX.Element => {
	const [isFetching, setIsFetching] = useState<boolean>(false)
	return (
		<MovieDetailStyled>
			<article className="movie">
				<header>
					<div className="movie-poster">
						<div className="image-ratio">
							<Image
								src={dummyMovieDetails?.Poster || posterPlaceholder}
								alt={`${dummyMovieDetails?.Title} poster`}
								// placeholder="blur"
								objectFit="cover"
								loading="eager"
								layout="fill"
							/>
						</div>
					</div>

					<div className="movie-info">
						<div className="movie-info-watchlist-container">
							{isFetching ? (
								<Skeleton width="8rem" height="2rem" />
							) : (
								<Button
									onClick={() => setIsFetching(!isFetching)}
									label="Watchlist"
								/>
							)}
						</div>
						<div>
							<h2>
								{isFetching ? (
									<>
										<Skeleton width="100%" inline height="1.8rem" count={1} />
										<Skeleton width="40%" inline height="1.8rem" count={1} />
									</>
								) : (
									dummyMovieDetails?.Title
								)}
							</h2>
							{isFetching ? (
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
									<li className="rated">{dummyMovieDetails?.Rated}</li>
									<li className="year">{dummyMovieDetails?.Year}</li>
									<li className="genre">{dummyMovieDetails?.Genre}</li>
									<li className="run-time">{dummyMovieDetails?.Runtime}</li>
								</ul>
							)}

							{isFetching ? (
								<Skeleton width={300} />
							) : (
								<p>{dummyMovieDetails?.Actors}</p>
							)}
						</div>
					</div>
				</header>

				<div className="movie-plot">
					{isFetching ? (
						<p>
							<Skeleton width="100%" count={1} />
							<Skeleton width="80%" count={1} />
							<Skeleton width="90%" count={1} />
							<Skeleton width="25%" count={1} />
						</p>
					) : (
						<p>{dummyMovieDetails?.Plot}</p>
					)}
				</div>

				<div className="movie-ratings">
					{isFetching
						? ratingSkelton(3)
						: dummyMovieDetails?.Ratings?.map((rate) => (
								<Fragment key={rate?.Value}>
									<div className="movie-ratings-item">
										<p>{rate?.Value}</p>
										<span>{rate?.Source}</span>
									</div>
									<div className="divider" />
								</Fragment>
						  ))}
				</div>
			</article>
		</MovieDetailStyled>
	)
}
