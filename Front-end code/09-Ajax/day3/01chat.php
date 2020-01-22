<?php
      header('content-type:text/html;charset=utf-8');
      sleep(1);
      //根据发送过来的消息返回不停的内容
      $messageList = array(
        '你好吗？',
        '你吃饭了吗？',
        '老地方见',
        '再不疯狂青春就荒了',
        '好久不见，别来无恙'
       );

       //从数组中每次随机取出
       //array_rand 返回的是一个随机的下标
       $randomKey = array_rand($messageList);

       //使用随机下标 返回随机的值
       echo $messageList[$randomKey];


?>