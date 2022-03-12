import styled from '@emotion/styled'

import { breakpoint } from '@/styles/theme'

export const MovieListStyled = styled.div`
	position: relative;
	border-right: 1px solid ${(props) => props.theme.palette.divider};
	display: block;
	height: 100%;
	overflow-y: auto;
`

export const MovieListSkeltonStyled = styled.div`
	display: flex;
	padding: ${(props) => props.theme.spacing[4]};
	border-right: 1px solid ${(props) => props.theme.palette.divider};

	> div {
		&:not(:first-child) {
			margin-left: ${(props) => props.theme.spacing[4]};
			flex: 0.75;

			> span {
				&:not(:first-child) {
					display: block;
					margin-top: ${(props) => props.theme.spacing[3]};
				}
		}
	}
`
