import styled from '@emotion/styled'

export const MovieListStyled = styled.div`
	position: relative;
	overflow-y: auto;
	display: block;
	height: 100%;
`

export const LoadMoreStyled = styled.div`
	padding: ${({ theme }) => theme.spacing[7]} ${({ theme }) => theme.spacing[6]};

	justify-content: center;
	align-items: center;
	display: flex;
	height: 100%;

	span {
		color: ${({ theme }) => theme.palette.grey[300]};
		padding-right: ${({ theme }) => theme.spacing[4]};
	}
`

export const MovieListHeaderStyled = styled.div`
	background: ${({ theme }) => theme.palette.common.white};
	box-shadow: 0 0 ${({ theme }) => theme.spacing[3]}
		${({ theme }) => theme.spacing[3]}
		${({ theme }) => theme.palette.common.white};
	padding: ${({ theme }) => theme.spacing[7]} ${({ theme }) => theme.spacing[6]};
	color: ${({ theme }) => theme.palette.grey[500]};
	align-items: center;
	position: sticky;
	display: flex;
	z-index: 2;
	top: 0;
`

export const MovieListSkeltonStyled = styled.div`
	padding: ${({ theme }) => theme.spacing[4]};
	display: flex;

	> div {
		&:not(:first-of-type) {
			margin-left: ${({ theme }) => theme.spacing[4]};
			flex: 0.75;

			> span {
				&:not(:first-of-type) {
					margin-top: ${({ theme }) => theme.spacing[3]};
					display: block;
				}
		}
	}
`
