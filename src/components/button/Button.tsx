import { ButtonStyled } from './Button.styled'

type ButtonProps = {
	mode?: 'primary' | 'secondary' | 'gray'
	outlined?: boolean
	backgroundColor?: string
	size?: 'small' | 'medium' | 'large'
	label: string
	onClick?: () => void
	children?: React.ReactNode
}

export const Button = ({
	mode = 'primary',
	size = 'medium',
	backgroundColor,
	label,
	children,
	outlined,
	...props
}: ButtonProps): JSX.Element => {
	const buttonOutlined = outlined ? 'button-outlined' : ''

	return (
		<ButtonStyled
			type="button"
			className={[
				'button',
				`button-${size}`,
				`button-${mode}`,
				buttonOutlined,
			].join(' ')}
			style={{ backgroundColor }}
			{...props}
		>
			{children} {label}
		</ButtonStyled>
	)
}
