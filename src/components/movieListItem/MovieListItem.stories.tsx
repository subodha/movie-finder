import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MovieListItem } from './MovieListItem'

export default {
	title: 'Example/MovieListItem',
	component: MovieListItem,
	parameters: {
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof MovieListItem>

const Template: ComponentStory<typeof MovieListItem> = (args) => (
	<MovieListItem {...args} />
)

export const movieListItem = Template.bind({})
movieListItem.args = {
	title: 'Star Wars',
	year: '1977',
	poster:
		'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
	imdbid: 'tt0076759',
}
