import React from 'react'
import { useSnackbar } from 'notistack'
import api from '../config/AxiosInterceptor'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import { Example } from '../model'

interface ExampleDialogProps {
	isOpen: boolean
	example?: Example
	onClose: () => void
	invalidateCache: () => void
}

export const ExampleDialog = ({
								  isOpen,
								  example,
								  onClose,
								  invalidateCache
							  }: ExampleDialogProps) => {
	const { enqueueSnackbar } = useSnackbar()

	const handleSubmit = async () => {
		if (example) {
			try {
				const response = await api.get<string>(`/backend/api?text=${example.one}`)
					enqueueSnackbar(response.data, {
						variant: 'success'
					})
			} catch (error) {
					enqueueSnackbar('Unexpected error occurred', {
						variant: 'error'
					})
			}
			invalidateCache()
		} else {
			enqueueSnackbar('Input is empty', { variant: 'error' })
		}
		onClose()
	}

	return (
			<Dialog open={isOpen} onClose={onClose}>
				<h3>Example dialog</h3>
				<Button
						variant={'contained'}
						color={'info'}
						disabled={!example}
						onClick={() => {
							handleSubmit().catch((error) => {
								console.warn(error)
							})
						}}
				>
					Send
				</Button>
			</Dialog>
	)
}
