import styled, { css } from 'styled-components'
import { FontFamily, FontSizeNormal, ShadowElevation4 } from './GenericStyles/GenericStyles'
import { InputContainer } from './Textfield'
export const ItemContainer = styled.div<{
	selected: boolean
	$highlight?: boolean
	$isDragging: boolean
	$isInherited?: boolean
}>`
	position: relative;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-start;
	box-sizing: border-box;
	padding: 0 0 0 8px;
	${FontFamily};
	${FontSizeNormal};
	font-weight: 500;
	width: 100%;
	cursor: pointer;
	background: ${({ theme, selected, $isDragging, $isInherited, $highlight }) =>
		selected
			? theme.navItem.selectedBackground
			: $isDragging
				? theme.backgroundMedium
				: $isInherited
					? theme.navItem.inheritedBackground
					: $highlight
						? theme.navItem.highlightBackground
						: theme.navItem.background};
	color: ${({ theme, selected, $highlight }) => {
		return selected
			? theme.navItem.selectedColor
			: $highlight
				? theme.navItem.highlightColor
				: theme.navItem.color
	}};
	border-radius: 4px;
	border: ${({ theme, $isInherited, selected }) =>
		$isInherited
			? `1px dashed ${selected
				? theme.navItem.selectedInheritedBorderColor
				: theme.navItem.inheritedBorderColor
			}`
			: ''};
	height: 28px;
	flex-shrink: 0;
	overflow: hidden;
	&:after {
		content: '';
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
		border-radius: 4px;
		opacity: ${({ $isDragging }) => ($isDragging ? 1 : 0)};
		${ShadowElevation4};
		transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	transform: ${({ $isDragging }) => ($isDragging ? 'scale(1.1)' : 'scale(1)')};
	transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
	svg {
		color: ${({ theme, selected }) =>
		selected ? theme.navItem.selectedColor : theme.navItem.color};
		flex-shrink: 0;
	}
	button:hover {
		background: transparent;
	}
	span {
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		flex-grow: 1;
		flex-shrink: 0;
		white-space: nowrap;
	}
	${InputContainer} {
		flex-grow: 1;
		flex-shrink: 1;
	}
	${({ selected }) =>
		selected
			? css`
					.contextMenuIcon {
						opacity: 1;
						width: 28px;
						height: 28px;
					}
			  `
			: css`
					.contextMenuIcon {
						opacity: 0;
						width: 0;
						height: 0;
						transition: all 0.24s cubic-bezier(0.165, 0.84, 0.44, 1);
					}
					&:hover .contextMenuIcon {
						opacity: 1;
						width: 28px;
						height: 28px;
					}
			  `}
`
