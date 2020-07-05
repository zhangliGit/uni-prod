/**
 * @description 多环境接口配置
 * @author zhangli
 */

const ConfigEnv = process.env.NODE_ENV
let api_url= ''
if (ConfigEnv === 'production') {
  api_url = '/api_url'
} else if (ConfigEnv === 'development') {
  api_url = '/api_url'
}

export default {
  api_url
}