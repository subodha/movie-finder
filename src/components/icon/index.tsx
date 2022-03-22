import { SVGProps } from 'react'

import { SearchIcon } from './icons/SearchIcon'

const ComponentMap = {
	SearchIcon,
}

export type IconPropsTypes = {
	size?: number
	name: keyof typeof ComponentMap
}

export { SearchIcon } from './icons/SearchIcon'

const Icon = (props: SVGProps<SVGSVGElement> & IconPropsTypes) => {
	const { name } = props

	const IconComponent = ComponentMap[name]

	return <IconComponent {...props} />
}

export default Icon
