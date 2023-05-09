import axios, { AxiosError, AxiosResponse } from 'axios'

const api = axios.create()

api.interceptors.response.use(
	(response: AxiosResponse) => {
		return response
	},
	(error: AxiosError) => {
		if (error.response?.status === 403) {
			console.warn('Redirecting to /login')
			const loginUrl = new URL('/login/', window.location.href)
			loginUrl.searchParams.set('target', window.location.href)
			window.location.replace(loginUrl.href)
		}
		throw Error
	}
)

export default api
