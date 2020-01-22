import VueRouter from 'vue-router'

// 导入对应的路由
import HomeContainer from './components/tarbar/HomeContainer.vue'
import MemberContainer from './components/tarbar/MemberContainer.vue'
import ShoppingCarContainer from './components/tarbar/ShoppingCarContainer.vue'
import SearchContainer from './components/tarbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'


var router = new VueRouter({
    routes:[  //路由规则
        { path:'/', redirect:'/home' },
        { path:'/home', component:HomeContainer },
        { path:'/member', component:MemberContainer },
        { path:'/shoppingcar', component:ShoppingCarContainer },
        { path:'/search', component:SearchContainer },
        { path:'/home/newslist', component:NewsList },
        { path:'./home/newsinfo/:id', component:NewsInfo }
    ],
    linkActiveClass:'mui-active'  // 覆盖了默认高亮路由的类，默认的类叫做router-link-active
})

// 把路由对象暴露出去
// 这行代码必须要写，不写main.js无法访问到router
export default router