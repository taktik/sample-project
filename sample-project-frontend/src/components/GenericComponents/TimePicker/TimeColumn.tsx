import Stack from '@mui/material/Stack'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { formatNumber } from '../../../helpers/formatDuration'
import { FontFamily, FontSizeNormal } from '../GenericStyles/GenericStyles'

interface TimePickerTimeColumnProps {
	range: number
	selected: string
	onSelect: (value: number) => void
}

const Column = styled(Stack)`
	align-items: center;
	flex-wrap: nowrap;
	height: 100%;
	flex-grow: 1;
	overflow: hidden auto;
	width: fit-content;
`

const TimeCell = styled.div<{ selected: boolean }>`
	${FontFamily};
	${FontSizeNormal};
	height: 28px;
	width: 48px;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
	background: ${({ theme, selected }) =>
		selected ? theme.selectedItem.background : theme.backgroundLight};
	color: ${({ theme, selected }) => (selected ? theme.selectedItem.color : theme.textMain)};
	cursor: pointer;
	user-select: none;
	border-radius: 4px;
	&:hover {
		background: ${({ theme, selected }) =>
		selected ? theme.selectedItem.backgroundHover : theme.backgroundMedium};
	}
`

export const TimeColumn = ({ range, selected, onSelect }: TimePickerTimeColumnProps) => {
	const timeRef = useRef<HTMLInputElement>(null)
	const columnRef = useRef<HTMLInputElement>(null)

	const isSelected = (i: number) => {
		return formatNumber(i) === selected
	}

	useEffect(() => {
		if (timeRef.current && columnRef.current) {
			// we have to user ScrollTo instead of scrollIntoView because the 'smooth' behavior doesn't work
			// on chrome https://stackoverflow.com/questions/49318497/google-chrome-simultaneously-smooth-scrollintoview-with-more-elements-doesn
			// -4 for padding
			columnRef.current.scrollTo({ top: timeRef.current.offsetTop - 4, behavior: 'smooth' })
		}
	}, [selected])

	return (
		<Column ref={columnRef} direction="column">
			{Array.from({ length: range }, (_, i) => i).map((i) => (
				<TimeCell
					selected={isSelected(i)}
					ref={isSelected(i) ? timeRef : null}
					key={i}
					onClick={() => onSelect(i)}
				>
					{formatNumber(i)}
				</TimeCell>
			))}
		</Column>
	)
}
