import IconButtonMui, { IconButtonProps } from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import styled from 'styled-components'
import { Loader } from './Loader'
import { RenderIf } from './RenderIf'

export interface IconButtonStyledProps extends IconButtonProps {
	tooltipText?: string
	loading?: boolean
	selected?: boolean
}

const StyleIconButton = styled(IconButtonMui) <{ $selected?: boolean }>`
	height: 32px;
	width: 32px;
	border-radius: 4px;
	padding: 4px;
	svg {
		height: 20px;
		width: 20px;
	}
	${({ color, theme, $selected }) => {
		switch (color) {
			case 'secondary': {
				return `
				 background: ${theme.iconButton.secondaryBackground};
				 border: 1px solid ${theme.iconButton.secondaryBorder};
				 color: ${theme.iconButton.secondaryIcon};
				 &:hover {
				 	background: ${theme.iconButton.secondaryBackgroundHover};
					border: 1px solid ${theme.iconButton.secondaryBorderHover};
					color: ${theme.iconButton.secondaryIconHover};
				 }
				`
			}
			case 'error': {
				return `
				background: ${theme.iconButton.errorBackground};
				color: ${theme.iconButton.errorIcon};
				&:hover {
					background: ${theme.iconButton.errorBackgroundHover};
					color: ${theme.iconButton.errorIconHover};
				}
				&:disabled {
					background: ${theme.iconButton.errorBackground};
					color: ${theme.iconButton.errorIcon};
					opacity: 0.42;
				}
				`
			}
			case 'default': {
				return `
					background: ${$selected ? theme.iconButton.selectedBackground : theme.iconButton.defaultBackground};
					color: ${$selected ? theme.iconButton.selectedIcon : theme.iconButton.defaultIcon};
					&:hover {
						background: ${$selected
						? theme.iconButton.selectedBackgroundHover
						: theme.iconButton.defaultBackgroundHover
					};
						color: ${$selected ? theme.iconButton.selectedIconHover : theme.iconButton.defaultIconHover};
					}
					&:disabled {
						background: ${theme.iconButton.defaultBackground};
						color: ${theme.iconButton.defaultIcon};
						opacity: 0.42;
					}
				`
			}
			default: {
				return `
				 background: ${theme.iconButton.background};
				 color: ${theme.iconButton.icon};
				 &:hover {
				 	background: ${theme.iconButton.backgroundHover};
				 	color: ${theme.iconButton.iconHover};
				 }
				 &:disabled {
					background: ${theme.iconButton.background};
					color: ${theme.iconButton.icon};
					opacity: 0.42;
				 }
				`
			}
		}
	}}
`

export const IconButton = ({
	children,
	tooltipText,
	loading,
	selected,
	...rest
}: IconButtonStyledProps) => {
	const Button = (
		<StyleIconButton $selected={selected} {...rest}>
			<RenderIf condition={!loading}>{children}</RenderIf>
			<RenderIf condition={!!loading}>
				<Loader color={rest.color} />
			</RenderIf>
		</StyleIconButton>
	)

	return tooltipText ? (
		<Tooltip title={tooltipText}>
			<span>{Button}</span>
		</Tooltip>
	) : (
		Button
	)
}
