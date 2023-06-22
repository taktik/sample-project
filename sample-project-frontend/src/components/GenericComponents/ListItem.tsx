import { useCallback } from 'react'
import styled from 'styled-components'
import { ItemContainer } from '.'
import { FontFamily, FontSizeNormal } from './GenericStyles/GenericStyles'

interface ListItemProps {
	children: JSX.Element
	cb: (element?: string) => void
	element?: string
	selectedItem: boolean
	highlight?: boolean
	$isInherited?: boolean
}

export const NumberOfDevices = styled.span`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${FontFamily};
	${FontSizeNormal};
	color: ${({ theme }) => theme.textLighter};
	font-weight: 400;
	b {
		font-weight: 600;
	}
`

export const ListItem = ({
	children,
	cb,
	element,
	selectedItem,
	highlight,
	$isInherited,
}: ListItemProps) => {
	const onClick = useCallback(() => {
		cb(element)
	}, [cb, element])

	return (
		<ItemContainer
			$isInherited={$isInherited}
			onClick={onClick}
			selected={selectedItem}
			$isDragging={false}
			$highlight={highlight}
		>
			{children}
		</ItemContainer>
	)
}
