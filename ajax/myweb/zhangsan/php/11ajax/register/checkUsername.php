<?php 
  $username=$_GET['username'];
  //查询数据库
  if($username=='zhangsan'){
    echo 'username exist';
  }else{
    echo "username ok";
  }
 ?>