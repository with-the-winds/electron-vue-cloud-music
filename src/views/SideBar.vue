<!--
 * @Date: 2023-06-12 14:35:19
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-20 19:09:43
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\views\SideBar.vue
-->
<template>
  <div class="side-bar">
    <div class="title">推荐</div>
    <ul>
      <li
      v-for="(item, index) in recommendList"
      :key="item.path" 
      :class="{'active-item': activeMenuitem === item.path}" 
      @click="clickSidebar(item.path)">
        <i :class="['iconfont', item.icon]"></i>
        <span>{{ item.title }}</span>
      </li>
    </ul>
    <div class="title">我的音乐</div>
    <ul>
      <li 
      v-for="(item, index) in myMusicList" 
      :key="item.path"
      :class="{'active-item': activeMenuitem === item.path}" 
      @click="clickSidebar(item.path)">
        <i :class="['iconfont', item.icon]"></i>
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendList: [{
        title: '发现音乐',
        path: '/faxian',
        icon: 'icon-yinle'
      },{
        title: '歌手',
        path: '/singer',
        icon: 'icon-changge'
      },{
        title: '私人FM',
        path: '/private_fm',
        icon: 'icon-diantai'
      },{
        title: '视频',
        path: '/video',
        icon: 'icon-shipinbofang'
      },{
        title: '动态',
        path: '/trends',
        icon: 'icon-dongtai'
      }],
      myMusicList: [{
        title: '本地音乐',
        path: '/localmusic',
        icon: 'icon-yinle1'
      },{
        title: '下载管理',
        path: '/download',
        icon: 'icon-xiazaidaoru'
      },{
        title: '我的音乐云盘',
        path: '/cloudmusic',
        icon: 'icon-yunpan'
      },{
        title: '我的收藏',
        path: '/mycollect',
        icon: 'icon-shoucang'
      }],
      // 点击的菜单
      activeMenuitem: '/faxian'
    }
  },
  methods: {
    clickSidebar(path) {
      this.activeMenuitem = path
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.side-bar {
  box-sizing: border-box;
  width: 200px;
  height: 100%;
  background-color: #f0f2f5;
  border-right: 1px solid 	#D3D3D3;
}
ul, li {
  padding: 0;
  margin: 0;
}
li {
  list-style-type: none;
  padding-left: 25px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-left: 2px solid #f0f2f5;
  cursor: pointer;
  i {
    color: #1C1C1C;
  }
  span {
    font-size: 14px;
    margin-left: 6px;
    letter-spacing: 1px;
  }
  &:hover {
    background-color: #e6e6e6;
    font-weight: bold;
    border-left: 2px solid #ec4141;
  }
}
.active-item {
  background-color: #e6e6e6;
  font-weight: bold;
  border-left: 2px solid #ec4141;
}
.title {
  color: #8485c0;
  font-weight: 100;
  letter-spacing: 1px;
  height: 30px;
  line-height: 30px;
  margin-left: 15px;
  &:first-child{
    margin-top: 10px;
  }
}
</style>