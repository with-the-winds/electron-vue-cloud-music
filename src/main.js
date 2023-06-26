/*
 * @Date: 2023-06-12 09:59:20
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-20 18:39:55
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 图片懒加载
import VueLazyload from 'vue-lazyload'

import './style/index.scss'

window.ipcRenderer = window.require('electron').ipcRenderer

createApp(App).use(store).use(router).use(ElementPlus).use(VueLazyload).mount('#app')
