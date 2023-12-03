<?php 
  $emailname=$_POST['e'];
  //查询数据库
  if($emailname=='123@qq.com'){
    print 1;
  }else{
    print 0;
  }
 ?>