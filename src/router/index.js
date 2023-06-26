/*
 * @Date: 2023-06-12 09:59:20
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-20 19:10:06
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import FaXian from '../views/faxian/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/faxian'
  },
  {
    path: '/faxian',
    name: 'faxian',
    title: '发现音乐',
    redirect: '/tuijian',
    component: FaXian,
    children: [{
      path: '/tuijian',
      title: '个性推荐',
      component: () => import('../views/faxian/children/tuijian.vue')
    },{
      path: '/playList',
      title: '歌单',
      component: () => import('../views/faxian/children/playlist.vue')
    },{
      path: '/dj',
      title: '主播电台',
      component: () => import('../views/faxian/children/dj.vue')
    },{
      path: '/rank',
      title: '排行榜',
      component: () => import('../views/faxian/children/rank.vue')
    },{
      path: '/newSong',
      title: '最新音乐',
      component: () => import('../views/faxian/children/newSong.vue')
    }]
  },
  {
    path: '/singer',
    name: 'singer',
    title: '歌手',
    component: () => import('../views/singer/index.vue')
  },
  {
    path: '/private_fm',
    name: 'private_fm',
    title: '私人FM',
    component: () => import('../views/privateFM/index.vue')
  },
  {
    path: '/video',
    name: 'video',
    title: '视频',
    component: () => import('../views/video/index.vue')
  },
  {
    path: '/trends',
    name: 'trends',
    title: '动态',
    component: () => import('../views/trends/index.vue')
  },
  {
    path: '/localmusic',
    name: 'localmusic',
    title: '本地音乐',
    component: () => import('../views/localMusic/index.vue')
  },
  {
    path: '/download',
    name: 'download',
    title: '下载管理',
    component: () => import('../views/download/index.vue')
  },
  {
    path: '/cloudmusic',
    name: 'cloudmusic',
    title: '我的音乐云盘',
    component: () => import('../views/cloudmusic/index.vue')
  },
  {
    path: '/mycollect',
    name: 'mycollect',
    title: '我的收藏',
    component: () => import('../views/myCollect/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
