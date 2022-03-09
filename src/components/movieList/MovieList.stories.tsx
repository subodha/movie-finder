import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MovieList } from './MovieList'

export default {
	title: 'Example/MovieList',
	component: MovieList,
	parameters: {
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof MovieList>

const Template: ComponentStory<typeof MovieList> = (args) => (
	<MovieList />
)

export const movieListItem = Template.bind({})

