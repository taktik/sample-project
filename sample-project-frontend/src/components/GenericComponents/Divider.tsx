import { Divider as DividerMui } from '@mui/material'
import styled from 'styled-components'

export const Divider = styled(DividerMui)`
	border-color: ${({ theme }) => theme.borderColor};
`
