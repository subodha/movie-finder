export type Rating = {
	Source: string
	Value: string
}

export type MovieType = '' | 'movie' | 'series' | 'episode'

export type MovieDetailTypes = {
	Title: string
	Year: string
	Rated: string
	Released: string
	Runtime: string
	Genre: string
	Director: string
	Writer: string
	Actors: string
	Plot: string
	Language: string
	Country: string
	Awards: string
	Poster: string
	Ratings: Rating[]
	Metascore: string
	imdbRating: string
	imdbVotes: string
	imdbID: string
	Type: MovieType
	Response: string
	totalSeasons?: string
	BoxOffice?: string
	Production?: string
	Website?: string
	DVD?: string
}

export type MovieListItemType = {
	Title: string
	Year: string
	imdbID: string
	Type: MovieType
	Poster: string
}

export type MovieSearchResponseTypes = {
	Response: boolean
	Error?: string
	SearchResult?: MovieListItemType[]
	CurrentPage?: number
	HasMorePage?: boolean
	TotalResults?: number
}

export type WatchedMoviesTypes = {
	Response: boolean
	Error?: string
	SearchResult?: MovieListItemType[]
}

export type MovieDetailResponseTypes = {
	Response: boolean
	Error?: string
	SelectedMovieDetail?: MovieDetailTypes
}
