import { SVGProps } from 'react'

type svgAdditionalProps = {
	size?: number
}

export const BackIcon = (
	props: SVGProps<SVGSVGElement> & svgAdditionalProps
) => {
	const { fill, stroke, size } = props

	return (
		<svg
			className="svg-icon"
			aria-hidden="true"
			viewBox="0 0 24 24"
			data-testid="BackIcon"
			width="1em"
			height="1em"
			stroke={stroke || 'currentColor'}
			fill={fill || 'currentColor'}
			strokeWidth={0}
			{...props}
			style={{ fontSize: `${size}px` }}
		>
			<path fill="none" d="M0 0h24v24H0z" stroke="none" />
			<path
				d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"
				stroke="none"
			/>
		</svg>
	)
}
