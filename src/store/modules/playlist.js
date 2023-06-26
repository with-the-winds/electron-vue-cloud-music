/*
 * @Date: 2023-06-25 14:38:41
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-25 17:21:15
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\store\modules\playlist.js
 */
import { getSongUrl } from '@/api/playerlist'
const playlist = {
  state: {
    // 歌单列表
    list: [],
    // 当前歌曲mp3 Url
    playerMusicUrl: null,
    playerMusicInfo: {
      picUrl: '../assets/images/playlist0top.png',
      name: '歌曲名称',
      artist: '演唱人'

    }
  },
  getters: {
  },
  mutations: {
    // 设置url
    SET_URL: (state, url) => {
      state.playerMusicUrl = url
    },
    // 设置info
    SET_INFO: (state, info) => {
      state.playerMusicInfo = info
    },
    // 设置歌单列表
    SET_LIST: (state, list) => {
      state.list = list
    }
  },
  actions: {
    // 根据歌曲id获取url(单条)
    GetSongUrl({commit}, params) {
      return new Promise((resolve, reject) => {
        getSongUrl(params).then(res => { 
          commit('SET_URL', res.data[0].url)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}

export default playlist