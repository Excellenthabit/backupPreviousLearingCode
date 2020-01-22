<?php 

	// 获取post数据
	$key = $_POST['name'];

	//获取一个value  这里使用关系型数组
	$starArr = array(
					'zdl' => array('images/zdl.jpg','张栋梁，1981年11月29日出生于马来西亚沙捞越州古晋市，祖籍福建，马来西亚歌手、演员。'),

					 'zhj' => array('images/zhj.jpg','周华健（EmilWakinChau），1960年12月22日生于香港西营盘，中国台湾流行乐男歌手、音乐人、演员，毕业于台湾大学。'),

					 'ts' => array('images/ts.jpg','泰勒·斯威夫特（Taylor Swift），1989年12月13日出生于美国宾夕法尼亚州，美国流行音乐、乡村音乐创作型女歌手、音乐制作人、演员、慈善家。')
					);

	// 使用key获取对应的value，这里是一个数组
	$oneStar = $starArr[$key];
    
	//将数组中的两个值都返回给用户
	echo $oneStar[0];
	echo "|";
	echo $oneStar[1];


 ?>