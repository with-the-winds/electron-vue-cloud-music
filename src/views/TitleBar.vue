<template>
  <div class="title-bar">
    <div class="left-menu">
       <img alt="" src="../assets/images/cloud-logo.png">
       <span class="title">网易云音乐</span>
       <div class="left-page">
        <i class="iconfont icon-xiangzuo"></i>
       </div>
       <div class="right-page">
        <i class="iconfont icon-xiangyou1"></i>
       </div>
       <div class="search-input">
        <i class="iconfont icon-sousuo"></i>
        <input placeholder="周杰伦">
       </div>
       <div class="listen-music">
        <i class="iconfont icon-maikefeng"></i>
       </div>
    </div>
    <div class="right-menu">
      <div class="head-sculpture">
        <i class="iconfont icon-touxiang"></i>
      </div>
      <div class="login-user">
        <span>未登录</span>
        <i class="iconfont icon-xiangxia1"></i>
      </div>
      <i class="iconfont icon-pifu"></i>
      <i class="iconfont icon-shezhi"></i>
      <i class="iconfont icon-youxiang"></i>
      <div class="split-line"></div>
      <i class="iconfont icon-suoxiao1" @click="minimizeClick" title="最小化"></i>
      <i v-show="isMaximize" class="iconfont icon-fangda1" @click="maximizeClick" title="最大化"></i>
      <i v-show="!isMaximize" class="iconfont icon-suoxiao" @click="maximizeClick" title="向下还原"></i>
      <i class="iconfont icon-guanbi1" @click="closeAppClick" title="关闭"></i>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      isMaximize: true
    }
  },
  created() {
    axios({
      method: 'get',
      url: 'http://localhost:9080/cloudsearch?keywords=周杰伦'
    }).then(res => {

    })
  },
  methods: {
    // 最小化
    minimizeClick() {
      window.ipcRenderer.send('minimize-window');
    },
    // 最大化
    maximizeClick() {
      window.ipcRenderer.send('maximize-window')
      this.isMaximize = !this.isMaximize
    },
    // 关闭
    closeAppClick() {
      window.ipcRenderer.send('close-app');
    }
  }
}
</script>

<style scoped lang="scss">
.title-bar {
  width: 100%;
  height: 60px;
  background-color: #EC4141;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .iconfont {
    font-size: 20px;
    color: #EEEED1;
    cursor: pointer;
  }
}
.left-menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  img {
    width: 32px;
    height: 32px;
    margin-left: 20px;
  }
  .title {
    font-size: 18px;
    font-weight: normal;
    color: #fff;
    margin-left: 6px;
  }
  .left-page {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgba(105, 105, 105, 0.2);
    text-align: center;
    line-height: 22px;
    margin-left: 60px;
    .icon-xiangzuo {
      font-size: 14px;
    }
  }
  .right-page {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgba(105, 105, 105, 0.2);
    text-align: center;
    line-height: 22px;
    margin-left: 10px;
    .icon-xiangyou1 {
      font-size: 14px;
    }
  }
  .search-input {
    width: 200px;
    height: 32px;
    border-radius: 16px;
    background-color: rgba(105, 105, 105, 0.2);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 10px;
    .icon-sousuo {
      font-size: 14px;
      margin-left: 10px;
      margin-right: 6px;
    }
    input {
      width: 146px;
      background-color: transparent;
      color: #fff;
      border: none;
      padding: 0;
      font-size: 13px;
      font-weight: normal;
      letter-spacing: 1px;
      &:focus-visible {
        outline: none;
      }
      &::placeholder {
        color: #EEEED1;
        font-size: 13px;
        font-weight: normal;
        letter-spacing: 1px;
      }
    }
    
  }
  .listen-music {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: rgba(105, 105, 105, 0.2);
    text-align: center;
    line-height: 32px;
    margin-left: 10px;
  }
}
.right-menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  .iconfont {
    margin-right: 20px;
  }
  // 头像
  .head-sculpture {
    width: 30px;
    height: 30px;
    background-color: #E0E0E0;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    margin-right: 10px;
    .icon-touxiang {
      margin: 0;
      font-size: 24px;
      color: #fff;
    }
  }
  // 登录/未登录
  .login-user {
    height: 20px;
    font-size: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #EEEED1;
    margin-right: 20px;
    span {
      margin-right: 4px;
    }
    .icon-xiangxia1 {
      font-size: 12px;
      margin: 0;
    }
  }
  .split-line {
    width: 1px;
    height: 16px;
    background-color: #EEEED1;
    margin-right: 20px;
  }
}
</style>