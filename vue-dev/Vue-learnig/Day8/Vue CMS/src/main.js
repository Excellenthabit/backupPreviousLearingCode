
// 导入Vue
import Vue from 'vue'


// 导入vue-router
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

// 导入自定义router.js路由模块
import router from './router.js'

// 导入格式化时间插件 moment
import moment from 'moment';
// 定义去那句的过滤器
Vue.filter('dataStr',function(dataStr, pattern = "YYYY-MM-DD HH:MM:SS"){
    return moment(dataStr).format(pattern);
})


// // 导入vue-resource
import VueResource from 'vue-resource'
// // 安装 vue-resource
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io';


// 导入组件
import app from './App.vue'


// 打入mui的样式
import './lib/mui/css/mui.css'
// 导入扩展图标的样式
import './lib/mui/css/icons-extra.css'

// 按需导入mint-ui组件
import {Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);



let vm = new Vue({
    el:'#app',
    data:{
        msg:"just for testing"
    },
    router, // 挂载路由到vm实例上
    render:c => c(app) // 将app组件渲染到容器里
})


