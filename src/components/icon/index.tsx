import { SVGProps } from 'react'

import { BookmarkFillIcon } from './icons/BookmarkFillIcon'
import { BookmarkIcon } from './icons/BookmarkIcon'
import { SearchIcon } from './icons/SearchIcon'

export const IconComponentsMap = {
	SearchIcon,
	BookmarkIcon,
	BookmarkFillIcon,
}

export type IconPropsTypes = {
	size?: number
	name: keyof typeof IconComponentsMap
}

const Icon = (props: SVGProps<SVGSVGElement> & IconPropsTypes): JSX.Element => {
	const { name } = props

	const IconComponent = IconComponentsMap[name]

	return <IconComponent {...props} />
}

export default Icon
