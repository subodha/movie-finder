import { SVGProps } from 'react'

type svgAdditionalProps = {
	size?: number
}

export const BookmarkFillIcon = (
	props: SVGProps<SVGSVGElement> & svgAdditionalProps
) => {
	const { fill, stroke, size } = props

	return (
		<svg
			className="svg-icon"
			aria-hidden="true"
			viewBox="0 0 16 16"
			data-testid="BookmarkIcon"
			width="1em"
			height="1em"
			{...props}
			style={{ fontSize: `${size}px` }}
		>
			<path
				d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"
				stroke="none"
				fill={fill || 'currentColor'}
			/>
		</svg>
	)
}
