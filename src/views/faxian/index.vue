<!--
 * @Date: 2023-06-12 17:13:51
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-20 18:58:50
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\views\faxian\index.vue
-->
<template>
  <el-scrollbar style="height: 100%;">
    <div class="faxian-list">
      <div 
      v-for="(item, index) in faxianList"
       :key="item.path" 
       @click="clickSubtitle(item.path)"
       :class="{'active' : activeItem === item.path}"
       >{{ item.title }}</div>
    </div>
    <el-divider/>
    <div class="page">
      <RouterView></RouterView>
    </div>
  </el-scrollbar>
</template>

<script>
export default {
  data() {
    return {
      faxianList: [{
        title: '个性推荐',
        path: '/tuijian'
      },{
        title: '歌单',
        path: '/playList'
      },{
        title: '主播电台',
        path: '/dj'
      },{
        title: '排行榜',
        path: '/rank'
      },{
        title: '最新音乐',
        path: '/newSong'
      }],
      activeItem: '/tuijian'
    }
  },
  methods: {
    // 点击标题
    clickSubtitle(path) {
      this.activeItem = path
      this.$router.push(path)
    }
  },
  watch:{
    // 监听路由变化
    $route(route) {
      this.activeItem = route.path
    }
  }
}
</script>

<style scoped lang="scss">
.faxian-list {
  width: calc(100% - 60px);
  height: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  div {
    margin-right: 30px;
    font-size: 14px;
    height: 100%;
    line-height: 30px;
    border-bottom: 2px solid #fff;
    cursor: pointer;
    &:last-child {
      margin: 0;
    }
  }

  .active {
    color: #c62f2f;
    border-bottom: 2px solid #c62f2f;
  }
}
.el-divider {
  margin: 10px 0;
}
.page {
  width: calc(100% - 40px);
  margin: 0 auto;
}
</style>