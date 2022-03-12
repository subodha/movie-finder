import styled from '@emotion/styled'

import { breakpoint } from '@/styles/theme'

export const MovieDetailStyled = styled.div`
	color: ${(props) => props.theme.palette.text.primary};
	justify-content: center;
	position: relative;
	overflow-y: auto;
	display: flex;
	position: fixed;
	background: ${(props) => props.theme.palette.common.white};
	top: 0;
	transition: transform ${(props) => props.theme.transitions.duration.short}
		${(props) => props.theme.transitions.easing.easeInOut};
	transform: translateX(100%);

	${breakpoint('md')} {
		position: relative;
		transform: translateX(0);
	}

	.movie {
		padding: ${(props) => props.theme.spacing[5]};
		display: flex;
		flex-direction: column;

		header {
			border-bottom: 1px solid ${(props) => props.theme.palette.divider};
			padding: ${(props) => props.theme.spacing[5]} 0;
			display: flex;
		}

		&-poster {
			margin-right: ${(props) => props.theme.spacing[5]};
			// TODO: to check clamp is not working properly
			// width: clamp(5rem, 25%, 6rem);

			.image-ratio {
				min-width: 10rem;
				border-radius: ${(props) => props.theme.borderRadius.sm};
				padding-bottom: 160%;
				position: relative;
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
				font-weight: ${(props) => props.theme.typography.fontWeightMedium};
				color: ${(props) => props.theme.palette.text.primaryDark};
				margin: 0 0 ${(props) => props.theme.spacing[2]};
				font-size: 2rem;
			}

			ul {
				font-weight: ${(props) => props.theme.typography.fontWeightLight};
				align-items: center;
				font-size: 1rem;
				list-style: none;
				flex-wrap: wrap;
				display: flex;
				padding: 0;

				li {
					padding: ${(props) => props.theme.spacing[1]}
						${(props) => props.theme.spacing[3]};
					align-items: center;
					position: relative;
					display: flex;
					white-space: nowrap;

					&:before {
						align-items: center;
						position: absolute;
						line-height: 1px;
						display: flex;
						content: '.';
						height: 1px;
						left: -2px;
						top: 10px;
						font-size: 14px;
						font-weight: ${(props) => props.theme.typography.fontWeightRegular};
					}

					&.rated,
					&.year {
						&:before {
							display: none;
						}
					}

					&.rated {
						border: 1px solid ${(props) => props.theme.palette.text.primary};
						padding: ${(props) => props.theme.spacing[1]}
							${(props) => props.theme.spacing[2]};
						border-radius: ${(props) => props.theme.borderRadius.sm};
						font-size: ${(props) => props.theme.spacing[3]};
					}
				}
			}

			p {
				font-weight: ${(props) => props.theme.typography.fontWeightLight};
				font-size: ${(props) => props.theme.spacing[4]};
				margin-bottom: 0;
			}

			&-watchlist-container {
				align-self: flex-end;
			}
		}

		&-plot {
			border-bottom: 1px solid ${(props) => props.theme.palette.divider};
			font-weight: ${(props) => props.theme.typography.fontWeightLight};
			font-size: ${(props) => props.theme.spacing[4]};
			padding: ${(props) => props.theme.spacing[5]} 0;
			display: flex;
		}

		&-ratings {
			font-weight: ${(props) => props.theme.typography.fontWeightLight};
			padding: ${(props) => props.theme.spacing[5]} 0;
			justify-content: space-evenly;
			display: flex;

			span {
				font-size: ${(props) => props.theme.spacing[3]};
				text-align: center;
				width: 100%;
			}

			&-item {
				justify-content: center;
				flex-wrap: wrap;
				display: flex;
			}

			.divider {
				border-right: 1px solid ${(props) => props.theme.palette.divider};

				&:last-child {
					display: none;
				}
			}
		}
	}
`
