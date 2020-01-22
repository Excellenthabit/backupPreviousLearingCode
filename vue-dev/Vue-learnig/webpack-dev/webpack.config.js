// 导入处理管理路径的模块
let path = require('path');

//导入html-webpack-plugin插件 不用在html文件中引入js，这个插件会自动把js文件注入到html文件中
let htmlWebpackPlugin = require('html-webpack-plugin');

// 方法2：实现自动打开浏览器、热更新和配置浏览器的默认端口  2.2
let webpack = require('webpack');






// 导出一个配置对象，将来webpack在启动的时候，会默认查找webpack.config.js，
// 并读取这个文件中导出的配置对象，来进行打包处理
module.exports = {
    // 实现自动打开浏览器、热更新和配置浏览器的默认端口
    // 方法1：在package.json里的script中添加  "dev": "webpack-dev-server --hot --port 6800 --open"
    // 方法2：2.1 在webpack.config.js添加如下代码
    devServer:{
        hot:true,
        open:true,
        port:6800
    },

    mode:'development', // webpack模式  development 或者 production 或者 none
    // entry:'./src/main.js', // 项目入口文件
    entry:path.resolve(__dirname,'src/js/main.js'),

    output:{ // 配置输出选项
        path:path.resolve(__dirname,'dist'), // 配置输出的路径
        filename:'bundle.js' // 配置输出的文件名
    },

    plugins:[ //专门用来存放插件以及配置插件
        new htmlWebpackPlugin({
            template:path.resolve(__dirname,'src/index.html'), //模板路径
            filename:'index.html' //自动生成的html文件名称
        }),
        // 方法2：实现自动打开浏览器、热更新和配置浏览器的默认端口  2.3
        new webpack.HotModuleReplacementPlugin()
    ],

    module:{ // 用来配置第三方loader模块的
        rules:[ //文件的匹配规则
            // 注意：1、use表示使用哪些模块来处理test所匹配到的文件；
            //      2、use中相关的loader模块的调用规则的调用顺序是从后向前调用的
            { test:/\.css$/, use:[ 'style-loader','css-loader' ] }, //处理.css文件
            { test:/\.less$/, use:[ 'style-loader','css-loader','less-loader'] },  //处理.less文件
            { test:/\.scss$/, use:[ 'style-loader','css-loader','sass-loader'] },  //处理.scss文件  注意：sass的后缀名是.scss
            { test:/\.(png|jpg|gif|jpeg|bmp)$/, use:"url-loader?limit=43960" }, //处理url路径的loader模块，可以通过limit指定进行base64编码的图片大小，只有小于指定字节（byte）的图片才会进行base64编码
            { test:/\.js$/, use:'babel-loader',exclude: /node_modules/ }
        ]
    }

}
