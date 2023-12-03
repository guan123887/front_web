<?php 
  $arr=array();
  $arr[0]='zhangsan';
  $arr[1]='lisi';
  $arr[2]='wangwu';
  echo $arr[0];
  echo $arr[1];
  echo $arr[2];

  //以下两种输出复杂字符串
  print_r($arr);
  var_dump($arr);

  echo json_encode($arr); //将数组转换为json格式的字符串

 ?>