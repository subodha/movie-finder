import styled from '@emotion/styled'

export const ButtonStyled = styled.button`
	&.button {
		border-radius: ${({ theme }) => theme.borderRadius.sm};
		font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
		align-items: center;
		cursor: pointer;
		line-height: 1;
		display: flex;
		border: 0;

		svg {
			margin-right: ${({ theme }) => theme.spacing[3]};
		}

		&-primary {
			color: ${({ theme }) => theme.palette.primary.contrastText};
			background-color: ${({ theme }) => theme.palette.primary.main};
			box-shadow: ${({ theme }) => theme.palette.primary.main} 0px 0px 0px 1px
				inset;
		}

		&-secondary {
			color: ${({ theme }) => theme.palette.primary.contrastText};
			background-color: ${({ theme }) => theme.palette.primary.main};
			box-shadow: ${({ theme }) => theme.palette.primary.main} 0px 0px 0px 1px
				inset;
		}

		&-gray {
			color: ${({ theme }) => theme.palette.common.white};
			background-color: ${({ theme }) => theme.palette.grey[700]};
			box-shadow: ${({ theme }) => theme.palette.grey[700]} 0px 0px 0px 1px
				inset;
		}

		&-outlined {
			background-color: transparent;

			&.button-primary {
				color: ${({ theme }) => theme.palette.primary.main};
			}

			&.button-secondary {
				color: ${({ theme }) => theme.palette.primary.main};
			}

			&.button-gray {
				color: ${({ theme }) => theme.palette.grey[700]};
			}
		}

		&.button-small {
			font-size: 12px;
			padding: 10px 16px;
		}

		&-medium {
			font-size: 14px;
			padding: 11px 20px;
		}

		&-large {
			font-size: 16px;
			padding: 12px 24px;
		}
	}
`
