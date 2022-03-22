import { SVGProps } from 'react'

type svgAdditionalProps = {
	size?: number
}

export const SearchIcon = (
	props: SVGProps<SVGSVGElement> & svgAdditionalProps
) => {
	const { fill, stroke, size } = props

	return (
		<svg
			className="svg-icon"
			aria-hidden="true"
			viewBox="0 0 24 24"
			data-testid="SearchIcon"
			width="1em"
			height="1em"
			{...props}
			style={{ fontSize: `${size}px` }}
		>
			<path
				fill={fill || 'black'}
				d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
			/>
			<svg
				stroke={stroke || 'currentColor'}
				fill={fill || 'currentColor'}
				strokeWidth={0}
				viewBox="0 0 16 16"
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
					stroke="none"
				/>
			</svg>
		</svg>
	)
}
