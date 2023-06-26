/*
 * @Date: 2023-06-12 09:59:20
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-12 15:34:04
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\vue.config.js
 */
const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()]
  }
})
