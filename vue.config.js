const isProd = process.env.NODE_ENV === 'production'
// cdn配置
console.log('going')
module.exports = {
  configureWebpack: config => {
    // 配置cdn模块
    if (isProd) {
      config.externals = {
        vue: 'Vue',
        axios: 'axios'
      }
    }
  }
}