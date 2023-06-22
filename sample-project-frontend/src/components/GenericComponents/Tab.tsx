import { Tab as MuiTab } from '@mui/material'
import styled from 'styled-components'
import { FontFamily, FontSizeNormal } from './GenericStyles/GenericStyles'

export const Tab = styled(MuiTab)`
	${FontFamily};
	${FontSizeNormal};
	font-weight: 500;
	text-transform: unset;
	height: 32px;
	min-height: 32px;
	padding: 0 12px;
	border-radius: 4px;
	&.Mui-selected {
		background: transparent;
		color: ${({ theme }) => theme.primaryMain};
		font-weight: 600;
	}
`
