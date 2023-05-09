import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../screens/Home'
import { SnackbarProvider } from 'notistack'

export const MyRoutes = () => (
	<Routes>
		<Route
			path="/"
			element={
				<SnackbarProvider maxSnack={5}>
					<Home />
				</SnackbarProvider>
			}
		/>
	</Routes>
)
