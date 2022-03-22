import { SVGProps } from 'react'

import { BackIcon } from './icons/BackIcon'
import { BookmarkFillIcon } from './icons/BookmarkFillIcon'
import { BookmarkIcon } from './icons/BookmarkIcon'
import { FilterIcon } from './icons/FilterIcon'
import { SearchIcon } from './icons/SearchIcon'

export const IconComponentsMap = {
	BackIcon,
	BookmarkIcon,
	BookmarkFillIcon,
	FilterIcon,
	SearchIcon,
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
