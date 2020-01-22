// main.js是项目的js入口文件
// 注意：如果要引入css、less、sass文件，都要在main.js里面导入，否则处理不到

// 导入jquery
import $ from 'jquery'

//导入css文件
import '../css/style.css'

// 导入less文件
import '../css/style.less'

// 导入scss文件
import '../css/style.scss'

// 如果通过路径的形式去引入node_modules中相关的文件，可以直接省略路径前面的 node_modules这一层目录，
// 直接写包的名称，然后后面跟上具体的文件路径
// 不写node_modules这一层目录，默认就会去node_modules中查找

//导入bootstrap
import 'bootstrap/dist/css/bootstrap.css'


$(function(){
    $('li:odd').css('backgroundColor','orange')
    $('li:even').css('backgroundColor','skyblue')
})

// class关键字，是ES6中提供的新语法，是用来实现ES6中面向对象编程的方式
class Person{
    // 使用static关键字，可以定义静态属性
    // 所谓静态属性，就是可以直接通过类名，直接访问的属性
    // 实例属性：只能通过类的实例来访问的属性，叫做实例属性
    static info = { name:'nicholas fung',age:'23' }
}

// 访问Person类身上的info静态属性
console.log(Person.info)

// 在webpack中默认只能处理一部分ES6的新语法，一些更高级的ES6语法或者ES7语法，webpack是处理不了的
// 这时候就要借助第三方的loader，来帮助webpack处理这些高级的语法，当第三方loader把高级语法转为低级语法之后，
// 就会把结果交给webpack去打包到 bundle.js中
// 使用babel可以把高级的语法转换为低级的语法 
// 1. 在 webpack 中，可以运行如下两套命令，安装两套包，去安装 Babel 相关的loader功能：
// 1.1 第一套包： cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
// 1.2 第二套包： cnpm i babel-preset-env babel-preset-stage-0 -D
// 2. 打开 webpack 的配置文件，在 module 节点下的 rules 数组中，添加一个 新的 匹配规则：
// 2.1 { test:/\.js$/, use: 'babel-loader', exclude:/node_modules/ }
// 2.2 注意： 在配置 babel 的 loader规则的时候，必须 把 node_modules 目录，通过 exclude 选项排除掉：原因有俩：
// 2.2.1 如果 不排除 node_modules， 则Babel 会把 node_modules 中所有的 第三方 JS 文件，都打包编译，这样，会非常消耗CPU，同时，打包速度非常慢；
// 2.2.2 哪怕，最终，Babel 把 所有 node_modules 中的JS转换完毕了，但是，项目也无法正常运行！
// 3. 在项目的 根目录中，新建一个 叫做 .babelrc  的Babel 配置文件，这个配置文件，属于JSON格式，所以，在写 .babelrc 配置的时候，必须符合JSON语法规范： 不能写注释，字符串必须用双引号
// 3.1 在 .babelrc 写如下的配置：  大家可以把 preset 翻译成 【语法】 的意思
        // {
        //   "presets": ["env", "stage-0"],
        //   "plugins": ["transform-runtime"]
        // }