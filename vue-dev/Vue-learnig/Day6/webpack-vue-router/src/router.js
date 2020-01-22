import VueRouter from 'vue-router'
// 导入Account组件
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

// 导入Account的子组件
import login from './main/subcom/login.vue'
import register from './main/subcom/register.vue'

// 3.创建路由对象
var router = new VueRouter({
    routes:[  //路由规则
        {
            path:'/account', 
            component: account,
            children:[  //使用childre实现组件嵌套
                { path:'/login', component:login },
                { path:'/register', component:register }
            ]
        },
        { path:'/goodslist', component: goodslist }
    ]
})

// 这行代码必须要写，不写main.js无法访问到router
export default router