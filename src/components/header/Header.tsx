import Slider from 'rc-slider'

import { SearchIcon } from '@/components/icon/SearchIcon'
import { theme } from '@/styles/theme'
import { MovieSearchFormProps } from '@/types/movieSearch'

import {
	HeaderStyled,
	RcSliderStyled,
	ResultFilterStyled,
	ButtonGroupeStyled,
	TitleSearchStyled,
} from './Header.styled'

type HeaderProps = {
	movieSearch?: MovieSearchFormProps
}

export const Header = ({ movieSearch }: HeaderProps): JSX.Element => (
	<HeaderStyled>
		<div className="wrapper">
			<TitleSearchStyled>
				<SearchIcon fill={theme.palette.grey[100]} />
				<input type="search" name="title" placeholder="Search by Title" />
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
							onChange={(value) => console.log(value)}
						/>
					</RcSliderStyled>
				</div>

				<div>
					<span>Type</span>

					<ButtonGroupeStyled>
						<label htmlFor="any">
							<input type="radio" id="any" name="type" value="" />
							Any
						</label>

						<br />

						<label htmlFor="movies">
							<input type="radio" id="movies" name="type" value="Movies" />
							Movies
						</label>
						<br />

						<label htmlFor="series">
							<input type="radio" id="series" name="type" value="Series" />
							Series
						</label>
						<br />

						<label htmlFor="episodes">
							<input type="radio" id="episodes" name="type" value="Episodes" />
							Episodes
						</label>
						<br />
					</ButtonGroupeStyled>
				</div>
			</ResultFilterStyled>
		</div>
	</HeaderStyled>
)
