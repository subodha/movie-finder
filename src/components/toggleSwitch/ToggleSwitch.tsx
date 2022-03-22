import { useState } from 'react'

import { ToggleSwitchStyled } from './ToggleSwitch.styled'

type ToggleSwitchProps = {
	label?: string
	size: number
	onToggle: () => void
}

export const ToggleSwitch = ({
	label,
	onToggle,
	size,
}: ToggleSwitchProps): JSX.Element => {
	const [isToggled, setIsToggled] = useState<boolean>(false)
	const onChangeHandler = (): void => {
		onToggle()
		setIsToggled(!isToggled)
	}

	return (
		<ToggleSwitchStyled size={size || 16} data-label-text={label}>
			<input type="checkbox" checked={isToggled} onChange={onChangeHandler} />
			<span className="switch" />
		</ToggleSwitchStyled>
	)
}
