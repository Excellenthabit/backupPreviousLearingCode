// 导入Vue包
import Vue from 'vue'

// 导入Bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'

// 导入mui
import './lib/mui/css/mui.css'

// 引入全部Mint-UI组件（实际开发中，可能用不到全部的组件，为避免冗余，可以按需引入组件）
// import Mint from 'mint-ui'
// // 导入Mint-UI的样式
// import 'mint-ui/lib/style.css'
// Vue.use(Mint)

// 按需引入部分Mint-UI组件
import { Button,Cell } from 'mint-ui'
// // 导入后通过Vue.component() 注册组件
// Vue.component(Cell.name,Cell)
Vue.component(Button.name,Button)
console.log(Button.name)

// 1.导入vue-router包
import VueRouter from 'vue-router'
// 2.手动引用一下
Vue.use(VueRouter)

// 导入app组件
import app from './App.vue'

// 导入自定义路由模块
import router from './router.js'

import './css/app.css'




var vm = new Vue({
    el:'#app',
    render: c => c(app),
    // render 会把el指定容器中的所有内容都清空覆盖
    // 所以不要把路由的router-view和router-link直接写到el所控制的元素中
    router // 4.将路由对象挂载到vm上
})

// 注意：
// App这个组件是通过vm实例的render函数渲染出来的，render函数如果要渲染组件，只能放到el:'#app'所指定的元素中
// Accou和GoodsList组件，是通过路由匹配监听到的，所以这两个组件只能展示到属于路由的<router-view></router-view> 中去




