import styled from '@emotion/styled'

export const HeaderStyled = styled.header`
	background: ${(props) => props.theme.palette.grey[500]};
	min-height: 96px;
	display: flex;

	.wrapper {
		padding: 15px 20px;
		justify-content: space-between;
		align-items: center;
		display: flex;
		flex: 1;
	}
`
