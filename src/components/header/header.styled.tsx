import styled from '@emotion/styled'

import { breakpoint } from '@/styles/theme'

export const HeaderStyled = styled.header`
	background: ${({ theme }) => theme.palette.grey[500]};
	min-height: 80px;
	display: flex;

	.wrapper {
		color: ${({ theme }) => theme.palette.common.white};
		padding: ${({ theme }) => theme.spacing[5]};
		justify-content: space-between;
		align-items: center;
		display: flex;
		flex: 1;
	}
`

export const TitleSearchStyled = styled.div`
	justify-content: start;
	align-items: center;
	font-size: 16px;
	display: flex;

	${breakpoint('lg')} {
		font-size: 20px;
	}

	input {
		border-bottom: 1px solid ${({ theme }) => theme.palette.common.white};
		color: ${({ theme }) => theme.palette.common.white};
		background: transparent;
		font-size: inherit;
		outline: none;
		border: none;

		&:focus {
			border-bottom-color: transparent;
		}
	}
`

export const RcSliderStyled = styled.div`
	display: flex;
	width: 120px;

	.rc-slider {
		box-sizing: border-box;
		position: relative;
		border-radius: 6px;
		touch-action: none;
		padding: 8px 0;
		height: 14px;
		width: 100%;

		* {
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			box-sizing: border-box;
		}

		&-rail {
			background-color: #e9e9e9;
			border-radius: 6px;
			position: absolute;
			width: 100%;
			height: 4px;
		}

		&-track {
			background-color: #abe2fb;
			border-radius: 6px;
			position: absolute;
			height: 4px;
		}

		&-step {
			background: transparent;
			pointer-events: none;
			position: absolute;
			width: 100%;
			height: 4px;
		}

		&-handle {
			border: 2px solid #96dbfa;
			background-color: #fff;
			cursor: -webkit-grab;
			touch-action: pan-x;
			position: absolute;
			border-radius: 50%;
			margin-top: -5px;
			cursor: pointer;
			height: 14px;
			cursor: grab;
			opacity: 0.8;
			width: 14px;
		}
	}
`

export const ResultFilterStyled = styled.div`
	display: flex;

	> div {
		padding: 0 ${({ theme }) => theme.spacing[5]};

		&:first-of-type {
			padding-left: 0;
		}

		&:last-child {
			padding-right: 0;
		}

		span {
			text-transform: uppercase;
		}
	}
`

export const ButtonGroupeStyled = styled.div`
	display: flex;
`
