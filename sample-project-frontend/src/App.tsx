import { BrowserRouter } from 'react-router-dom'
import { lightTheme } from './assets/constants/themes/light'
import { MyRoutes } from './components/MyRoutes'

type ThemeType = typeof lightTheme

export type { ThemeType }

export const App = () => (
	<BrowserRouter>
		<MyRoutes />
	</BrowserRouter>
)
