<!--
 * @Date: 2023-06-12 09:59:20
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-20 18:26:39
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\App.vue
-->
<template>
  <TitleBar></TitleBar>
  <div class="app-content">
    <SideBar></SideBar>
    <view class="render-content">
      <RouterView></RouterView>
    </view>
  </div>
  <BottomBar></BottomBar>
</template>

<script>
import TitleBar from './views/TitleBar.vue';
import SideBar from './views/SideBar.vue'
import BottomBar from './views/BottomBar.vue';
export default {
  components: {
    TitleBar,
    BottomBar,
    SideBar
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
}
ul, li {
  margin: 0;
  padding: 0;
  user-select: none;
}
div {
  user-select: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app-content {
  width: 100%;
  height: calc(100vh - 140px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .render-content {
    width: calc(100% - 200px);
    height: 100%;
    position: relative;
  }
}
</style>
