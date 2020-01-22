//webpack 是node写出来的 用node的写法
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
	optimization:{ //优化项
		minimizer:[
			new UglifyJsPlugin({
				cache:true,    //是否缓存
				parallel:true, //是否开启并行打包
				sourceMap:true //源码映射
			}),
			new OptimizeCssAssetsWebpackPlugin()			
		]
	},

	devServer:{ //开发服务器配置
		port:8080, //指定端口
		progress:true, //开启进度条
		contentBase:'./build', //指定静态目录
		compress:true   //开启自动压缩
	},

	// mode:'production', //模式，两种，一种是production（不写mode默认为production，压缩代码） 一种是development（不压缩代码）
	mode:'development',

	entry:'./src/index.js',  //入口

	output:{ //输出
		filename:'bundle.js', //打包后的文件名
		path:path.resolve(__dirname,'build'), //路径必须是一个绝对路径
	},

	plugins:[//数组 放着所有的webpack插件（plugin）
		new HtmlWebpackPlugin({
			template:'./src/index.html',//模板
			filename:'index.html', //打包后的文件名字
			// minify:{//最小化操作
			// 	removeAttributeQuotes:true,//删除属性的双引号
			// 	collapseWhitespace:false,    //折叠空行
			// },
			// hsah:true  //哈希戳
		}),

		new MiniCssExtractPlugin({
			filename:'main.css',
		})
	],

	module:{//模块
		//loadder
		rules:[ //规则  css-loader 解析@import这种语法的
				// style-loader 它是把css插入到head标签中
				// loader的特点：希望单一
				//loader的用法：字符串只用一个loader,多个loader需要用数组[]
				//loader的顺序：默认是从右向左执行
				//loader还可以写成对象方式，优点就是多传参数

			//处理css文件
			{
				test:/\.css$/,
				use:[
					// {
					// loader:'style-loader',
					// options:{
					// 	insertAt:'top' //插入到header的顶部
					// }
					// },

				MiniCssExtractPlugin.loader,  //将css抽离到main.css,下面的less文件同理
				'css-loader' //解析@import这种语法
				]
			},

			//处理less文件，依次类推 sass、stylus
			{
				test:/\.less$/,
				use:[
					// {
					// loader:'style-loader',
					// options:{
					// 	insertAt:'top' //插入到header的顶部
					// }
					// },

				MiniCssExtractPlugin.loader,
				'css-loader',   //解析@import这种语法
				'less-loader'  //把less转换成css
				]
			},

			//处理js文件
			{
				test:/\.js$/,
				use:{
					loader:'babel-loader',
					options:{//使用babel-loader,需要把es6转换成es5
						presets:[
							'@babel/preset-env'
						]
					}
				}
			}
		]
	}

}