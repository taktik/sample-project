import { Radio as RadioMui } from '@mui/material/'
import styled from 'styled-components'

export const Radio = styled(RadioMui)`
	color: ${({ theme }) => theme.primaryMain};
	height: 32px;
	width: 32px;
	min-width: 32px;
	& .MuiSvgIcon-root {
		font-size: 16px;
	}
`
