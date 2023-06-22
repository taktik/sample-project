import { Checkbox as CheckBoxMui, CheckboxProps, FormControlLabel } from '@mui/material'
import styled from 'styled-components'
import { CheckboxBlank } from './CheckboxBlank'
import { FontFamily, FontSizeNormal } from './GenericStyles/GenericStyles'


interface LabeledCheckboxProps extends CheckboxProps {
	label: string
}

const StyledCheckbox = styled(CheckBoxMui)`
	height: 28px;
	width: 28px;
	svg {
		font-size: 20px;
		color: ${({ theme }) => theme.backgroundDark};
	}
	&.Mui-checked svg {
		color: ${({ theme }) => theme.primaryMain};
	}
`

const CustomFormControlLabel = styled(FormControlLabel)`
	margin-left: 0;
	margin-right: 0;
	span:not(:first-of-type) {
		${FontFamily};
		${FontSizeNormal};
		font-weight: 500;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	color: ${({ theme }) => theme.textMain};
`

export const LabeledCheckbox = ({ label, ...rest }: LabeledCheckboxProps) => {
	return (
		<CustomFormControlLabel
			label={label}
			labelPlacement="end"
			control={<StyledCheckbox {...rest} icon={<CheckboxBlank />} />}
		/>
	)
}

export const Checkbox = (props: CheckboxProps) => {
	return <StyledCheckbox checked={props.checked} icon={<CheckboxBlank />} {...props} />
}
