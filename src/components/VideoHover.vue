<!--
 * @Date: 2023-06-14 09:05:34
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-20 18:42:37
 * @Description: 独家放送，鼠标移动上去会有下拉标题和播放按钮
 * @FilePath: \electron-vue-cloud-music\src\components\VideoHover.vue
-->
<template>
  <img alt="" v-lazy="imgUrl">
  <span class="name">{{ name }}</span>
</template>

<script>
export default {
  props: {
    imgUrl: '',
    name: ''
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
}

.name {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow-wrap: break-word;  //强制换行
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp:2; //超出多少行数显示省略号
  font-size: 13px;
  color: #363636;
}
</style>