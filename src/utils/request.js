/*
 * @Date: 2023-06-13 08:46:04
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-13 16:49:27
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\utils\request.js
 */
import aixos from 'axios'
import { getToken } from './auth'
import { ElNotification, ElMessageBox, ElMessage } from 'element-plus'

aixos.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
console.log('查看当前环境的baseurl', process.env.VUE_APP_BASE_URL);

// 创建axios实例
const service = aixos.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 3000
})

// 请求拦截器
service.interceptors.request.use(config => {
  // 是否需要设置 token(不需要token的话只需要在请求的headers中设置下isToken: false)
  const isToken = (config.headers || {}).isToken === false
  if (getToken() && !isToken) {
    config.headers.Authorization = getToken()
  }
  return config
}, error => {
  console.error(error);
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
  if (res.data.code && res.data.code === 200) {
    return res.data
  }
  ElMessage({message: res.msg || res.statusText || 'Response error', type: 'warning'})
  return Promise.reject(res)
}, error => {
  if (error.response) {
    const res = error.response
    ElMessage({message: res, type: 'error'})
  } else {
    ElMessage({message: '请检查网络连接状态', type: 'error'})
  }
  return Promise.reject(error.response);
})

export default service