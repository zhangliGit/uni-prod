/**
 * @description 多环境接口配置
 * @author zhangli
 */

const ConfigEnv = process.env.NODE_ENV
let hostEnv = ''

if (ConfigEnv === 'production') {
  hostEnv = ''
} else if (ConfigEnv === 'development') {
  hostEnv = ''
}

export default hostEnv
