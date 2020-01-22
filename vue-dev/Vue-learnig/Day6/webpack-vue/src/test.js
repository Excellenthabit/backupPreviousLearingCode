// 这是Node中向外暴露成员的形式
// module.exports = {}

// 在ES6中，也通过规范的形式，规定了ES6中如何导入和导出模块
// ES6中导入模块，使用import模块名称from '模块标识符' import '表示路径'

// 在ES6 中，使用export default 和export向外暴露成员

var info = {
    name:'foo bar',
    age:'unknow',
    desc:'just for testing'
}

export default info
// 注意： 1. export default向外暴露的成员，可以使用任意的变量来接收 例如：import  test from './test.js';
//       2. 在一个模块中，export default只允许向外暴露一次，否则报错 Only one default export allowed per module.
//       3. 在一个模块中，可以同时使用export default 和export向外暴露成员 

// export default {
//     address:"Xi'an"
// }

export var title = 'Vue.js'
export var content = 'Webpack'
// 注意：
// 在使用export向外暴露的成员，只能使用{}的形式来接收，这种形式叫做 按需导出
// export可以向外暴露多个成员，同时，如果某些成员在import的时候不需要的话，可以不在 {} 中定义
// 使用export导出的成员，必须严格按照导出时候的名称，使用 {} 来按需接收  举例：import  test,{title,content} from './test.js';
// 使用export导出的成员，如果就想换个名称来接收，可以使用as来起别名



// 在node中 使用 var 名称 = require('模块标识符')
// module.exports 和exports来暴露成员