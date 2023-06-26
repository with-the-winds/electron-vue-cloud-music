/*
 * @Date: 2023-06-13 09:23:36
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-13 09:33:21
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\utils\auth.js
 */
import Cookies from "js-cookie";

const TokenKey = 'Cloud-Token'
// 获取token
export function getToken () {
  return Cookies.get(TokenKey)
}
// 设置token
export function setToken (token) {
  return Cookies.set(TokenKey, token)
}
// 移除token
export function removeToken () {
  return Cookies.remove(TokenKey)
}