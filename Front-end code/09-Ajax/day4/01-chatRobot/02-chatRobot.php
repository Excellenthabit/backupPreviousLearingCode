<?php 
	
	//获取用户数据
	$message = $_POST['message'];
	//switch
	// 每一次的随机都是先读取json文件str
	/*json_decode()   str->php数组
	获取随机的key   array_rand()
	通过随机的key返回对应的值  echo $arr[$key]*/

	switch ($message) {
		case '你好':
			//读取json文件
			$jsonStr = file_get_contents('chatRobot.json');
			//str->php数组
			$chatArr = json_decode($jsonStr);
			//随机key
			$randomKey = array_rand($chatArr,1);
			//返回key对应的值
			echo $chatArr[$randomKey];
			break;
		
		default:
			echo "两开花，两开花。。。";
			break;
	}
	

 ?>