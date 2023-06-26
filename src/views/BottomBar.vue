<!--
 * @Date: 2023-06-12 14:36:18
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-25 17:10:47
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\views\BottomBar.vue
-->
<template>
  <div class="bottom-bar">
    <audio ref="audioRef" :src="$store.state.playlist.playerMusicUrl || null"></audio>
    <div class="audio">
      <div class="audio-img">
        <img alt="" :src="$store.state.playlist.playerMusicInfo?.coverImgUrl || '../assets/images/playlist-top.png'" >
        <div class="music-info">
          <div>
            <span>歌曲名称</span>
            <i class="iconfont icon-xihuan"></i>
          </div>
          <div>演唱人</div>
        </div>
      </div>
      <div class="audio-play">
        <div class="audio-methods">
          <i :class="['iconfont', playType]"></i>
          <i class="iconfont icon-shangyishou"></i>
          <i :class="['iconfont', isBoFang ? 'icon-bofang1' : 'icon-zanting']" @click="handlePlay"></i>
          <i class="iconfont icon-xiayishou"></i>
          <i class="iconfont icon-geciweidianji"></i>
        </div>
        <div class="audio-process">
          <span>00:00</span>
          <el-progress :percentage="50" :show-text="false" status="exception"/>
          <span>03:09</span>
        </div>
      </div>
      <div class="audio-control">
        <div>{{ qualityLabel }}</div>
        <i class="iconfont icon-shengyin"></i>
        <i class="iconfont icon-liebiao_o"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playTypeList: ['icon-liebiaoxunhuan', 'icon-24gl-repeatOnce2', 'icon-shunxubofang', 'icon-suijibofang'],
      playType: 'icon-liebiaoxunhuan',
      isBoFang: true,
      toneQuality: [{
        label: '标准音质',
        value: 'standard'
      },{
        label: '较高音质',
        value: 'higher'
      },{
        label: '极高音质',
        value: 'exhigh'
      },{
        label: '无损音质',
        value: 'lossless'
      }],
      qualityLabel: '标准音质',
      qualityValue: 'standard'
    }
  },
  watch: {
    '$store.state.playlist.playerMusicUrl'(val, oldVal) {
      const audioDom = this.$refs.audioRef
      this.isBoFang = false
      audioDom.play()
    }
  },
  methods: {
    // 播放/暂停
    handlePlay() {
      const audioDom = this.$refs.audioRef
      this.isBoFang = !this.isBoFang
      if (!this.isBoFang) {
        audioDom.play()
      } else {
        audioDom.pause()
      }

    }
  }
}
</script>

<style scoped lang="scss">
.bottom-bar {
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  border-top: 2px solid #e0e0e0;
}
.audio {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.audio-img {
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    margin-top: 0;
    margin-left: 10px;
  }
  .music-info {
    margin-left: 10px;
    div:first-child {
      font-size: 16px;
      display: flex;
      align-items: center;
    }
    div:last-child {
      font-size: 13px;
      margin-top: 4px;
    }
    .icon-xihuan {
      margin-left: 4px;
      font-size: 18px;
      cursor: pointer;
    }
  }
}
.audio-play {
  width: calc(100% - 600px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :deep(.el-progress-bar__outer) {
    height: 3px !important;
  }
  .audio-methods {
    display: flex;
    justify-content: center;
    i {
      margin-right: 20px;
      cursor: pointer;
    }
    i:last-child {
      margin-right: 0;
    }
    .iconfont:hover {
      color: #f06767;
    }
  }
  .audio-process {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    span {
      font-size: 12px;
      color: #9999ce;
    }
    .el-progress {
      width: 350px;
      margin: 0 6px;
    }
  }
}
.audio-control {
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  div {
    border: 1px solid #656565;
    cursor: pointer;
    font-size: 12px;
  }
  .iconfont {
    font-size: 28px;
    cursor: pointer;
    margin-left: 12px;
    &:last-child {
      margin-right: 4px;
    }
  }
}
</style>