<template>
  <div class="title-more">
    <span class="title">{{ title }}</span>
    <div v-if="ismore" class="more" @click="$emit('clickMore')">
      <span>更多</span>
      <i class="iconfont icon-xiangyou1"></i>
    </div>
  </div>
  <div class="divider"></div>
</template>

<script>
export default {
  props: {
    title: '',
    ismore: {
      type: Boolean,
      default: true
    }
  },
  emits:['clickMore'],
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.title-more {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #606266 !important;
  padding: 10px 0;
  margin-top: 20px;
  .title {
    font-size: 20px;
  }
  .more {
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      font-size: 14px;
    }
    i {
      font-size: 13px;
    }
  }
}
.divider {
  width: 100%;
  height: 1px;
  background-color: rgba(54, 54, 54, 0.2);
}
</style>