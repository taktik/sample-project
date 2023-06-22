import { FormControlLabel, Switch as SwitchMui, SwitchProps } from '@mui/material'
import styled from 'styled-components'
import { FontFamily, FontSizeNormal } from './GenericStyles/GenericStyles'

interface LabeledSwitchProps {
	label: string
	checked?: boolean
	onClick?: () => void
}

const StyledSwitch = styled(SwitchMui)`
	.MuiSwitch-track {
		background-color: ${({ theme }) => theme.switch.track};
		opacity: 1;
	}
	.Mui-checked + .MuiSwitch-track {
		background-color: ${({ theme }) => theme.switch.trackChecked};
	}
	.MuiSwitch-thumb {
		color: ${({ theme }) => theme.switch.thumb};
	}
	.Mui-checked > .MuiSwitch-thumb {
		color: ${({ theme }) => theme.switch.thumbChecked}!important;
	}
`

const CustomFormControlLabel = styled(FormControlLabel)`
	margin-left: 0;
	margin-right: 0;
	span:not(:first-of-type) {
		${FontFamily};
		${FontSizeNormal};
		font-weight: 500;
		margin-bottom: 2px;
	}
	color: ${({ theme }) => theme.textMain};
`

export const LabeledSwitch = ({ label, checked, onClick, ...rest }: LabeledSwitchProps) => {
	return (
		<CustomFormControlLabel
			control={<StyledSwitch checked={checked} onClick={onClick} {...rest} />}
			label={label}
			labelPlacement="end"
			{...rest}
		/>
	)
}

export const Switch = (props: SwitchProps) => {
	return <StyledSwitch {...props} />
}
