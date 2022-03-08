export const theme = {
	colors: {
		primaryLighter: '#F4F4FF',
		primaryLight: '#ebebeb',
		primary: '#666666',
		primaryDark: '##8e8e8e',
		primaryDarker: '#303030',
	},
}

const Breakpoints = {
	xs: 0,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1440,
	xxxl: 1920,
}

export const breakpoint = (n: keyof typeof Breakpoints) =>
	`@media (min-width: ${Breakpoints[n]}px)`
