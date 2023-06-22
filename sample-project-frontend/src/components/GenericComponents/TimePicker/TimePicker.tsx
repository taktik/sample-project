import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import Popover from '@mui/material/Popover'
import Stack from '@mui/material/Stack'
import React, { ChangeEvent, useMemo, useState } from 'react'
import styled from 'styled-components'
import { formatNumber } from '../../../helpers/formatDuration'
import { DatePickerProps } from '../DatePicker'
import { Divider } from '../Divider'
import { IconButton } from '../IconButton'
import { TextInput } from '../Textfield'
import { TimeColumn } from './TimeColumn'

interface TimePickerProps extends DatePickerProps {
	invalidMessage: string
	label: string
	disabled: boolean
	onChange: (event: string | ChangeEvent<Element> | undefined) => void
}

const PopoverInner = styled(Stack)`
	height: calc(6 * 28px);
	width: fit-content;
	overflow: hidden;
	flex-wrap: nowrap;
	padding: 4px;
	box-sizing: content-box;
	gap: 4px;
`

const StyledIconButton = styled(IconButton)`
	background: transparent;
	&:hover {
		background: transparent;
	}
`

export const TimePicker = ({
	invalidMessage,
	label,
	disabled,
	onChange,
	value,
}: TimePickerProps) => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
	const [timeValue, setTimeValue] = React.useState(value)

	const [hours, minutes] = useMemo(() => {
		if (value) {
			return (value as string).split(':')
		}
		return ['00', '00']
	}, [value])

	const handleOpenTimePopover = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleCloseTimePopover = () => {
		setAnchorEl(null)
	}

	const open = Boolean(anchorEl)

	const handleHourClick = (selected: number) => {
		onChange(`${formatNumber(selected)}:${minutes}`)
		setTimeValue(`${formatNumber(selected)}:${minutes}`)
	}

	const handleMinuteClick = (selected: number) => {
		onChange(`${hours}:${formatNumber(selected)}`)
		setTimeValue(`${hours}:${formatNumber(selected)}`)
	}

	return (
		<>
			<TextInput
				onChange={(newValue) => {
					setTimeValue(newValue.target.value)
					onChange(newValue.target.value)
				}}
				errorMessage={invalidMessage}
				label={label}
				endAdornment={
					<StyledIconButton onClick={handleOpenTimePopover}>
						<AccessTimeRoundedIcon />
					</StyledIconButton>
				}
				disabled={disabled}
				value={timeValue}
				placeholder={'__:__'}
			/>
			<Popover
				id="timePopover"
				open={open}
				anchorEl={anchorEl}
				onClose={handleCloseTimePopover}
			>
				<PopoverInner direction="row">
					<TimeColumn range={24} selected={hours} onSelect={handleHourClick}></TimeColumn>
					<Divider flexItem orientation="vertical" />
					<TimeColumn
						range={60}
						selected={minutes}
						onSelect={handleMinuteClick}
					></TimeColumn>
				</PopoverInner>
			</Popover>
		</>
	)
}
