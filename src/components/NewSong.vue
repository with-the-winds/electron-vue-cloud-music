<!--
 * @Date: 2023-06-14 10:18:53
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-14 11:22:47
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\components\NewSong.vue
-->
<template>
  <span class="rand">{{ index === 9 ? '': 0}}{{ index + 1 }}</span>
  <img alt="" v-lazy="imgUrl">
  <div class="name">
    <span>{{ name }}</span>
    <span>{{ artists }}</span>
  </div>
</template>

<script>
export default {
  props: {
    index: '',
    imgUrl: '',
    name: '',
    artists: ''
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.rand {
  margin-left: 10px;
}
img {
  width: auto;
  height: 80%;
  margin-left: 10px;
}
.name {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 13px;
  margin-left: 10px;
}
</style>