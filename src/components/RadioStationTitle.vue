<!--
 * @Date: 2023-06-13 20:51:58
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-14 10:11:49
 * @Description: 主播电台的组件，包含头部的红色标题
 * @FilePath: \electron-vue-cloud-music\src\components\RadioStationTitle.vue
-->
<template>
  <div class="category">{{ category }}</div>
  <img alt="" v-lazy="imgUrl">
  <div class="rcmdtext">{{ rcmdtext }}</div>
  <span class="name">{{ name }}</span>
</template>

<script>
export default {
  props: {
    imgUrl: '',
    category: '',
    rcmdtext: '',
    name: ''
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.category {
  width: auto;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 15px;
  border-radius: 0 0 20px 0;
  background-color: #c62f2f;
  color: #fff;
  font-size: 13px;
  position: absolute;
  top: 0;
  left: 0;
}
.rcmdtext {
  position: absolute;
  box-sizing: border-box;
  left: 0;
  bottom: 38px;
  color: #fff;
  font-size: 12px;
  width: 100%;
  padding-left: 6px;
  padding-right: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
}
.name {
  display: block;
  height: 30px;
  width: 100%;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
  color: #363636;
}
</style>