import styled from '@emotion/styled'

type ToggleSwitchStyledPropsType = {
	size: number
}

export const ToggleSwitchStyled = styled.label<ToggleSwitchStyledPropsType>`
	position: relative;
	display: inline-block;
	width: ${(props) => props.size * 2}px;
	height: ${(props) => props.size}px;

	input[type='checkbox'] {
		display: none;

		&:checked + .switch {
			background-color: ${({ theme }) => theme.palette.success.light};

			&::before {
				transform: translateX(${(props) => props.size}px);
			}
		}
	}

	.switch {
		position: absolute;
		cursor: pointer;
		background-color: ${({ theme }) => theme.palette.grey[100]};
		border-radius: 100px;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transition: background-color 0.2s ease;

		&::before {
			position: absolute;
			content: '';
			left: 2px;
			top: 2px;
			width: ${(props) => props.size - 4}px;
			height: ${(props) => props.size - 4}px;
			background-color: white;
			border-radius: 50%;
			transition: transform 0.3s ease;
		}
	}
`