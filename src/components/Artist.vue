<!--
 * @Date: 2023-06-20 15:14:28
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-25 11:12:31
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\components\Artist.vue
-->
<template>
  <img ref="imgRef" alt="" v-lazy="imgSrc"/>
  <div class="name">{{ name }}</div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default:''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<scoped lang="scss" scoped>
  img {
    width: 100%;
    height: calc(20vw - 50px);
    object-fit: cover;
    object-position: center;
    margin-top: 10px;
    transition: all 0.3s; 
  }
  .name {
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 13px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    margin-bottom: 10px;
  }
</scoped>