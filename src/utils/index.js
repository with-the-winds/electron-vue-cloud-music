/*
 * @Date: 2023-06-21 10:34:22
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-21 10:48:38
 * @Description: 头部注释
 * @FilePath: \electron-vue-cloud-music\src\utils\index.js
 */

/**
 * 毫秒转 mm:ss
 * @param {*} millisecond 
 * @returns 
 */
export function milsecTomin(millisecond) {
  if (!millisecond) return '';
  let mm = '00'
  let ss = '00'
  const MM = parseInt(millisecond / 60000)
  const SS = parseInt(millisecond / 1000) % 60
  mm = MM < 10 ? '0' + MM : MM
  ss = SS < 10 ? '0' + SS : SS
  return mm + ' : ' + ss
}