<!--
 * @Date: 2023-06-13 15:03:48
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-25 16:53:13
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\views\faxian\children\rank.vue
-->
<template>
  <div class="title">官方榜</div>
  <div class="official-rank" v-for="item in officialList" :key="item.id">
    <img alt="" :src="item.coverImgUrl">
    <div class="playlist">
      <div class="playlist-item" v-for="(subItem, index) in item.songs" :key="subItem.id" @dblclick="dbHandle(subItem)">
        <span>{{ index + 1 }}</span>
        <span>-</span>
        <span>{{ subItem.name }}</span>
        <span>{{ subItem.ar.map(arItem => arItem.name).join('/') }}</span>
      </div>
      <div class="playlist-more">
        <span>查看全部</span>
        <i class="iconfont icon-xiangyou1"></i>
      </div>
    </div>
  </div>
  
  <div class="title">全球榜</div>
  <div class="global-rank">
    <div class="global-wrap" v-for="item in globalList" :key="item.id">
      <RankInfo :imgSrc="item.coverImgUrl" :info="item.name" :play-count="item.playCount"></RankInfo>
    </div>
  </div>
</template>

<script>
import { getRankList, getPlaylistByRankId } from '@/api/faxian';
import RankInfo from '@/components/RankInfo.vue';
import { getSongUrl } from '@/api/playerlist'
export default {
  components: {
    RankInfo
  },
  data() {
    return {
      officialList: [],
      globalList: []
    }
  },
  created() {
    this.getRankLists()
  },
  methods: {
    // 获取排行榜列表
    getRankLists() {
      getRankList().then(res => {
        // 前4个是官方榜，后面的都是全球榜
        this.officialList = res.list.slice(0,4)
        this.globalList = res.list.slice(4)

        const promises = []
        this.officialList.forEach(item => {
          promises.push(getPlaylistByRankId({id: item.id,limit: 5 }))
        })
        // 获取官方榜的音乐列表
        Promise.all(promises).then(res => {
          res.forEach((item, index) => {
            this.officialList[index].songs = item.songs
          })
        })
      })
    },
    // 双击播放音乐
    dbHandle(subItem) {
      this.$store.commit('SET_INFO', subItem)
      this.$store.dispatch('GetSongUrl', {id: subItem.id, level: 'standard'})
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  font-size: 18px;
  font-weight: bold;
}
.official-rank {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    cursor: pointer;
  }
  .playlist {
    width: calc(100% - 200px);
    margin-left: 20px;
    .playlist-item {
      width: 100%;
      height: 36px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 13px;
      cursor: pointer;
      &:nth-child(2n + 1) {
        background-color: #fafafa;
      }
      span:nth-child(1) {
        margin-left: 10px;
        color: #837e7e;
      }
      span:nth-child(2) {
        margin-left: 10px;
        color: #bbbbbb;
        font-weight: bold;
      }
      span:nth-child(3) {
        margin-left: 10px;
      }
      span:last-child{
        margin-left: auto;
        margin-right: 10px;
        color: #929090;
      }
    }
    .playlist-more {
      width: 100%;
      height: 36px;
      text-align: left;
      line-height: 36px;
      font-size: 13px;
      span {
        cursor: pointer;
      }
      i {
        font-size: 12px;
        cursor: pointer;
      }
    }
  }
}
.global-rank {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .global-wrap {
    width: calc(20% - 10px);
    position: relative;
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>