import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MovieDetail } from './MovieDetail'

export default {
	title: 'Example/MovieDetail',
	component: MovieDetail,
	parameters: {
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof MovieDetail>

const Template: ComponentStory<typeof MovieDetail> = (args) => (
	<MovieDetail />
)

export const movieListItem = Template.bind({})

