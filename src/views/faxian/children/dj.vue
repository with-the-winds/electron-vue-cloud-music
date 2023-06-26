<!--
 * @Date: 2023-06-13 15:03:01
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-21 14:56:56
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\views\faxian\children\dj.vue
-->
<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(item, index) in banners" :key="index">
      <img alt="" :src="item.pic" style="width: 100%;height: 100%;object-position: center;object-fit: cover;">
    </el-carousel-item>
  </el-carousel>

  <div class="categories">
    <div class="categories-item" v-for="(item, index) in categories" :key="index">
      <img alt="" :src="item.picMacUrl">
      <span>{{ item.name }}</span>
    </div>
  </div>

  <TitleMore title="推荐电台" :ismore="false"></TitleMore>
  <div class="recommend-dj">
    <div class="recommend-wrap" v-for="(item, index) in recommendDj" :key="index">
      <DJImage :imgSrc="item.picUrl" :info="item.copywriter" :sub-info="item.rcmdtext"></DJImage>
    </div>
  </div>

  <!-- 列表 -->
  <div v-for="item in recommendTypeList" :key="item.title">
    <TitleMore :title="item.title"></TitleMore>
    <div class="recommend-dj" >
      <div class="recommend-wrap" v-for="subItem in item.list" :key="subItem.id">
        <DJImage :imgSrc="subItem.picUrl" :info="subItem.name" :sub-info="subItem.desc"></DJImage>
      </div>
    </div>
  </div>
  
</template>

<script>
import { getDjBanner, getDjRecommend, getDjRecommendType, getDjCatelist } from '@/api/faxian';
import TitleMore from '@/components/TitleMore.vue';
import DJImage from '@/components/DJImage.vue';
export default {
  components: {
    TitleMore,
    DJImage
  },
  data() {
    return {
      banners: [],
      categories:[],
      recommendDj: [],
      recommendTypeList: []
    }
  },
  created() {
    this.getBanner()
    this.getRecommend()
    this.getCatelist()
  },
  methods: {
    // 获取轮播图
    getBanner() {
      getDjBanner().then(res => {
        this.banners = res.data
      })
    },
    // 获取推荐列表
    getRecommend() {
      getDjRecommend().then(res => {
        this.recommendDj = res.djRadios.slice(0,5)
      })
    },
    // 获取电台列表(包含各种类型)
    getCatelist() {
      getDjCatelist().then(res => {
        this.categories = res.categories
        //根据前5种类型进行请求
        const cates = res.categories.slice(0,5)
        const promises = []
        cates.forEach(item => {
          this.recommendTypeList.push({
            title: item.name,
            list: []
          })
          promises.push(getDjRecommendType({type: item.id}))
        })
        Promise.all(promises).then(res => {
          res.forEach((item, index) => {
            this.recommendTypeList[index].list = item.djRadios
          })
          console.log(this.recommendTypeList);
        })

      })
    }
  }
}
</script>

<style scoped lang="scss">
// 类别
.categories {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .categories-item {
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    margin-top: 20px;
    img {
      width: 48px;
      height: 48px;
      object-fit: cover;
      object-position:  top left;
      &:hover {
        object-position: top right;
      }
    }
    span {
      font-size: 12px;
      letter-spacing: 1px;
    }
  }
}
// 推荐dj
.recommend-dj {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .recommend-wrap {
    width: calc(20% - 10px);
    height: auto;
    cursor: pointer;
  }
}
</style>