import styled from '@emotion/styled'

import { breakpoint } from '@/styles/theme'

export const HeaderStyled = styled.header`
	background: ${(props) => props.theme.palette.grey[500]};
	min-height: 80px;
	display: flex;

	.wrapper {
		padding: ${(props) => props.theme.spacing[5]};
		justify-content: space-between;
		align-items: center;
		display: flex;
		flex: 1;
		color: ${(props) => props.theme.palette.common.white};
	}
`

export const TitleSearchStyled = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	font-size: 16px;

	${breakpoint('lg')} {
		font-size: 20px;
	}

	input {
		border-bottom: 1px solid ${(props) => props.theme.palette.common.white};
		color: ${(props) => props.theme.palette.common.white};
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
		position: relative;
		width: 100%;
		height: 14px;
		padding: 8px 0;
		border-radius: 6px;
		touch-action: none;
		box-sizing: border-box;

		* {
			box-sizing: border-box;
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		}

		&-rail {
			position: absolute;
			width: 100%;
			height: 4px;
			background-color: #e9e9e9;
			border-radius: 6px;
		}

		&-track {
			position: absolute;
			height: 4px;
			background-color: #abe2fb;
			border-radius: 6px;
		}

		&-step {
			position: absolute;
			width: 100%;
			height: 4px;
			background: transparent;
			pointer-events: none;
		}

		&-handle {
			position: absolute;
			width: 14px;
			height: 14px;
			margin-top: -5px;
			background-color: #fff;
			border: 2px solid #96dbfa;
			border-radius: 50%;
			cursor: pointer;
			cursor: -webkit-grab;
			cursor: grab;
			opacity: 0.8;
			touch-action: pan-x;
		}
	}
`

export const ResultFilterStyled = styled.div`
	display: flex;

	> div {
		padding: 0 ${(props) => props.theme.spacing[5]};

		&:first-child {
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
