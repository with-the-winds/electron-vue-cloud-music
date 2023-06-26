<!--
 * @Date: 2023-06-13 15:02:22
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-21 14:56:47
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\views\faxian\children\playlist.vue
-->
<template>
  <div style="position: relative;">
    <div ref="selectButton" class="select-tags" @click="toggleDropdown">
      <span>全部</span>
      <i class="iconfont icon-xiangxia"></i>
    </div>

    <div v-if="isDropdownVisible" ref="dropdown" class="dropdown">
      <div 
        class="all-playlist" 
        :class="{'actived': '全部' === activedTags}"
        @click="clickTags('全部')">
        全部歌单
      </div>
      <div class="theme" v-for="item in categories" :key="item.title">
        <div class="title">{{ item.title }}</div>
        <div class="sub">
          <div 
          v-for="subItem in item.sub" 
          :key="subItem.title" 
          :class="{'actived': subItem.title === activedTags}"
          @click="clickTags(subItem.title)">
          {{ subItem.title }}
          </div>
        </div>
      </div>
    </div>

  </div>
  
  <div class="tags">
    <span>热门标签：</span>
    <ul>
      <li
      v-for="(item, index) in tags" 
      :key="index"
      :class="{'actived': item.name === activedTags}"
      @click="clickTags(item.name)">
      {{ item.name }}
    </li>
    </ul>
  </div>
  <div class="playlist">
    <div class="playlist-wrap">
      <ListenTitle
      description="精品歌单精心推荐，给最懂音乐的你"
      :imgSrc="require('@/assets/images/playlist-top.png')">
      </ListenTitle>
    </div>
    <div class="playlist-wrap" v-for="(item, index) in playlist" :key="index">
      <ListenTitle 
      :playCount="item.playCount" 
      :description="item.name" 
      :imgSrc="item.coverImgUrl" 
      :nickname="item.subscribers.map(item => item.nickname).join('/')">
      </ListenTitle>
    </div>
  </div>
</template>

<script>
import { getPlaylist, getHotList, getPlaylistCatlist } from '@/api/faxian';
import ListenTitle from '@/components/ListenTitle.vue';
export default {
  components: {
    ListenTitle
  },
  data() {
    return {
      playlistParmas: {
        order: 'hot',
        cat: '全部',
        limit: 29,
        offset: 1
      },
      playlist: [],
      tags: [],
      categories: [],
      activedTags: '全部',
      isDropdownVisible: false, // 下拉框的显示状态
    }
  },
  created() {
    this.getData()
  },
  mounted() {
    // 监听点击事件，用于关闭下拉框
    window.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    // 移除点击事件监听器
    window.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    // 获取页面的值
    getData() {
      Promise.all([
        getPlaylist(this.playlistParmas),
        getHotList(),
        getPlaylistCatlist()
      ]).then(([{playlists},{tags},{categories,sub}]) => {
        this.playlist = playlists
        this.tags = tags
        for(let key in categories) {
          this.categories.push({
            title: categories[key],
            category: key,
            sub:[]
          })
        }
        sub.forEach(item => {
          this.categories[item.category].sub.push({
            title: item.name
          })
        });
      })
    },
    // 点击下拉框
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible; // 切换下拉框的显示状态
    },
    handleClickOutside(event) {
      // 判断点击事件的目标是否在下拉框内部或按钮内部，如果不在，则关闭下拉框
      if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target) && !this.$refs.selectButton.contains(event.target)) {
        this.isDropdownVisible = false;
      }
    },
    // 点击标签
    async clickTags(tag) {
      this.activedTags = tag
      this.playlistParmas.cat = tag
      const {playlists} = await getPlaylist(this.playlistParmas)
      this.playlist = playlists
    }
  }
}
</script>

<style scoped lang="scss">
.select-tags {
  width: 120px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #f5f5f7;
  cursor: pointer;
  border: 1px solid #575b66;
  span {
    font-size: 12px;
    width: 100px;
    text-align: center;
  }
}
.dropdown {
  position: absolute;
  margin-top: 4px;
  top: 100%; /* 下拉框相对于按钮的位置 */
  left: 0;
  width: 500px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 9999;
  .actived {
    background-color: #c62f2f;
    border-radius: 6px;
  }
  .all-playlist {
    width: 80%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border: 1px solid #b5b7be;
    margin: 0 auto;
    cursor: pointer;
  }
  .theme {
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
    .title {
      width: 120px;
      text-align: center;
      color: #c62f2f;
      font-size: 20px;
    }
    .sub {
      width: 380px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      div{
        width: 95px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
      }
    }
  }
}
.tags {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 24px;
  font-size: 14px;
  padding: 10px 0;
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    li {
      list-style-type: none;
      color: #565656;
      padding: 0 10px;
      height: 24px;
      line-height: 24px;
      cursor: pointer;
    }
    .actived {
      background-color: #c62f2f;
      color: #fff;
      border-radius: 6px;
    }
  }
}
.playlist {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .playlist-wrap {
    width: calc(20% - 10px);
    height: auto;
    position: relative;
    cursor: pointer;
  }
}
</style>