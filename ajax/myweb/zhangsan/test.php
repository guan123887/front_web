<?php 
  header("Content-Type: text/html;charset=utf-8");
  $str=array();
  $message=array('tips'=>'加','phonefrom'=>'中国电信');
    $str[0]=array('status'=>0,'message'=>$message);
    echo json_encode($str[0],JSON_UNESCAPED_UNICODE);
    $str[1]=array('status'=>1,'message'=>'你好');
    echo json_encode($str[1],JSON_UNESCAPED_UNICODE);
 ?>