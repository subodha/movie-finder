import styled from '@emotion/styled'

import { breakpoint } from '@/styles/theme'

export const HeaderStyled = styled.header`
	background: ${({ theme }) => theme.palette.grey[500]};
	position: relative;
	min-height: 80px;
	display: flex;
	z-index: 4;

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
	font-size: 20px;
	display: flex;

	input {
		transition: border ${({ theme }) => theme.transitions.duration.short}
			${({ theme }) => theme.transitions.easing.easeInOut};
		border: none;
		border-bottom: 1px solid ${({ theme }) => theme.palette.grey[300]};
		color: ${({ theme }) => theme.palette.common.white};
		margin: 0 ${({ theme }) => theme.spacing[3]};
		background: transparent;
		font-size: inherit;
		outline: none;

		&:focus {
			border-bottom-color: transparent;
		}
	}
`

export const RcSliderStyled = styled.div`
	font-size: ${({ theme }) => theme.typography.htmlFontSizeSm};
	align-items: baseline;
	display: flex;
	width: 120px;

	${breakpoint('lg')} {
		width: 180px;
	}

	.rc-slider {
		margin: 0 ${({ theme }) => theme.spacing[3]};
		box-sizing: border-box;
		position: relative;
		border-radius: 6px;
		touch-action: none;
		padding: 8px 0;
		height: 14px;
		width: 100%;

		${breakpoint('md')} {
		}

		* {
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			box-sizing: border-box;
		}

		> span {
		}

		&-rail {
			background-color: ${({ theme }) => theme.palette.common.white};
			border-radius: 6px;
			position: absolute;
			width: 100%;
			height: 4px;
		}

		&-track {
			background-color: ${({ theme }) => theme.palette.grey[200]};
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
			border: 2px solid ${({ theme }) => theme.palette.grey[200]};
			background-color: ${({ theme }) => theme.palette.grey[200]};
			cursor: -webkit-grab;
			touch-action: pan-x;
			position: absolute;
			border-radius: 50%;
			margin-top: -5px;
			cursor: pointer;
			height: 14px;
			cursor: grab;
			width: 14px;
		}
	}
`

export const ResultFilterStyled = styled.div`
	transition: transform ${({ theme }) => theme.transitions.duration.short}
		${({ theme }) => theme.transitions.easing.easeInOut};
	font-size: ${({ theme }) => theme.typography.htmlFontSizeSm}px;
	border-radius: ${({ theme }) => theme.borderRadius.md};
	background: ${({ theme }) => theme.palette.grey[500]};
	box-shadow: ${({ theme }) => theme.shadow[1]};
	transform: translateX(calc(100% + 1.5rem));
	flex-direction: column;
	position: absolute;
	display: flex;
	width: 80vw;
	top: 140px;
	right: 0;

	${breakpoint('md')} {
		transform: translateX(0);
		flex-direction: row;
		position: relative;
		box-shadow: none;
		width: auto;
		right: 0;
		top: 0;
	}

	&.active-on-mobile {
		transform: translateX(calc(0% - 10vw));

		${breakpoint('md')} {
			transform: translateX(0%);
		}
	}

	> div {
		padding: ${({ theme }) => theme.spacing[5]}
			${({ theme }) => theme.spacing[5]};

		${breakpoint('md')} {
			&:first-of-type {
				padding-left: 0;
			}
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

	label {
		&:not(:first-of-type) {
			padding-left: ${({ theme }) => theme.spacing[3]};
		}

		input {
			margin-left: 0;
		}
	}
`

export const FilterToggleBtnStyled = styled.button`
	box-shadow: 0 0 ${({ theme }) => theme.spacing[2]}
		${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.palette.grey[500]};
	transition: color ${({ theme }) => theme.transitions.duration.short}
		${({ theme }) => theme.transitions.easing.easeInOut};
	background-color: ${({ theme }) => theme.palette.grey[500]};
	color: ${({ theme }) => theme.palette.common.white};
	padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
	position: absolute;
	border: 0;
	right: 0;

	&.active {
		color: ${({ theme }) => theme.palette.warning.light};
	}

	${breakpoint('md')} {
		display: none;
	}
`
