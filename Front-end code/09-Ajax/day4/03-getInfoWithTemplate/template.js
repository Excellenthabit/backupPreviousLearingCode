function template(str,obj) {
	// 准备正则，匹配至少一个字母
	var reg = /\w+/;

	//准备好挖坑的字符串
	var str = str;

	//准备好填坑的对象
	var obj = obj;

	//首先使用正则对象  验证一次字符串while会看result是否有值
	var result;
	while(result = reg.exec(str)){
		//获取匹配的key
		var key = result[0];
		//通过key获取value
		var value = obj[key];

		//替换
		str = str.replace(key,value);
	}

	//执行完毕  说明替换完成了
	return str;
}


//正则写的专业一点
//希望查找的东西是age
function template_pro(str,obj) {
	// 准备正则，匹配至少一个字母
	// 正则的开始是{{        结束是}}
	// 中间的小括号可以对正则筛选出来的字符串再次筛选
	var reg = /{{(\w+)}}/;

	//准备好挖坑的字符串
	var str = str;

	//准备好填坑的对象
	var obj = obj;

	//首先使用正则对象  验证一次字符串while会看result是否有值
	var result;
	while(result = reg.exec(str)){
		//获取匹配的key
		var key = result[1];
		//通过key获取value
		var value = obj[key];

		//替换
		str = str.replace(result[0],value);
	}
	//执行完毕  说明替换完成了
	return str;

}