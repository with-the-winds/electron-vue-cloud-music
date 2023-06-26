<template>
  <img alt="" v-lazy="imgSrc">
  <div class="info">
    <span>{{ info }}</span>
  </div>
  <div class="sub-info">
    <span>{{ subInfo }}</span>
  </div>
</template>

<script>
export default {
  props: {
    info: '',
    subInfo: '',
    imgSrc: ''
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  margin-top: 10px;
  border-radius: 10px;
}
.info {
  width: 100%;
  height: 24px;
  line-height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  letter-spacing: 1px;
  font-size: 14px;
}
.sub-info {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  letter-spacing: 1px;
  font-size: 12px;
  color: #999999;
}
</style>