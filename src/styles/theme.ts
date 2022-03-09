// Influance with https://mui.com/customization/default-theme/
export const theme = {
	palette: {
		common: {
			black: '#000',
			white: '#fff',
		},
		primary: {
			main: '#1976d2',
			light: '#42a5f5',
			dark: '#1565c0',
			contrastText: '#fff',
		},
		secondary: {
			main: '#9c27b0',
			light: '#ba68c8',
			dark: '#7b1fa2',
			contrastText: '#fff',
		},
		success: {
			main: '#2e7d32',
			light: '#4caf50',
			dark: '#1b5e20',
			contrastText: '#fff',
		},
		warning: {
			main: '#ed6c02',
			light: '#ff9800',
			dark: '#e65100',
			contrastText: '#fff',
		},
		error: {
			main: '#d32f2f',
			light: '#ef5350',
			dark: '#c62828',
			contrastText: '#fff',
		},
		info: {
			main: '#0288d1',
			light: '#03a9f4',
			dark: '#01579b',
			contrastText: '#fff',
		},
		grey: {
			50: '#fafafa',
			100: '#f4f4f4',
			200: '#ebebeb',
			300: '#fafafa',
			400: '#fafafa',
			500: '#666666',
			600: '#8e8e8e',
			700: '#fafafa',
			800: '#303030',
			900: '#303030',
		},
		text: {
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.6)',
			disabled: 'rgba(0, 0, 0, 0.87)',
		},
		divider: '#bbbbbb',
		spacing: ['0', '2px', '4px', '6px', '8px', '10px', '12px'],
		borderRadius: {
			none: 0,
			xs: '2px',
			sm: '4px',
			md: '8px',
			lg: '16px',
			xl: '24px',
			xxl: '32px',
			xxxl: '64px',
			round: '50%',
			full: '999px',
		},
		shadow: {
			0: 'none',
			1: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
		},
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
