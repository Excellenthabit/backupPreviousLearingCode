<?php 

	header('content-type:text/html;charset=utf-8');
	//模拟用户数据
	$personArr = array(
		'fdq' =>array('name'=>'fdq','age'=>'22','skill'=>'handsome') ,
		'lhh' =>array('name'=>'lhh','age'=>'22','skill'=>'beautiful') ,
		'zdl' =>array('name'=>'zdl','age'=>'37','skill'=>'唱歌') 
		 );
	//通过post获取提交的数据key为name
	$key = $_POST['name'];

	//从数组中获取对应的用户数据
	print_r($personArr[$key]);

	//将获取到的数据保存到变量中方便使用
	$onePeron = $personArr[$key];

	//拼接成对应的html内容返回给用户
	echo '<p>'.$onePeron['name'].'欢迎你</p>';
	echo '<p>unbelievable，你才'.$onePeron['age'].'岁</p>';
	echo '<p>奈斯，你竟然掌握了'.$onePeron['skill'].'技能</p>';

 ?>