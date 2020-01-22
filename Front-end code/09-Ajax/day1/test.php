<?php 

  //header()函数 用来向客户端(浏览器)发送报头,如果出现中文无法显示,可以尝试在PHP代码顶部添加 如下代码
	header('content-type:text/html;charset=utf-8');

  //设置页面跳转
  // header('location:http://cn.bing.com');

  //设置页面间隔刷新
  // header('refresh:3;url=http://cn.bing.com');




  // 1.注释
  // 双竖线是单行注释

  /*
    多行注释，
    由此可知，php注释的写法和js的注释写法一致。
  */

  //2.php变量规则
  // 变量以$符号开头，其后是变量的名称
  // 变量名称必须是以字母或下划线开头
  // 变量名不能以数字开头
  // 变量名只能包含字母数字字符和下划线（A-z、0-9以及_）
  // 变量名对大小写敏感

  //定义数字
  $num=1;
  echo "$num";
  echo "<br>";

  //浮点数
  $a=3.14159;
  echo "$a";
  echo "<br>";

  // 定义布尔值
  $bool1=true;
  $bool2=false;  
  echo "$bool1";
  echo "<br>";
  echo "$bool2";
  echo "<br>";

  // 定义字符串时需要注意:
  // 单引号:`` 内部的内容只是作为字符串
  // 双引号:"" 如果内部是PHP的变量,那么会将该变量的值解析
  $fdq='nicholasfung';
  echo'$fdq'; //$fdq，说明单引号会把里面的所有内容当作字符串输出
  echo "<br>";//换行
  echo "$fdq";//nicholasfung，说明双引号才能识别$,才能识别变量
  echo "<br>"; 

  //定义数组
  $arr = array('张栋梁','张杰','张韶涵','陈奕迅','Taylor Swift');
  echo "$arr[4]";
  echo "<br>";




  for ($i=0; $i <10 ; $i++) { 
      echo "我才22岁，可我好累，睡不好。。。"; 
      echo "<br>"; 
  }

  $i=0;
  while ($i <= 10) {
    echo "hello world";
     echo "<br>";
     $i++;
  }



  // 字符串连接:不同于JavaScript,PHP中使用.进行连接
  echo "$fdq.hello world"; //nicholasfung.hello world
  echo "<br>";


  function sayHi()
  {
    echo "Hello World";
  }

  sayHi();
  echo "<br>";

 /* echo"username:".$_GET['username']."<br>";
  echo"password:".$_GET['password']."<br>";
  echo"sex:".$_GET['gender']."<br>";*/

  echo"username:".$_POST['username']."<br>";
  echo"password:".$_POST['password']."<br>";
  echo"sex:".$_POST['gender']."<br>";
  
 ?>