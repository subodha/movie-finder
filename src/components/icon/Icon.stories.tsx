import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SearchIcon } from './SearchIcon'

export default {
	title: 'Components/Icon',
	component: SearchIcon,
	parameters: {
		layout: 'fullscreen',
	} as ComponentMeta<typeof SearchIcon>,
}

const Template: ComponentStory<typeof SearchIcon> = (args) => <SearchIcon {...args} />

export const defaultIcon = Template.bind({})
defaultIcon.args = {
	size: 24,
	fill: '#d1d1d1',
}
