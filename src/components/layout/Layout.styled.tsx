import styled from '@emotion/styled'

import { breakpoint } from '@/styles/theme'

export const Layout = styled.div`
	grid-template-rows: ${({ theme }) => theme.spacing[21]} auto;
	overflow: hidden;
	height: 100vh;
	display: grid;
`

export const Main = styled.main`
	grid-template-columns: 1fr;
	justify-content: center;
	overflow: hidden;
	display: grid;

	${breakpoint('md')} {
		grid-template-columns: 1fr 2fr;
	}

	${breakpoint('lg')} {
		grid-template-columns: 4fr 8fr;
	}

	${breakpoint('xl')} {
		grid-template-columns: 3fr 9fr;
	}
`

export const ContentCenterBlock = styled.div`
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-align: center;
	display: flex;
`

export const ListContainer = styled.div`
	border-right: 1px solid ${({ theme }) => theme.palette.divider};
	grid-template-rows: auto 50px;
	overflow: hidden;
	display: grid;

	footer {
		padding: ${({ theme }) => theme.spacing[4]}
			${({ theme }) => theme.spacing[6]};
		box-shadow: 0 0 ${({ theme }) => theme.spacing[3]}
			${({ theme }) => theme.spacing[3]}
			${({ theme }) => theme.palette.common.white};
		z-index: 1;
	}
`

export const EmptyMovieDetailStyled = styled.div`
	display: none;

	${breakpoint('md')} {
		display: block;
	}
`
