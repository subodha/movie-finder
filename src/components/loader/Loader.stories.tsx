import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Loader } from '@/components/loader'

export default {
	title: 'Components/Loader',
	component: Loader,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Primary = Template.bind({})
