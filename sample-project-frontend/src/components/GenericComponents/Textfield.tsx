import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded'
import {
	Input,
	InputAdornment as InputAdornmentMui,
	Stack, StandardTextFieldProps, TextareaAutosize as TextareaAutosizeMui, TextField as TextFieldMui
} from '@mui/material'
import { InputProps } from '@mui/material/Input'
import Tooltip from '@mui/material/Tooltip'
import styled, { css, useTheme } from 'styled-components'
import { FontFamily, FontSizeNormal, FontSizeSmall } from './GenericStyles/GenericStyles'

export interface TextInputProps extends InputProps {
	label?: string
	textAlignRight?: boolean
	disabled?: boolean
	errorMessage?: string
}

export interface TextFieldProps extends StandardTextFieldProps {
	label?: string
	disabled?: boolean
	errorMessage?: string
}

export const StyledInput = styled(Input) <{
	$hasEndAdornment?: boolean
	$hasStartAdornment?: boolean
	$textAlignRight?: boolean
}>`
	background: ${({ theme }) => theme.input.background};
	height: 32px;
	border-radius: 4px;
	padding-right: ${({ $hasEndAdornment }) => ($hasEndAdornment ? '0' : '8px')};
	padding-left: ${({ $hasStartAdornment }) => ($hasStartAdornment ? '0' : '8px')};
	padding: 0 EXTERNAL_FRAGMENT_1 0 EXTERNAL_FRAGMENT_2;
	${FontFamily};
	${FontSizeNormal};
	width: 100%;
	box-sizing: border-box;
	color: ${({ theme }) => theme.input.color};
	transition: box-shadow 0.24s ease-in;

	&:after,
	&:before {
		display: none;
	}

	input {
		padding: 0;
		font-weight: 500;
		color: ${({ theme }) => theme.input.color};
		text-align: ${({ $textAlignRight }) => ($textAlignRight ? 'right' : 'left')};
	}

	svg {
		height: 20px;
		width: 20px;
		color: ${({ theme }) => theme.input.colorIcon};
	}

	&:hover {
		background: ${({ theme }) => theme.input.backgroundHover};
		color: ${({ theme }) => theme.input.colorHover};
	}

	&:focus,
	&:focus-within {
		box-shadow: inset 0 0 0 2px ${({ theme }) => theme.input.borderColor};
	}
`

export const InputAdornment = styled(InputAdornmentMui)`
	margin-left: 0;
	*,
	span {
		display: block;
		${FontSizeNormal};
		color: ${({ theme }) => theme.textMain};
		font-weight: 500;
		padding: 0 4px;
	}
`

export const StyledLabel = styled.label`
	${FontSizeSmall};
	font-weight: 400;
	color: ${({ theme }) => theme.textMain};
	transition: all ease-in 0.04s;
	padding: 0 8px;
`

export const InputContainer = styled.div<{ $hasError?: boolean; disabled?: boolean }>`
	position: relative;
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	justify-content: flex-start;
	flex-grow: 1;
	flex-shrink: 1;
	overflow: hidden;
	opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
	box-sizing: border-box;
	input {
		width: auto;
		flex-grow: 1;
	}
	${({ theme, $hasError }) =>
		$hasError
			? css`
				label,
				&:focus-within label {
					color: ${theme.input.errorBorderColor}; };
				}
				input {
				  padding: 0 8px;
				}
			`
			: css`
			&:focus-within label {
				color: ${theme.input.borderColor}; };
			}
		`}
	${StyledInput} {
		${({ $hasError, theme }) =>
		$hasError && `box-shadow: inset 0 0 0 1px ${theme.input.errorBorderColor};`}
		&:focus-within {
			${({ $hasError, theme }) =>
		$hasError && `box-shadow: inset 0 0 0 2px ${theme.input.errorBorderColor};`}
		}
		&:focus-visible {
			outline: 1px inset ${({ theme }) => theme.input.secondBorderColor};
			background: ${({ theme }) => theme.input.backgroundHover};
		}
		svg path {
			fill: ${({ theme }) => theme.input.colorIcon};
		}
	}
`

const StyledAdornment = styled.div`
	position: relative;
	cursor: pointer;
	height: 32px;
	display: flex;
	align-items: center;
	button {
		margin: 0;
	}
`

const StyledErrorAdornment = styled.div`
	position: relative;
	cursor: pointer;
	min-width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
	& > span {
		height: 32px;
		width: 32px;
	}
	& > div {
		margin-left: 0;
	}
	button {
		margin-right: 0;
	}
	> * {
		opacity: 1;
	}
	&::after {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		content: '!';
		${FontFamily};
		font-weight: bold;
		height: 12px;
		width: 12px;
		font-size: 8px;
		min-width: 12px;
		border-radius: 50%;
		color: #ffffff;
		background: ${({ theme }) => theme.input.errorBorderColor};
		pointer-events: none;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;
		opacity: 1;
		box-shadow: 0 0 0 4px ${({ theme }) => theme.input.secondBorderErrorColor};
	}
`

const ErrorMessage = styled(Stack)`
	gap: 4px;
	align-items: center;
	padding: 0;
	svg {
		height: 20px;
		width: 20px;
		margin: 0;
	}
`

export const StyledTextField = styled(TextFieldMui) <{
	$hideClearIndicator?: boolean
	$hasError?: boolean
}>`
	${FontFamily};
	${FontSizeNormal};
	min-height: 32px;
	width: 100%;
	transition: box-shadow 0.24s ease-in;
	overflow: visible;
	.MuiFormLabel-root {
		${FontSizeSmall};
		font-weight: 400;
		color: ${({ theme }) => theme.textMain};
		transition: all ease-in 0.04s;
		padding: 0 8px;
		transform: translate(0, -1.5px) scale(1);
	}
	&:focus-within .MuiFormLabel-root {
		color: ${({ theme }) => theme.input.borderColor};
	}
	.MuiInputBase-root {
		background: ${({ theme }) => theme.input.background};
		color: ${({ theme }) => theme.input.color};
		padding: ${({ $hasError }) => ($hasError ? '0' : '4px 0 4px 8px')};
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: flex-start;
		gap: 2px;
		${FontSizeNormal};
		border-radius: 4px;
		&:hover {
			background: ${({ theme }) => theme.input.backgroundHover};
			color: ${({ theme }) => theme.input.colorHover};
		}
		&:focus,
		&:focus-within {
			box-shadow: inset 0 0 0 2px ${({ theme }) => theme.input.borderColor};
		}
		&.Mui-error {
			box-shadow: inset 0 0 0 1px ${({ theme }) => theme.input.errorBorderColor};
			&:focus,
			&:focus-within {
				box-shadow: inset 0 0 0 2px ${({ theme }) => theme.input.errorBorderColor};
			}
		}
		.MuiInputBase-input {
			flex-grow: 1;
			width: unset;
		}
		&:after,
		&:before {
			display: none;
		}
		.MuiInput-input {
			padding: 0;
		}
	}
	.MuiAutocomplete-inputRoot {
		padding: 4px !important;
	}

	.MuiInputAdornment-root {
		min-width: 32px;
		width: fit-content;
		height: 100%;
		margin-left: 0;
		.MuiButtonBase-root {
			height: 100%;
			padding: 4px;
		}
	}
`

export const TextareaAutosize = styled(TextareaAutosizeMui)`
	${FontFamily};
	${FontSizeNormal};
	padding: 8px;
	background: ${({ theme }) => theme.input.background};
	color: ${({ theme }) => theme.input.color};
	border-radius: 4px;
	border: none;
	transition: box-shadow 0.24s ease-in;
	min-height: 32px;
	&:focus,
	&:focus-within {
		box-shadow: inset 0 0 0 2px ${({ theme }) => theme.input.borderColor};
	}
	&:focus-visible {
		outline: 1px inset ${({ theme }) => theme.input.secondBorderColor};
		background: ${({ theme }) => theme.input.backgroundHover};
	}
`

const ErrorAdornment = (errorMessage: string) => {
	const theme = useTheme()
	return (
		<StyledErrorAdornment>
			<Tooltip
				title={
					<ErrorMessage direction="row">
						<ErrorRoundedIcon />
						{errorMessage}
					</ErrorMessage>
				}
				PopperProps={{
					sx: {
						'& .MuiTooltip-tooltip': {
							background: theme.message.errorBackground,
							color: theme.message.errorColor,
							padding: '2px 8px 2px 4px',
							marginTop: '2px!important',
						},
					},
				}}
			>
				<span></span>
			</Tooltip>
		</StyledErrorAdornment>
	)
}

export const TextInput = ({
	label,
	textAlignRight,
	disabled,
	errorMessage,
	endAdornment,
	startAdornment,
	...rest
}: TextInputProps) => {
	return (
		<InputContainer $hasError={!!errorMessage} disabled={disabled}>
			{label && <StyledLabel>{label}</StyledLabel>}
			<StyledInput
				$hasEndAdornment={!!endAdornment || !!errorMessage}
				$hasStartAdornment={!!startAdornment || !!errorMessage}
				$textAlignRight={textAlignRight}
				startAdornment={
					!!errorMessage && !startAdornment && !!endAdornment ? (
						ErrorAdornment(errorMessage)
					) : (
						<StyledAdornment>{startAdornment}</StyledAdornment>
					)
				}
				endAdornment={
					!!errorMessage && !endAdornment ? (
						ErrorAdornment(errorMessage)
					) : (
						<StyledAdornment>{endAdornment}</StyledAdornment>
					)
				}
				disabled={disabled}
				{...rest}
			/>
		</InputContainer>
	)
}

export const TextField = ({ label, disabled, errorMessage, ...rest }: TextFieldProps) => {
	return (
		<StyledTextField
			{...rest}
			variant={'standard'}
			label={label}
			disabled={disabled}
			InputLabelProps={{ shrink: true }}
			$hasError={!!errorMessage}
			InputProps={{
				startAdornment: !!errorMessage && ErrorAdornment(errorMessage),
				endAdornment: rest.InputProps?.endAdornment,
			}}
		/>
	)
}
