<?php 
	header('content-type:text/html;charset=utf-8');
	// sleep(5);
	// print_r($_FILES);
	
	echo "上传成功";

	//第一个参数：必需。规定要移动的文件。
	//第二个参数：必需。规定文件的新位置。
	//参数2 写的是相对路径，相对于该php文件的file文件夹
	move_uploaded_file($_FILES['picture']['tmp_name'], 'files/'.$_FILES['picture']['name']);
 ?>