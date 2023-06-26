/*
 * @Date: 2023-06-20 19:10:55
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-20 19:11:10
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\api\singer.js
 */
import request from '../utils/request'
/**
 * 歌手
 */
export function getArtistList(params) {
  return request({
    url: '/artist/list',
    method: 'get',
    params: params
  })
}