import { LoaderStyled } from './Loader.styled'

type ButtonProps = {
	color?: string
}

export const Loader = ({ color }: ButtonProps): JSX.Element => {
	return (
		<LoaderStyled>
			<div />
			<div />
			<div />
			<div />
		</LoaderStyled>
	)
}
