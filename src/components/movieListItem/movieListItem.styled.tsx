import styled from '@emotion/styled'

import { breakpoint } from '@/styles/theme'

export const MovieListItemStyled = styled.div`
	padding: 15px 20px;
	display: flex;
	position: relative;
	cursor: pointer;

	${breakpoint('md')} {
		background: red;
	}

	.poster {
		display: block;
		min-width: 100px;
		margin-right: 12px;
	}
`
