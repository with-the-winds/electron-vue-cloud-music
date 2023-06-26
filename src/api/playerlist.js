/*
 * @Date: 2023-06-25 15:06:05
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-25 15:16:50
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\api\playerlist.js
 */
import request from '../utils/request'

export function getSongUrl(params) {
  return request({
    url: '/song/url/v1',
    method: 'get',
    params: params
  })
}
