import { useState, useEffect } from 'react'

import Slider from 'rc-slider'

import { SearchIcon } from '@/components/icon/SearchIcon'
import { useMovie } from '@/context/MovieContext'
import { theme } from '@/styles/theme'
import { MovieSearchQueryTypes } from '@/types/movieSearch'

import {
	HeaderStyled,
	RcSliderStyled,
	ResultFilterStyled,
	ButtonGroupeStyled,
	TitleSearchStyled,
} from './Header.styled'

type HeaderProps = {
	//
}

export const Header = (): JSX.Element => {
	const [title, setTitle] = useState<string>('')
	const [year, setYear] = useState<number[]>([])
	const [type, setType] = useState<string>('')
	const [page, setPage] = useState<number>(1)
	const { movieSearchHandler } = useMovie()

	useEffect(() => {
		const movieSearchQuery: MovieSearchQueryTypes = {}
		if (title !== '') {
			movieSearchQuery.title = title
			if (year) movieSearchQuery.year = year
			if (type) movieSearchQuery.type = type

			movieSearchHandler(movieSearchQuery)
		}
	}, [title, year, type, movieSearchHandler])

	return (
		<HeaderStyled>
			<div className="wrapper">
				<TitleSearchStyled>
					<SearchIcon fill={theme.palette.grey[100]} />
					<input
						type="search"
						name="title"
						placeholder="Search by Title"
						onChange={(event) => setTitle(event.target.value)}
					/>
				</TitleSearchStyled>

				<ResultFilterStyled>
					<div>
						<span>Year</span>
						<RcSliderStyled>
							<Slider
								range
								allowCross={false}
								defaultValue={[1995, 2020]}
								draggableTrack
								min={1970}
								max={2015}
								onChange={(value) => setYear(value as Array<number>)}
							/>
						</RcSliderStyled>
					</div>

					<div>
						<span>Type</span>

						<ButtonGroupeStyled>
							<label htmlFor="any">
								<input
									type="radio"
									id="any"
									name="type"
									value=""
									onChange={(event) => setType(event.target.value)}
								/>
								Any
							</label>

							<label htmlFor="movie">
								<input
									type="radio"
									id="movie"
									name="type"
									value="movie"
									onChange={(event) => setType(event.target.value)}
								/>
								Movies
							</label>

							<label htmlFor="series">
								<input
									type="radio"
									id="series"
									name="type"
									value="series"
									onChange={(event) => setType(event.target.value)}
								/>
								Series
							</label>

							<label htmlFor="episode">
								<input
									type="radio"
									id="episode"
									name="type"
									value="episode"
									onChange={(event) => setType(event.target.value)}
								/>
								Episodes
							</label>
						</ButtonGroupeStyled>
					</div>
				</ResultFilterStyled>
			</div>
		</HeaderStyled>
	)
}
