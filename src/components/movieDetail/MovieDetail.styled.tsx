import styled from '@emotion/styled'

import { breakpoint } from '@/styles/theme'

export const MovieDetailStyled = styled.div`
	transition: transform ${({ theme }) => theme.transitions.duration.short}
		${({ theme }) => theme.transitions.easing.easeInOut};
	background: ${({ theme }) => theme.palette.common.white};
	color: ${({ theme }) => theme.palette.text.primary};
	transform: translateX(100%);
	justify-content: center;
	position: relative;
	overflow-y: auto;
	position: fixed;
	display: flex;
	top: 0;

	${breakpoint('md')} {
		transform: translateX(0);
		position: relative;
	}

	.movie {
		padding: ${({ theme }) => theme.spacing[5]};
		flex-direction: column;
		display: flex;

		header {
			border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
			padding: ${({ theme }) => theme.spacing[5]} 0;
			display: flex;
		}

		&-poster {
			margin-right: ${({ theme }) => theme.spacing[5]};
			// TODO: to check clamp is not working properly
			// width: clamp(5rem, 25%, 6rem);

			.image-ratio {
				border-radius: ${({ theme }) => theme.borderRadius.sm};
				padding-bottom: 160%;
				position: relative;
				min-width: 10rem;
				overflow: hidden;
				display: block;
			}
		}

		&-info {
			justify-content: space-between;
			flex-direction: column;
			display: flex;
			flex: 1;

			h2 {
				font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
				color: ${({ theme }) => theme.palette.text.primaryDark};
				margin: 0 0 ${({ theme }) => theme.spacing[2]};
				font-size: 2rem;
			}

			ul {
				font-weight: ${({ theme }) => theme.typography.fontWeightLight};
				align-items: center;
				list-style: none;
				font-size: 1rem;
				flex-wrap: wrap;
				display: flex;
				padding: 0;

				li {
					padding: ${({ theme }) => theme.spacing[1]}
						${({ theme }) => theme.spacing[3]};
					align-items: center;
					white-space: nowrap;
					position: relative;
					display: flex;

					&:not(:first-of-type) {
						&:before {
							font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
							align-items: center;
							position: absolute;
							line-height: 1px;
							font-size: 14px;
							display: flex;
							content: '.';
							height: 1px;
							left: -2px;
							top: 10px;
						}
					}

					&.rated,
					&.year {
						&:before {
							display: none;
						}
					}

					&.rated {
						border: 1px solid ${({ theme }) => theme.palette.text.primary};
						border-radius: ${({ theme }) => theme.borderRadius.sm};
						font-size: ${({ theme }) => theme.spacing[3]};
						padding: ${({ theme }) => theme.spacing[1]}
							${({ theme }) => theme.spacing[2]};
					}
				}
			}

			p {
				font-weight: ${({ theme }) => theme.typography.fontWeightLight};
				font-size: ${({ theme }) => theme.spacing[4]};
				margin-bottom: 0;
			}

			&-watchlist-container {
				align-self: flex-end;
			}
		}

		&-plot {
			border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
			font-weight: ${({ theme }) => theme.typography.fontWeightLight};
			font-size: ${({ theme }) => theme.spacing[4]};
			padding: ${({ theme }) => theme.spacing[5]} 0;
			display: flex;

			p {
				flex-direction: column;
				display: flex;
				width: 100%;
				margin: 0;
			}
		}

		&-ratings {
			font-weight: ${({ theme }) => theme.typography.fontWeightLight};
			padding: ${({ theme }) => theme.spacing[5]} 0;
			justify-content: space-evenly;
			display: flex;

			p,
			span {
				justify-content: center;
				text-align: center;
				display: flex;
				width: 100%;
			}

			span {
				font-size: ${({ theme }) => theme.spacing[3]};
			}

			&-item {
				justify-content: center;
				flex-wrap: wrap;
				display: flex;
			}

			.skelton {
				min-width: 22%;
			}

			.divider {
				border-right: 1px solid ${({ theme }) => theme.palette.divider};

				&:last-child {
					display: none;
				}
			}
		}
	}
`
