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
			box-shadow: ${({ theme }) => theme.palette.primary.main} 0 0 0 1px inset;
		}

		&-secondary {
			color: ${({ theme }) => theme.palette.primary.contrastText};
			background-color: ${({ theme }) => theme.palette.primary.main};
			box-shadow: ${({ theme }) => theme.palette.primary.main} 0 0 0 1px inset;
		}

		&-gray {
			color: ${({ theme }) => theme.palette.common.white};
			background-color: ${({ theme }) => theme.palette.grey[700]};
			box-shadow: ${({ theme }) => theme.palette.grey[700]} 0 0 0 1px inset;
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
			padding: ${({ theme }) => theme.spacing[2]}
				${({ theme }) => theme.spacing[3]};
		}

		&-medium {
			font-size: ${({ theme }) => theme.typography.htmlFontSizeSm};
			padding: ${({ theme }) => theme.spacing[3]}
				${({ theme }) => theme.spacing[4]};
		}

		&-large {
			font-size: ${({ theme }) => theme.typography.htmlFontSize};
			padding: ${({ theme }) => theme.spacing[4]}
				${({ theme }) => theme.spacing[5]};
		}
	}
`
