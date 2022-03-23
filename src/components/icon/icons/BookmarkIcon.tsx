import { SVGProps } from 'react'

type svgAdditionalProps = {
	size?: number
}

export const BookmarkIcon = (
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
				d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
				stroke={stroke || 'none'}
				fill={fill || 'currentColor'}
			/>
		</svg>
	)
}
