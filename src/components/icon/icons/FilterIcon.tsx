import { SVGProps } from 'react'

type svgAdditionalProps = {
	size?: number
}

export const FilterIcon = (
	props: SVGProps<SVGSVGElement> & svgAdditionalProps
) => {
	const { fill, stroke, size } = props

	return (
		<svg
			className="svg-icon"
			aria-hidden="true"
			viewBox="0 0 16 16"
			data-testid="FilterIcon"
			width="1em"
			height="1em"
			stroke={stroke || 'currentColor'}
			fill={fill || 'currentColor'}
			strokeWidth={0}
			{...props}
			style={{ fontSize: `${size}px` }}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"
				stroke="none"
			/>
		</svg>
	)
}
