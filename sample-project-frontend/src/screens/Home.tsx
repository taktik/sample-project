import React, { useState } from 'react'
import styled from 'styled-components'
import { Example } from '../model'
import Button from '@mui/material/Button'
import { ExampleDialog } from '../dialogs/ExampleDialog'
import { v4 as uuidv4 } from 'uuid'

const Container = styled.div`
  background-color: #b4d455;
`

export const Home = () => {
	const [open, setOpen] = useState<boolean>(false)

	const example: Example = {
		one: 'test', two: 7, three: { a: uuidv4(), b: new Date().toISOString() }
	}
	const invalidateCache = () => {
		console.warn("invalidate cache")
	}

	return (
			<Container>
				<h1>Sample project</h1>
				<div className={'exampleButton'}>
					<Button
							variant={'contained'}
							onClick={() => setOpen(true)}
					>
						Confirm
					</Button>
				</div>
				<ExampleDialog
						isOpen={open}
						example={example}
						onClose={() => setOpen(false)}
						invalidateCache={invalidateCache}
				/>
			</Container>
	)
}
