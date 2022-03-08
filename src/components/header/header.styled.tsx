import styled from '@emotion/styled'

export const HeaderStyled = styled.header`
	background: ${(props) => props.theme.colors.primary};
	min-height: 96px;

	.wrapper {
		padding: 15px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`
