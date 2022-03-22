import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Icon from './index'

export default {
	title: 'Components/Icon',
	component: Icon,
	parameters: {
		layout: 'fullscreen',
	} as ComponentMeta<typeof Icon>,
}

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const defaultIcon = Template.bind({})
defaultIcon.args = {
	size: 24,
	fill: '#d1d1d1',
	name: 'SearchIcon'
}
