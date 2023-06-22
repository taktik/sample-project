import ButtonMui, { ButtonProps } from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import styled from 'styled-components'
import { FontFamily, FontSizeNormal } from './GenericStyles/GenericStyles'
import { Loader } from './Loader'
import { RenderIf } from './RenderIf'

interface GenericButtonProps extends ButtonProps {
	tooltipText?: string
	loading?: boolean
	iconLeft?: boolean
	iconRight?: boolean
}

export const StyledButton = styled(ButtonMui) <{ $iconLeft?: boolean; $iconRight?: boolean }>`
	border-radius: 4px;
	height: 32px;
	${FontFamily};
	${FontSizeNormal};
	letter-spacing: 0.01em;
	text-transform: unset;
	line-height: 1;
	padding-left: ${({ $iconLeft }) => ($iconLeft ? '8px' : '12px')};
	padding-right: ${({ $iconRight }) => ($iconRight ? '8px' : '12px')};
	padding: 0 EXTERNAL_FRAGMENT_3 0 EXTERNAL_FRAGMENT_2;
	box-shadow: none;
	overflow: hidden;
	white-space: nowrap;
	gap: 8px;

	label {
		display: block;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		flex-grow: 1;
	}

	svg {
		font-size: 20px;
	}

	${({ color, theme }) => {
		switch (color) {
			case 'primary': {
				return `
				 background: ${theme.button.primaryBackground};
				 color: ${theme.button.primaryText};
				 &:hover {
				 	background: ${theme.button.primaryBackgroundHover};
				 	color: ${theme.button.primaryTextHover};
				 }
				  &[disabled] {
				 	background: ${theme.button.primaryBackground};
				 	color: ${theme.button.primaryText};
				 	opacity: .42;
				 }
				`
			}
			case 'secondary': {
				return `
				 background: transparent;
				 border: 1px solid ${theme.button.secondaryBorder};
				 color: ${theme.button.secondaryText};
				 &:hover {
				 	background: ${theme.button.secondaryBackgroundHover};
					border: 1px solid ${theme.button.secondaryBorderHover};
					color: ${theme.button.secondaryTextHover};
				 }
				  &[disabled] {
				 	border: 1px solid ${theme.button.secondaryBorder};
					color: ${theme.button.secondaryText};
				 	opacity: .42;
				 }
				`
			}
			case 'error': {
				return `
				background: ${theme.button.errorBackground};
				 color: ${theme.button.errorText};
				 &:hover {
				 	background: ${theme.button.errorBackgroundHover};
					color: ${theme.button.errorTextHover};
				 }
				  &[disabled] {
				 	color: ${theme.button.errorText};
				 	background: ${theme.button.errorBackground};
				 	opacity: .42;
				 }
				`
			}
			default: {
				return `
				 background: transparent;
				 color: ${theme.button.defaultText};
				 &:hover {
				 	background: ${theme.button.defaultBackgroundHover};
				 	color: ${theme.button.defaultTextHover};
				 }
				  &[disabled] {
				  	background: transparent;
				 	color: ${theme.button.defaultText};
				 	opacity: .42;
				 }
				`
			}
		}
	}}
`

export const Button = ({
	tooltipText,
	loading,
	children,
	iconLeft,
	iconRight,
	...rest
}: GenericButtonProps) => {
	const btn = (
		<StyledButton $iconLeft={iconLeft} $iconRight={iconRight} {...rest}>
			<RenderIf condition={!loading}>{children}</RenderIf>
			<RenderIf condition={!!loading}>
				<Loader color={rest.color} />
			</RenderIf>
		</StyledButton>
	)
	return tooltipText ? (
		<Tooltip title={tooltipText}>
			<span>{btn}</span>
		</Tooltip>
	) : (
		btn
	)
}
