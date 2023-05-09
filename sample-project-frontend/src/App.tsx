import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MyRoutes } from './components/MyRoutes'

export const App = () => (
	<BrowserRouter>
		<MyRoutes />
	</BrowserRouter>
)
