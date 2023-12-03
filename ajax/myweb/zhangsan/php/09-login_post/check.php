<?php 
  // echo 'checkUsername';
  $username=$_POST['username'];
  $password=$_POST['password'];

  //按道理来说,这里面的代码应该要查询数据库
  if($username=='admin'&&$password=='123'){
    echo 'Login success';
  }else{
    echo 'Login Failed';
  }
 ?>