<!--
 * @Date: 2023-06-13 20:15:55
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-20 18:41:33
 * @Description: 封装组件，这个是有一个图片，有一个标题，头部有一个听音乐的小标题
 * @FilePath: \electron-vue-cloud-music\src\components\ListenTitle.vue
-->
<template>
  <div v-if="playCount" class="listen">
    <i class="iconfont icon-diantai"></i>
    <span>{{ (playCount / 10000).toFixed(1) }}万</span>
  </div>
  <div v-if="nickname" class="nickname">
    <i class="iconfont icon-touxiang"></i>
    <span>{{ nickname }}</span>
  </div>
  <img alt="" v-lazy="imgSrc">
  <div class="description">
    <span>{{ description }}</span>
  </div>
  
</template>

<script>
export default {
  props: {
    imgSrc:'',
    description: '',
    playCount: 0,
    nickname: {
      type: String,
      default: null
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.listen {
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(54, 54, 54, 0.2);
  position: absolute;
  top: 10px;
  left: 0;
  color: #fff !important;
  font-size: 12px !important;
  i {
    margin-right: 6px;
  }
  span {
    margin-right: 6px;
  }
}
.nickname {
  width: 100%;
  position: absolute;
  bottom: 35px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  i {
    color: #fff;
    margin-left: 4px;
    margin-right: 4px;
  }
  span {
    width: 80%;
    color: #fff;
    font-size: 12px;
    font-weight: 100;
    letter-spacing: 1px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  margin-top: 10px;
  transition: all 0.3s;
}
.description {
  width: 100%;
  height: 34px;
  display: flex;
  align-items: flex-start;
  span {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow-wrap: break-word;  //强制换行
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp:2; //超出多少行数显示省略号
    font-size: 13px;
    color: #363636;
  }
}
</style>