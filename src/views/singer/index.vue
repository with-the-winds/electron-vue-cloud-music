<!--
 * @Date: 2023-06-20 19:08:07
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-25 09:24:48
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\views\singer\index.vue
-->
<template>
  <div class="singer">
    <el-scrollbar style="height: 100%;">
      <div class="nav-bar">
        <span class="nav-title">语种：</span>
        <ul>
          <li v-for="item in languages" :key="item.value">
            <span :class="{'actived': params.area === item.value}" @click="handleParams('语种', item.value)">{{ item.label }}</span>
          </li>
        </ul>
      </div>
      <div class="nav-bar">
        <span class="nav-title">分类：</span>
        <ul>
          <li v-for="item in cates" :key="item.value">
            <span :class="{'actived': params.type === item.value}" @click="handleParams('分类', item.value)">{{ item.label }}</span>
          </li>
        </ul>
      </div>
      <div class="nav-bar">
        <span class="nav-title">筛选：</span>
        <ul>
          <li v-for="item in initials" :key="item.value">
            <span :class="{'actived': params.initial === item.value}" @click="handleParams('筛选', item.value)">{{ item.label }}</span>
          </li>
        </ul>
      </div>
      <div class="artist-list">
        <div class="artist-wrap" v-for="item in list" :key="item.id">
          <Artist :img-src="item.picUrl" :name="item.name"></Artist>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import { getArtistList } from '@/api/singer'
import Artist from '@/components/Artist.vue'

export default {
  components: {
    Artist
  },
  data() {
    return {
      // 语种
      languages: [{
        label: '全部',
        value: -1
      },{
        label: '华语',
        value: 7
      },{
        label: '欧美',
        value: 96
      },{
        label: '日本',
        value: 8
      },{
        label: '韩国',
        value: 16
      },{
        label: '其他',
        value: 0
      }],
      // 分类
      cates: [{
        label: '全部',
        value: -1
      },{
        label: '男歌手',
        value: 1
      },{
        label: '女歌手',
        value: 2
      },{
        label: '乐队',
        value: 3
      }],
      // 筛选
      initials: [{
        label: '热门',
        value: -1
      },{
        label: 'A',
        value: 'a'
      },{
        label: 'B',
        value: 'b'
      },{
        label: 'C',
        value: 'c'
      },{
        label: 'D',
        value: 'd'
      },{
        label: 'E',
        value: 'e'
      },{
        label: 'F',
        value: 'f'
      },{
        label: 'G',
        value: 'g'
      },{
        label: 'H',
        value: 'h'
      },{
        label: 'I',
        value: 'i'
      },{
        label: 'J',
        value: 'j'
      },{
        label: 'K',
        value: 'k'
      },{
        label: 'L',
        value: 'l'
      },{
        label: 'M',
        value: 'm'
      },{
        label: 'N',
        value: 'n'
      },{
        label: 'O',
        value: 'o'
      },{
        label: 'P',
        value: 'p'
      },{
        label: 'Q',
        value: 'q'
      },{
        label: 'R',
        value: 'r'
      },{
        label: 'S',
        value: 's'
      },{
        label: 'T',
        value: 't'
      },{
        label: 'U',
        value: 'u'
      },{
        label: 'V',
        value: 'v'
      },{
        label: 'W',
        value: 'w'
      },{
        label: 'X',
        value: 'x'
      },{
        label: 'Y',
        value: 'y'
      },{
        label: 'Z',
        value: 'z'
      },{
        label: '#',
        value: 0
      }],
      params: {
        area: -1,
        type: -1,
        initial: -1
      },
      list: []
    }
  },
  mounted() {
    this.getSingers()
  },
  methods: {
    // 获取歌手列表
    getSingers() {
      getArtistList(this.params).then(res => {
        this.list = res.artists
      }) 
    },
    // 点击参数
    handleParams(paramsType, value) {
      if (paramsType === '语种') {
        this.params.area = value
      } else if (paramsType === '分类') {
        this.params.type = value
      } else {
        this.params.initial = value
      }
      this.getSingers()
    }
  }
}
</script>

<style scoped lang="scss">
.singer {
  width: 100%;
  height: 100%;
  position: relative;
  .nav-bar {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    color: #333333;
    font-size: 13px;
    font-weight: 100;
    .nav-title {
      width: 60px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
    ul {
      width: calc(100% - 60px);
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      li {
        width: 60px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        span {
          padding: 4px 6px;
          border-radius: 10px;
        }
        .actived {
          color: #ec4141;
          background-color: #fef5f5;
        }
      }
    }
  }
  .artist-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .artist-wrap {
      position: relative;
      width: calc(20% - 10px);
      margin-right: 10px;
    }
  }
}
</style>