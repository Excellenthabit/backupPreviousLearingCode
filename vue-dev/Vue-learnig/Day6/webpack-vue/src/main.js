// 项目入口文件
console.log('OJBK');
// 在普通网页中使用Vue
// 1.使用script标签，引入vue的包
// 2.在index页面中 ，创建一个id为app的容器
// 3.通过new Vue得到一个vm的实例

// just for testing babel-loader
class Person{
    static info = {name:'fdq',age:22}
}
console.log(Person.info);


// 在webpack 中尝试使用 Vue：

// 注意： 在 webpack 中， 使用 import Vue from 'vue' 导入的 Vue 构造函数，
// 功能不完整，只提供了 runtime-only 的方式，并没有提供 像网页中那样的使用方式；
import Vue from 'vue';  // 只提供了runtime-only的方式，功能不不齐全
// import Vue from 'vue/dist/vue';  // 导入功能齐全的Vue包
// var login = {
//     template:'<h1>webpack中使用Vue</h1>'
// }

import login from './login.vue';
// var Vue = require('vue'); //这一行配合 webpack.config.js中的	
// // resolve:{
// //     alias:{ // 修改Vue被导入时候的包路径
// //         "vue$": "vue/dist/vue.js"
// //     }
// // }来使用


var vm = new Vue({
    el:'#app',
    data:{
        msg:'main.js中的data数据'
    },
    // components:{
    //     login
    // }
    // render:function(createElements){
    //     return createElements(login);
    // }
    render: c => c(login)
})


import  test,{title as title666,content} from './test.js';
console.log(test)
console.log(title666)
console.log(content)
