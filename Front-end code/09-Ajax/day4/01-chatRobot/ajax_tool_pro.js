//ajax get五部曲
function ajax_get(url,data){
	//定义异步对象
	var ajax=new XMLHttpRequest();
	//url方法 如果是get发送数据，发送的格式为xxx.php?name=nicholas&age=22 这种的话，需要拼接url
	if (data) {
		//如果有值 需要拼接字符串
		// 拼接为xxx.php?name=nicholas&age=22
		url += '?';
		url += data;
	}else{

	}
	ajax.open('get',url);

	//发送
	ajax.send();

	//注册事件
	ajax.onreadystatechange=function () {
		//在事件中 获取数据并修改界面显示
		if (ajax.readyState==4 && ajax.status==200) {
			console.log(ajax.responseText);
		}
	}
}




// ajax post五部曲
function ajax_post(url,data) {
	//定义异步对象
	var ajax=new XMLHttpRequest();
	ajax.open('post',url);
	//设置请求报文
	ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');

	//发送
	if (data) {
		//如果有值post请求是在send中发送给服务器
		ajax.send(data);
	}else{
		ajax.send();
	}
		//注册事件
	ajax.onreadystatechange=function () {
		//在事件中 获取数据并修改界面显示
		if (ajax.readyState==4 && ajax.status==200) {
			console.log(ajax.responseText);
		}
	}
}


// 将 get 跟post 封装到一起
/*
	参数1:url
	参数2:数据
	参数3:请求的方法
	参数4:数据成功获取以后 调用的方法
*/
function ajax_tool(url,data,method,success) {
	//定义异步对象
	var ajax = new XMLHttpRequest();
	//get和post需要分别写不同的的代码
	if (method=='get') {
		//get请求
		if (data) {
			//如果data有值
			url += '?';
			url += data;
		}else{

		}
		//设置方法以及url
		ajax.open(method,url);

		//send即可
		ajax.send();

	}else{
		//post请求
		//post请求 url是不需要改变的
		ajax.open(method,url);
		
		//设置请求报文
		ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');

		//判断data send发送数据
		if (data) {
			// 如果有data值 从send发送
			ajax.send(data);
		}else{
			//没有值，直接发送即可
			ajax.send();
		}
	}

	//注册事件
	ajax.onreadystatechange=function () {
		if (ajax.readyState==4 && ajax.status==200) {
			// console.log(ajax.responseText);
			// 如果说外面可以传进来一个function作为参数success,那么外面的才可以使用此数据
			success(ajax.responseText);
		}
	}

}



// 将工具函数进行优化，直接收一个参数对象
/*
	参数1:url
	参数2:数据
	参数3:请求的方法
	参数4:数据成功获取以后 调用的方法
*/
function ajax_tool_pro(option) {
	//定义异步对象
	var ajax = new XMLHttpRequest();
	//get和post需要分别写不同的的代码
	if (option.method=='get') {
		//get请求
		if (option.data) {
			//如果data有值
			option.url += '?';
			option.url += option.data;
		}else{

		}
		//设置方法以及url
		ajax.open(option.method,option.url);

		//send即可
		ajax.send();

	}else{
		//post请求
		//post请求 url是不需要改变的
		ajax.open(option.method,option.url);
		
		//设置请求报文
		ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');

		//判断data send发送数据
		if (option.data) {
			// 如果有data值 从send发送
			ajax.send(option.data);
		}else{
			//没有值，直接发送即可
			ajax.send();
		}
	}

	//注册事件
	ajax.onreadystatechange=function () {
		if (ajax.readyState==4 && ajax.status==200) {
			// console.log(ajax.responseText);
			// 如果说外面可以传进来一个function作为参数success,那么外面的才可以使用此数据
			option.success(ajax.responseText);
		}
	}

}


