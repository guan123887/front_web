<?php 
  sleep(5);
  $username=$_GET['username'];
  //查询数据库
  if($username=='zhangsan'){
    echo 'error';
  }else{
    echo "ok";
  }
 ?>