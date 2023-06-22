import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import WarningRoundedIcon from '@mui/icons-material/WarningRounded'
import Stack from '@mui/material/Stack'
import React from 'react'
import styled from 'styled-components'
import { FontFamily, FontSizeNormal } from './GenericStyles/GenericStyles'

export enum MessageType {
	ERROR = 'error',
	WARNING = 'warning',
	INFO = 'info',
}
interface ErrorMessageProps {
	text: string
	type: MessageType
	style?: React.CSSProperties
}
const StyledMessage = styled(Stack) <{ type: MessageType }>`
	${FontFamily};
	${FontSizeNormal};
	gap: 4px;
	padding: 2px 8px 2px 4px;
	border-radius: 4px;
	width: fit-content;
	align-items: center;
	line-height: 1.2;
	svg {
		color: ${({ theme }) => theme.message.errorColor};
		height: 20px;
		width: 20px;
	}
	${({ type, theme }) => {
		switch (type) {
			case MessageType.ERROR:
				return `
					background: ${theme.message.errorBackground};
					color: ${theme.message.errorColor};
					svg {
						color: ${theme.message.errorColor};
					}
				`
			case MessageType.WARNING:
				return `
					background: ${theme.message.warningBackground};
					color: ${theme.message.warningColor};
					svg {
						color: ${theme.message.warningColor};
					}
				`
			default:
				return `
					background: ${theme.message.infoBackground};
					color: ${theme.message.infoColor};
					svg {
						color: ${theme.message.infoColor};
					}
				`
		}
	}};
`
export const Message = ({ text, type, style }: ErrorMessageProps) => {
	return (
		<StyledMessage type={type} style={style} direction={'row'}>
			<>
				{type === MessageType.ERROR && <ErrorRoundedIcon />}
				{type === MessageType.WARNING && <WarningRoundedIcon />}
				{type === MessageType.INFO && <InfoRoundedIcon />}
				<span>{text}</span>
			</>
		</StyledMessage>
	)
}
