<!--
 * @Date: 2023-06-13 15:05:15
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-21 14:57:02
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\views\faxian\children\newSong.vue
-->
<template>
  <div class="new-song">
    <!-- 新歌速递/新碟上架 -->
    <div class="select-button-wrap">
      <div class="select-button">
        <div :class="['select-button-item', selectValue === '新歌速递' ? 'actived' : '']" @click="handleSelect('新歌速递')">新歌速递</div>
        <div :class="['select-button-item', selectValue === '新碟上架' ? 'actived' : '']" @click="handleSelect('新碟上架')">新碟上架</div>
      </div>
    </div>
    <!-- 新歌速递 -->
    <div v-if="selectValue === '新歌速递'">
      <div class="nav-bar">
        <div>
          <div 
            :class="['nav-item', songParams.type === item.value ? 'nav-bar-actived' : '']"
            v-for="item in newSongArea"
            :key="item.value"
            @click="handleNav(item.value)"
          >{{ item.label }}</div>
        </div>
        <div class="bofang-btn">
          <i class="iconfont icon-bofang"></i>
          <span>播放全部</span>
        </div>
      </div>
      <div class="songlist-item" v-for="(item, index) in songList" :key="item.id">
        <span class="serial-number">{{ index < 9 ? '0' + (index + 1) : index + 1 }}</span>
        <img alt="" v-lazy="item.album.picUrl" />
        <div class="name">
          <span>{{ item.name }}</span>
          <span>{{ item.alias.join('/') }}</span>
        </div>
        <span class="artist">{{ item.artists.map(artistsItem => artistsItem.name).join(' / ') }}</span>
        <span class="album">{{ item.album.name }}</span>
        <span class="playtime">{{ milsecTomin(item.bMusic.playTime) }}</span>
      </div>
    </div>
    <!-- 新碟上架 -->
    <div v-else>
      <div class="nav-bar">
        <div>
          <div
            :class="['nav-item', cdsParams.area === item.value ? 'nav-bar-actived' : '']" 
            v-for="item in newCdArea" 
            :key="item.value"
            @click="handleNav(item.value)"
          >{{ item.label }}</div>
        </div>
        <div class="group-btn">
          <div @click="handleGroup('hot')" :class="[cdsParams.type === 'hot' ? 'actived' : '']">推荐</div>
          <div @click="handleGroup('new')" :class="[cdsParams.type === 'new' ? 'actived' : '']">全部</div>
        </div>
      </div>
      <div class="cd-list">
        <div class="cd-wrap" v-for="item in cdsList" :key="item.id">
          <DJImage :imgSrc="item.picUrl" :info="item.name" :sub-info="item.artist.name"></DJImage>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAlbum, getSong } from '@/api/faxian'
import { milsecTomin } from '@/utils/index'
import DJImage from '@/components/DJImage.vue'

export default {
  components: {
    DJImage
  },
  data() {
    return {
      selectValue: '新歌速递',
      newSongArea: [{
        label: '全部',
        value: 0
      },{
        label: '华语',
        value: 7
      },{
        label: '欧美',
        value: 96
      },{
        label: '日本',
        value: 8
      },{
        label: '韩国',
        value: 16
      }],
      newCdArea: [{
        label: '全部',
        value: 'ALL'
      },{
        label: '华语',
        value: 'ZH'
      },{
        label: '欧美',
        value: 'EA'
      },{
        label: '韩国',
        value: 'KR'
      },{
        label: '日本',
        value: 'JP'
      }],
      songParams: {
        type: 0
      },
      cdsParams: {
        offset: 0,
        limit: 30,
        area: 'ALL',
        type: 'hot' // new: 全部, hot: 推荐
      },
      songList: [],
      cdsList: [],
      milsecTomin
    }
  },
  created() {
    this.getSongs()
    this.getCds()
  },
  methods: {
    // 点击选择
    handleSelect(value) {
      this.selectValue = value
    },
    // 获取新歌速递列表(接口有问题参数暂时不传)
    getSongs() {
      getSong().then(res => {
        this.songList = res.data
      })
    },
    // 获取新碟上传列表(接口有问题参数暂时不传)
    getCds() {
      getAlbum().then(res => {
        this.cdsList = res.weekData
      })
    },
    // 点击nav
    handleNav(value) {
      if (this.selectValue === '新歌速递') {
        this.songParams.type = value
        this.getSongs()
      } else {
        this.cdsParams.area = value
        this.getCds()
      }
    },
    // 点击group
    handleGroup(value) {
      this.cdsParams.type = value
      this.getCds()
    }
  }
}
</script>

<style lang="scss" scoped>
.new-song {
  width: 100%;
  height: 100%;
  position: relative;
  .select-button-wrap {
    width: 100%;
    height: 28px;
    display: flex;
    justify-content: center;
    .select-button {
      border: 1px solid #bbbbbb;
      border-radius: 14px;
      .select-button-item {
        width: 100px;
        height: 28px;
        display: inline-block;
        text-align: center;
        line-height: 28px;
        color: #333333;
        font-size: 13px;
        border-radius: 14px;
        cursor: pointer;
      }
      .actived {
        background-color: #bbbbbb;
        color: #fff;
      }
    }
  }
  // 导航类型选择
  .nav-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    .nav-item {
      height: 30px;
      width: 40px;
      display: inline-block;
      color: #333333;
      font-size: 14px;
      line-height: 30px;
      cursor: pointer;
    }
    .nav-bar-actived {
      font-weight: bold;
    }
    .bofang-btn {
      cursor: pointer;
      width: 100px;
      background-color: #ec4141;
      height: 22px;
      border: 1px solid #d9d9d9;
      border-radius: 14px;
      font-size: 13px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin-left: 4px;
      }
    }
    .group-btn {
      div {
        display: inline-block;
        height: 22px;
        padding: 0 10px;
        border-radius: 11px;
        font-size: 13px;
        color: #333333;
        line-height: 22px;
        cursor: pointer;
      }
      margin-left: 10px;
      .actived {
        background-color: #fef5f5;
        color: #ec4141;
      }
    }
  }
  // 歌曲列表
  .songlist-item {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    font-weight: 100;
    &:nth-child(2n) {
      background-color: #fafafa;
    }
    &:hover {
      background-color: #f2f2f3;
    }
    .serial-number {
      color: #d8c8c8;
      width: 40px;
      text-align: center;
    }
    img {
      width: 60px;
      height: 60px;
      border-radius: 8px;
    }
    .name {
      width: calc(100% - 580px);
      padding-left: 20px;
      padding-right: 10px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      span:first-child {
        color: #303031;
      }
      span:last-child {
        color: #d8c8c8;
      }
    }
    .artist {
      color: #646464;
      width: 150px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .album {
      color: #646464;
      width: 190px;
      padding-left: 10px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .playtime {
      width: 100px;
      text-align: center;
      color: #646464;
    }
  }
  // 新碟
  .cd-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .cd-wrap {
      width: calc(20% - 10px);
      margin-right: 10px;
    }
  }
}
</style>