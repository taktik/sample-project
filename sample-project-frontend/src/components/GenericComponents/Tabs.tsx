import styled from 'styled-components'
import { Tabs as MuiTabs } from '@mui/material/'

export const Tabs = styled(MuiTabs)`
	flex-grow: 1;
	align-items: center;
	button {
		color: ${({ theme }) => theme.button.defaultText};
		&:hover {
			background-color: ${({ theme }) => theme.button.defaultBackgroundHover};
			color: ${({ theme }) => theme.button.defaultTextHover};
		}
		z-index: 1;
		&.Mui-selected {
			box-sizing: border-box;
			color: ${({ theme }) => theme.selectedItem.color};
			border: 1px solid transparent;
			&:hover {
				background-color: ${({ theme }) => theme.selectedItem.backgroundHover};
				color: ${({ theme }) => theme.selectedItem.colorHover};
			}
		}
	}
	* > span.MuiTabs-indicator {
		display: block;
		height: 32px;
		border-radius: 4px;
		background-color: ${({ theme }) => theme.selectedItem.background};
		z-index: 0;
	}
`
