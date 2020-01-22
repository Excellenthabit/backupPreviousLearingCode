<?php   
		sleep(3);//让服务器休息3s，让临时文件过s后再删除，方便查看临时文件
		print_r($_FILES); //返回数组，显示所上传文件的相关信息
		// Array ( [picture] => Array ( [name] => zdl.jpg [type] => image/jpeg [tmp_name] => D:\wamp\tmp\phpB3F.tmp [error] => 0 [size] => 24570 ) )
 ?>