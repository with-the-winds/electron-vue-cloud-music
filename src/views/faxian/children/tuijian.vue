<!--
 * @Date: 2023-06-13 15:01:25
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-21 14:57:13
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\views\faxian\children\tuijian.vue
-->
<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(item, index) in data.banners" :key="index">
      <img alt="" :src="item.imageUrl" style="width: 100%;height: 100%;object-position: center;object-fit: cover;">
    </el-carousel-item>
  </el-carousel>

  <TitleMore title="推荐歌单" @clickMore="handleMore('/playList')"></TitleMore>
  <div class="recommend">
    <div class="recommend-wrap" v-for="(item, index) in data.playlist" :key="index">
      <ListenTitle 
      :imgSrc="item.picUrl" 
      :description="item.name" 
      :playCount="item.playCount">
    </ListenTitle>
    </div>
  </div>
  <TitleMore title="最新音乐" @clickMore="handleMore('/newSong')"></TitleMore>
  <div class="new-song">
    <div class="new-song-wrap" v-for="(item,index) in data.newSong" :key="index">
      <NewSong
      :index="index"
      :imgUrl="item.picUrl"
      :name="item.name"
      :artists="item.song.artists.map(item => item.name).join('/')"></NewSong>
    </div>
  </div>
  <TitleMore title="独家放送" :ismore="false"></TitleMore>
  <div class="private-content">
    <div class="private-content-wrap" v-for="(item, index) in data.privateContent" :key="index">
      <VideoHover
      :imgUrl="item.picUrl"
      :name="item.name">
      </VideoHover>
    </div>
  </div>
  <TitleMore title="推荐MV" ></TitleMore>
  <div class="mv">
    <div class="mv-wrap" v-for="(item, index) in data.mv" :key="index">
      <ListenTitle 
      :imgSrc="item.picUrl" 
      :description="item.name" 
      :playCount="item.playCount">
    </ListenTitle>
    </div>
  </div>
  <TitleMore title="主播电台" @clickMore="handleMore('/dj')"></TitleMore>
  <div class="djRadios">
    <div class="djRadios-wrap" v-for="(item, index) in data.djRadios" :key="index" >
      <RadioStationTitle 
      :imgUrl="item.picUrl"
      :name="item.name" 
      :category="item.category"
      :rcmdtext="item.rcmdtext">
      </RadioStationTitle>
    </div>
  </div>
</template>

<script>
import {getBanner, getPrivateContent,getNewSong,getRecommendPlaylist,getPersonalizedMV,getHotDJ} from '../../../api/faxian.js'
import TitleMore from '@/components/TitleMore.vue'
import ListenTitle from '../../../components/ListenTitle.vue'
import NewSong from '@/components/NewSong.vue'
import VideoHover from '@/components/VideoHover.vue'
import RadioStationTitle from '@/components/RadioStationTitle.vue'
export default {
  components: {
    TitleMore,
    ListenTitle,
    NewSong,
    VideoHover,
    RadioStationTitle
  },
  data() {
    return {
      data: {}
    }
  },
  created() {
    this.getData()
  },
  methods: {
    // 获取页面数据
    getData() {
      Promise.all([
        getBanner(),
        getPrivateContent(),
        getNewSong(),
        getRecommendPlaylist(),
        getPersonalizedMV(),
        getHotDJ()
      ]).then(([
        {banners},
        {result: privateContent},
        {result: newSong},
        {result:playlist},
        {result: mv},
        {djRadios}
      ]) => {
        this.data = {
          banners,
          privateContent,
          newSong,
          playlist,
          mv,
          djRadios
        }
      })
    },
    // 点击更多
    handleMore(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped lang="scss">
.tuijian {
  width: calc(100% - 40px);
  margin: 0 auto;
}
.el-carousel__item {
  background-color: #99a9bf;
}
// 推荐歌单
.recommend {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  .recommend-wrap {
    width: calc(20% - 10px);
    position: relative;
    cursor: pointer;
  }
}
// 最新音乐
.new-song {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 10px;
  .new-song-wrap {
    width: 50%;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #dddddd !important;
    }
  }
  .new-song-wrap:nth-child(2n + 1) {
    background-color: #eeeeee;
  }
}
// 独家放送
.private-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  .private-content-wrap {
    width: calc(33.3% - 10px);
    cursor: pointer;
  }
}
// 推荐MV
.mv {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .mv-wrap {
    width: calc(25% - 10px);
    margin-right: 10px;
    position: relative;
    cursor: pointer;
  }
}
// 电台
.djRadios {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
  .djRadios-wrap {
    width: calc(16.6% - 10px);
    position: relative;
    cursor: pointer;
  }
}
</style>