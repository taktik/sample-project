import styled from 'styled-components'
import { FontFamily, FontSizeNormal } from './GenericStyles/GenericStyles'

export const Label = styled.label`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 32px;
	padding: 0 12px;
	${FontFamily};
	${FontSizeNormal};
	color: ${({ theme }) => theme.mainLabel.color};
	font-weight: 600;
	letter-spacing: 0.01px;
	flex-shrink: 0;
	width: 100%;
	user-select: none;
`
