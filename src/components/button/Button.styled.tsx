import styled from '@emotion/styled'

export const ButtonStyled = styled.button`
	&.button {
		display: inline-block;
		border-radius: ${({ theme }) => theme.borderRadius.sm};
		cursor: pointer;
		line-height: 1;
		border: 0;
	}

	&.button-primary {
		color: white;
		background-color: #1ea7fd;
	}

	&.button-secondary {
		color: #333;
		background-color: transparent;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
	}

	&.button-small {
		font-size: 12px;
		padding: 10px 16px;
	}

	&.button-medium {
		font-size: 14px;
		padding: 11px 20px;
	}

	&.button-large {
		font-size: 16px;
		padding: 12px 24px;
	}
`
