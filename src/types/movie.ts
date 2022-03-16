export type Rating = {
	source: string
	value: string
}

export enum MovieType {
	Movie = 'movie',
	Series = 'series',
}

export type MovieDetailTypes = {
	title: string
	year: string
	rated: string
	released: string
	runtime: string
	genre: string
	director: string
	writer: string
	actors: string
	plot: string
	language: string
	country: string
	awards: string
	poster: string
	ratings: Rating[]
	metascore: string
	imdbRating: string
	imdbVotes: string
	imdbid: string
	type: string
	totalSeasons: string
	response: string
}

export type MovieSummeryType = {
	Ttitle: string
	Year: string
	imdbid: string
	Type: MovieType
	Poster: string
}

export type MovieSearchResponseTypes = {
	Response: boolean
	Error?: string
	SearchResult?: MovieSummeryType[]
	TotalResults?: number
}
