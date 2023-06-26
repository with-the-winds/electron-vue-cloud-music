/*
 * @Date: 2023-06-13 10:01:36
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-20 20:59:52
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\api\faxian.js
 */
import request from '../utils/request'

/**
 * 
 * @returns 推荐
 */

// 获取轮播图
export function getBanner() {
  return request({
    url: '/banner',
    method: 'get'
  })
}

// 独家放送
export function getPrivateContent() {
  return request({
    url: '/personalized/privatecontent',
    method: 'get'
  })
}

// 最新音乐
export function getNewSong() {
  return request({
    url: '/personalized/newsong',
    method: 'get'
  })
}

// 推荐歌单
export function getRecommendPlaylist() {
  return request({
    url: '/personalized?limit=10',
    method: 'get'
  })
}

// 推荐MV
export function getPersonalizedMV() {
  return request({
    url: '/personalized/mv',
    method: 'get'
  })
}

// 热门电台
export function getHotDJ() {
  return request({
    url: '/dj/hot',
    method: 'get'
  })
}

/**
 * 歌单
 * @param {} params 
 * @returns 
 */

// 获取歌单音乐
export function getPlaylist(params) {
  return request({
    url: '/top/playlist',
    method: 'get',
    params: params
  })
}
// 获取热门标签
export function getHotList() {
  return request({
    url: '/playlist/hot',
    method: 'get'
  })
}
// 获取标签种类
export function getPlaylistCatlist() {
  return request({
    url: '/playlist/catlist',
    method: 'get'
  })
}

/**
 * 主播电台（dj）
 * @returns 
 */

// 获取DJ Banner
export function getDjBanner() {
  return request({
    url: '/dj/banner',
    method: 'get'
  })
}

// 获取推荐电台
export function getDjRecommend() {
  return request({
    url: '/dj/recommend',
    method: 'get'
  })
}

//  获取电台分类推荐
export function getDjRecommendType(params) {
  return request({
    url: '/dj/recommend/type',
    method: 'get',
    params: params
  })
}

// 获取电台分类列表
export function getDjCatelist() {
  return request({
    url: '/dj/catelist',
    method: 'get'
  })
}

/**
 * 排行榜
 */

// 获取全部的排行榜列表
export function getRankList() {
  return request({
    url: '/toplist',
    method: 'get'
  })
}

// 根据排行榜的id获取歌单
export function getPlaylistByRankId(params) {
  return request({
    url: '/playlist/track/all',
    method: 'get',
    params: params
  })
}

/**
 * 最新音乐
 */

// 新碟上架 
export function getAlbum(params) {
  return request({
    url: '/top/album',
    method: 'get',
    params: params
  })
} 

// 新歌速递
export function getSong(params) {
  return request({
    url: '/top/song',
    method: 'get',
    params: params
  })
} 