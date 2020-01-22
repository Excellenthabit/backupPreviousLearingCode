// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入axios
import axios from 'axios'
Vue.prototype.$axios = axios

// 导入ant-design-vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

// 导入bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import 'jquery'
import "../src/assets/font/iconfont.css"//整个应用引入iconfont

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  // template: '<App/>'
  render: h => h(App)
})
