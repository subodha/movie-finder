import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const loaderSize = 6

const ellipsis1 = keyframes`
	0% { transform: scale(0); }
	100% { transform: scale(1);}
`
const ellipsis2 = keyframes`
	0% { transform: translate(0, 0); }
	100% { transform: translate(${loaderSize * 3}px, 0);}

`
const ellipsis3 = keyframes`
	0% { transform: scale(1); }
	100% { transform: scale(0); }
`

export const LoaderStyled = styled.div`
	display: inline-block;
	position: relative;
	width: ${loaderSize * 4}px;
	height: ${loaderSize * 3}px;

		div {
		position: absolute;
		top: ${loaderSize * 1}px;
		width: ${loaderSize}px;
		height: ${loaderSize}px;
		border-radius: 50%;
		background: ${({ theme }) => theme.palette.grey[200]};
		animation-timing-function: cubic-bezier(0, 1, 1, 0);

			&:nth-child(1) {
			left: ${loaderSize / 2}px;
			animation: ${ellipsis1} 0.6s infinite;
			}

			&:nth-child(2) {
			left: ${loaderSize / 2}px;
			animation: ${ellipsis2} 0.6s infinite;
			}

			&:nth-child(3) {
			left: ${loaderSize * 3 + loaderSize / 2}px;
			animation: ${ellipsis2} 0.6s infinite;
			}

			&:nth-child(4) {
			left: ${loaderSize * 6 + loaderSize / 2}px;
			animation: ${ellipsis3} 0.6s infinite;
			}
		}

	}
`
