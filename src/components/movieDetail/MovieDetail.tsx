// eslint-disable-next-line no-use-before-define
import React from 'react'

import Image from 'next/image'

import { Button } from '../button'
import { MovieDetailStyled } from './MovieDetail.styled'

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
	Poster:
		'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
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

export const MovieDetail = (): JSX.Element => (
	<MovieDetailStyled>
		<article className="movie">
			<header>
				<div className="movie-poster">
					<div className="image-ratio">
						<Image
							alt={`${dummyMovieDetails.Title} poster`}
							src={dummyMovieDetails.Poster}
							layout="fill"
							objectFit="cover"
							loading="eager"
						/>
					</div>
				</div>

				<div className="movie-info">
					<div className="movie-info-watchlist-container">
						<Button label="Watchlist" />
					</div>
					<div>
						<h2>{dummyMovieDetails.Title}</h2>
						<ul>
							<li className="rated">{dummyMovieDetails.Rated}</li>
							<li className="year">{dummyMovieDetails.Year}</li>
							<li className="genre">{dummyMovieDetails.Genre}</li>
							<li className="run-time">{dummyMovieDetails.Runtime}</li>
						</ul>
						<p>{dummyMovieDetails.Actors}</p>
					</div>
				</div>
			</header>

			<div className="movie-plot">
				<span>{dummyMovieDetails.Plot}</span>
			</div>

			<div className="movie-ratings">
				{dummyMovieDetails.Ratings.map((rate) => (
					<>
						<div className="movie-ratings-item">
							<p>{rate.Value}</p>
							<span>{rate.Source}</span>
						</div>
						<div className="divider" />
					</>
				))}
			</div>
		</article>
	</MovieDetailStyled>
)
