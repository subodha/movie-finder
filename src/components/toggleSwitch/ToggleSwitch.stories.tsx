import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ToggleSwitch } from '@/components/toggleSwitch'

export default {
	title: 'Components/ToggleSwitch',
	component: ToggleSwitch,
} as ComponentMeta<typeof ToggleSwitch>

const Template: ComponentStory<typeof ToggleSwitch> = (args) => <ToggleSwitch {...args} />

export const Switch = Template.bind({})
Switch.args = {
	label: 'Button',
	size: 16,
	onToggle: () => alert("changed")
}
