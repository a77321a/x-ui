/*
 * @Descripttion: 入口
 * @Author: 辛顺宁
 * @Date: 2019-12-29 17:02:27
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2019-12-29 17:17:15
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import xsnUI from '../packages/index.js'
Vue.use(xsnUI)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})