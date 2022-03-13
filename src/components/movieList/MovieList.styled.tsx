import styled from '@emotion/styled'

export const MovieListStyled = styled.div`
	border-right: 1px solid ${({ theme }) => theme.palette.divider};
	position: relative;
	overflow-y: auto;
	display: block;
	height: 100%;
`

export const MovieListSkeltonStyled = styled.div`
	border-right: 1px solid ${({ theme }) => theme.palette.divider};
	padding: ${({ theme }) => theme.spacing[4]};
	display: flex;

	> div {
		&:not(:first-child) {
			margin-left: ${({ theme }) => theme.spacing[4]};
			flex: 0.75;

			> span {
				&:not(:first-child) {
					margin-top: ${({ theme }) => theme.spacing[3]};
					display: block;
				}
		}
	}
`
