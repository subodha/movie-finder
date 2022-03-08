import { ThemeProvider } from '@emotion/react'
import { addDecorator } from '@storybook/react'
import * as NextImage from 'next/image'

import { theme } from '../src/styles/theme'
import globalStyles from '../src/styles/globals.styled'

addDecorator((story) => (
	<ThemeProvider theme={theme}>
		{globalStyles}
		{story()}
	</ThemeProvider>
))
export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: (props) => (
		<OriginalNextImage
			{...props}
			unoptimized
			blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
		/>
	),
})
