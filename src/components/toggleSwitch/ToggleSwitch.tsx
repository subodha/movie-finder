import { useEffect, useState } from 'react'

import { ToggleSwitchStyled } from './ToggleSwitch.styled'

type ToggleSwitchProps = {
	label?: string
	size?: number
	onToggle: () => void
	initialOn?: boolean
}

export const ToggleSwitch = ({
	label,
	onToggle,
	size = 16,
	initialOn = false,
}: ToggleSwitchProps): JSX.Element => {
	const [isToggled, setIsToggled] = useState<boolean>(initialOn)
	const onChangeHandler = (): void => {
		onToggle()
		setIsToggled(!isToggled)
	}

	useEffect(() => {
		setIsToggled(initialOn)
	}, [initialOn])

	return (
		<ToggleSwitchStyled size={size || 16} data-label-text={label}>
			{label && <span className="label">{label}</span>}
			<input type="checkbox" checked={isToggled} onChange={onChangeHandler} />
			<span className="switch" />
		</ToggleSwitchStyled>
	)
}
