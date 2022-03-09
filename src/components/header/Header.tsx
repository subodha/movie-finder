import React from 'react'

import { MovieSearchFormProps } from '@/types/movieSearch'

import { HeaderStyled } from './Header.styled'

type HeaderProps = {
	movieSearch?: MovieSearchFormProps
}

export const Header = ({ movieSearch }: HeaderProps): JSX.Element => (
	<HeaderStyled>
		<div className="wrapper">
			<div>Search</div>
			<div>Advanced filter goes here!</div>
		</div>
	</HeaderStyled>
)
