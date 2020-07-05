const isProd = process.env.NODE_ENV === 'production'
const path = require('path')
function resolve(dir) {
	return path.join(__dirname, dir)
}
// cdn配置
module.exports = {
	chainWebpack: config => {
		config.resolve.alias
			.set('@config', resolve('config'))
			.set('@u', resolve('utils'))
			.set('@s', resolve('static'))
		/**
		 * 限制图片转码
		 */
		config.module
			.rule('images')
			.use('url-loader')
			.loader('url-loader')
			.tap(options => Object.assign(options, {
				limit: 40000
			}))
	},
	configureWebpack: config => {
		// 配置cdn模块
		if (isProd) {
		  config.externals = {
		    vue: 'Vue'
		  }
		}
	},
}
