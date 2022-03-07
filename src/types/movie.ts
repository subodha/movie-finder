export type Rating = {
  source: string
  value: string
}

export type Movie = {
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
