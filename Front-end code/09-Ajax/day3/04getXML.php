<?php 
	//设置返回的为xml
	header('content-type:text/xml; charset= utf-8');
	// 读取xml文件并返回
	echo file_get_contents('04-starInfo.xml');

 ?>