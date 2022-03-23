import { useState, useEffect } from 'react'

import Slider from 'rc-slider'
import { DebounceInput } from 'react-debounce-input'

import Icon from '@/components/icon'
import { useMovie } from '@/context/MovieContext'
import { theme } from '@/styles/theme'
import { MovieType } from '@/types/movie'
import { MovieSearchQueryTypes } from '@/types/movieSearch'

import {
	HeaderStyled,
	RcSliderStyled,
	ResultFilterStyled,
	ButtonGroupeStyled,
	TitleSearchStyled,
	FilterToggleBtnStyled,
} from './Header.styled'

type yearRangeType = {
	min: number
	max: number
}

export const Header = (): JSX.Element => {
	const [filterActiveInMobile, setFilterActiveInMobile] = useState(false)
	const [title, setTitle] = useState<string>('')
	const [year, setYear] = useState<number[]>([])
	const [type, setType] = useState<MovieType>('')
	const { movieSearchHandler } = useMovie()

	const yearRange: yearRangeType = {
		min: 1970,
		max: 2022,
	}

	useEffect(() => {
		const movieSearchQuery: MovieSearchQueryTypes = {}
		if (title !== '') {
			movieSearchQuery.title = title
			if (year) movieSearchQuery.year = year
			if (type) movieSearchQuery.type = type

			movieSearchHandler(movieSearchQuery)
		}
	}, [title, year, type, movieSearchHandler])

	const filterSlideHandler = () => {
		setFilterActiveInMobile(!filterActiveInMobile)
	}

	// TODO: TO check year filter}
	return (
		<HeaderStyled>
			<div className="wrapper">
				<TitleSearchStyled>
					<Icon name="SearchIcon" fill={theme.palette.grey[100]} />
					<DebounceInput
						minLength={2}
						debounceTimeout={300}
						type="search"
						name="title"
						placeholder="Search by Title"
						onChange={(event) => setTitle(event.target.value)}
					/>
				</TitleSearchStyled>

				<ResultFilterStyled
					className={
						filterActiveInMobile ? 'active-on-mobile' : 'deactive-on-mobile'
					}
				>
					<div>
						<span>Year {year.length > 1 ? `: ${year[0]}` : null}</span>
						<RcSliderStyled>
							<span>{yearRange.min}</span>
							<Slider
								range
								allowCross={false}
								defaultValue={[1995, yearRange.max]}
								draggableTrack
								min={yearRange.min}
								max={yearRange.max}
								onChange={(value) => setYear(value as Array<number>)}
							/>
							<span>{yearRange.max}</span>
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
									onChange={(event) => setType(event.target.value as MovieType)}
								/>
								Any
							</label>

							<label htmlFor="movie">
								<input
									type="radio"
									id="movie"
									name="type"
									value="movie"
									onChange={(event) => setType(event.target.value as MovieType)}
								/>
								Movies
							</label>

							<label htmlFor="series">
								<input
									type="radio"
									id="series"
									name="type"
									value="series"
									onChange={(event) => setType(event.target.value as MovieType)}
								/>
								Series
							</label>

							<label htmlFor="episode">
								<input
									type="radio"
									id="episode"
									name="type"
									value="episode"
									onChange={(event) => setType(event.target.value as MovieType)}
								/>
								Episodes
							</label>
						</ButtonGroupeStyled>
					</div>
				</ResultFilterStyled>
				<FilterToggleBtnStyled
					type="button"
					className={`button ${filterActiveInMobile ? 'active' : ''}`}
					onClick={filterSlideHandler}
				>
					<Icon name="FilterIcon" size={20} />
				</FilterToggleBtnStyled>
			</div>
		</HeaderStyled>
	)
}
