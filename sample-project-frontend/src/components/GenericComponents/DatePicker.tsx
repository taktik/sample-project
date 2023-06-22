import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded'
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded'
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded'
import { DateTimePicker as DateTimePickerMui, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker as DatePickerMui } from '@mui/x-date-pickers/DatePicker'
import { fr } from 'date-fns/locale'
import isEmpty from 'lodash/isEmpty'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { TextField, TextInputProps } from './Textfield'
import { TimePicker } from './TimePicker/TimePicker'

export interface DatePickerProps extends TextInputProps {
	mode?: 'date' | 'date-range' | 'time' | 'date-time'
	onChange?: (event: string | ChangeEvent<Element> | undefined) => void
	invalidMessage?: string
}

const Container = styled.div`
	position: relative;
	overflow: hidden;
	flex-grow: 1;
`

const DateRangeIcon = styled(DateRangeRoundedIcon)`
	color: ${({ theme }) => theme.textLight};
`

const ArrowLeft = styled(ArrowLeftRoundedIcon)`
	color: ${({ theme }) => theme.textMain};
`

const ArrowRight = styled(ArrowRightRoundedIcon)`
	color: ${({ theme }) => theme.textMain};
`

const ArrowDropDown = styled(ArrowDropDownRoundedIcon)`
	color: ${({ theme }) => theme.textMain};
`

export const DatePicker = ({
	label,
	mode,
	disabled,
	value,
	onChange,
	invalidMessage,
}: DatePickerProps) => {
	const inputRef = useRef(null)
	const pickerRef = useRef(null)

	const [autofocus, setAutofocus] = useState(false)
	const [anchorEl, setAnchorEl] = useState(null)

	useEffect(() => {
		setAnchorEl(pickerRef?.current)
	}, [pickerRef])

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
			<Container ref={pickerRef}>
				{mode === 'date' && (
					<DatePickerMui
						disabled={disabled}
						onChange={(newValue) => {
							onChange(
								newValue && !isEmpty(newValue) ? (newValue as string) : undefined
							)
						}}
						value={value ?? null}
						slotProps={{
							textField: { inputRef: inputRef },
							popper: { anchorEl: anchorEl },
						}}
						slots={{
							openPickerIcon: DateRangeIcon,
							leftArrowIcon: ArrowLeft,
							rightArrowIcon: ArrowRight,
							switchViewIcon: ArrowDropDown,
							textField: (props) => (
								<TextField
									{...props}
									inputRef={inputRef}
									variant={'standard'}
									label={label}
									disabled={disabled}
									error={!!invalidMessage}
									errorMessage={invalidMessage}
									InputLabelProps={{ shrink: true }}
									autoFocus={autofocus}
									onFocus={() => setAutofocus(true)}
									onBlur={() => setAutofocus(false)}
								/>
							),
						}}
					/>
				)}
				{mode === 'date-time' && (
					<DateTimePickerMui
						onChange={(newValue) => {
							onChange(
								newValue && !isEmpty(newValue) ? (newValue as string) : undefined
							)
						}}
						value={value ?? null}
						ampm={false}
						views={['year', 'day', 'hours', 'minutes']}
						slotProps={{
							textField: { inputRef: inputRef },
							popper: { anchorEl: anchorEl },
						}}
						slots={{
							openPickerIcon: DateRangeIcon,
							leftArrowIcon: ArrowLeft,
							rightArrowIcon: ArrowRight,
							switchViewIcon: ArrowDropDown,
							textField: (props) => (
								<TextField
									{...props}
									inputRef={inputRef}
									variant={'standard'}
									label={label}
									disabled={disabled}
									errorMessage={invalidMessage}
									InputLabelProps={{ shrink: true }}
									autoFocus={autofocus}
									onFocus={() => setAutofocus(true)}
									onBlur={() => setAutofocus(false)}
								/>
							),
						}}
					/>
				)}
				{mode === 'time' && (
					<TimePicker
						invalidMessage={invalidMessage ?? ''}
						label={label ?? ''}
						disabled={disabled ?? false}
						onChange={onChange}
						value={value}
					/>
				)}
			</Container>
		</LocalizationProvider>
	)
}
