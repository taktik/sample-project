const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
		app.use(
			['/backend'],
			createProxyMiddleware({
				target: 'http://localhost',
				changeOrigin: true,
			})
		)
// 	app.use(
// 		['/backend'],
// 		createProxyMiddleware({
// 			target: 'https://sample.taktik.dev',
// 			changeOrigin: true,
// 		})
// 	)
	app.use(
		['/login'],
		createProxyMiddleware({
			target: 'https://sample.taktik.dev',
			changeOrigin: true,
		})
	)
}
