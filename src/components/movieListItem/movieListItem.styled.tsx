import styled from '@emotion/styled'

import { breakpoint } from '@/styles/theme'

export const MovieListItemStyled = styled.div`
	position: relative;
	border-bottom: 1px solid ${(props) => props.theme.palette.divider};
	height: 100%;
	overflow-y: auto;
	display: block;

	${breakpoint('md')} {
		// background: red;
	}

	.movie {
		transition: background-color 0.2s ease-in-out;
		background-color: ${(props) => props.theme.palette.common.white};
		padding: ${(props) => props.theme.spacing[4]};
		cursor: pointer;
		display: flex;

		&:hover {
			background-color: ${(props) => props.theme.palette.grey[100]};
		}

		&-poster {
			display: block;
			min-width: 100px;
			margin-right: 12px;
		}
	}
`
