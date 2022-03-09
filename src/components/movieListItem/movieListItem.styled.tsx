import styled from '@emotion/styled'

import { breakpoint } from '@/styles/theme'

export const MovieListItemStyled = styled.div`
	padding: 15px 20px;
	position: relative;
	cursor: pointer;
	display: flex;
	transition: background-color 0.2s ease-in-out;
	background-color: ${(props) => props.theme.palette.common.white};
	border-bottom: 1px solid ${(props) => props.theme.palette.divider};

	${breakpoint('md')} {
		// background: red;
	}

	&:hover {
		background-color: ${(props) => props.theme.palette.grey[100]};
	}

	.poster {
		display: block;
		min-width: 100px;
		margin-right: 12px;
	}
`
