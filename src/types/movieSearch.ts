import { MovieType } from './movie'

export type MovieSearchQueryTypes = {
	title?: string
	year?: Array<number>
	type?: MovieType
	page?: number
}
