<!--
 * @Date: 2023-06-16 15:18:18
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-16 15:41:19
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\components\RankInfo.vue
-->
<template>
  <div class="play-count">
    <i class="iconfont icon-24gl-play"></i>
    <span>{{ playCountFormat(playCount) }}</span>
  </div>
  <img alt="" v-lazy="imgSrc">
  <div class="info">
    <span>{{ info }}</span>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: '',
    info: '',
    playCount: 0
  },
  data() {
    return {

    }
  },
  methods: {
    // 计算播放量
    playCountFormat(playCount) {
      if (playCount < 10000) {
        return playCount;
      } else if (playCount < 100000000) {
        return parseInt(playCount / 10000) + '万'
      } else {
        return parseInt(playCount / 100000000) + '亿'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.play-count {
  width: 100%;
  height: 26px;
  line-height: 26px;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 10px;
  left: 0;
  display: flex;
  justify-content: flex-end;
  i {
    color: #fff;
    font-size: 12px;
    margin-right: 6px;
  }
  span {
    color: #fff;
    font-size: 12px;
    margin-right: 6px;
  }
}
img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  margin-top: 10px;
}
.info {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow-wrap: break-word;  //强制换行
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp:2; //超出多少行数显示省略号
  font-size: 14px;
  letter-spacing: 1px;
}
</style>