<?php 
  $phonename=$_POST["p"];
  if($phonename=="1732"){
    echo '{"status":1,"message":"手机号已被使用"}';
  }else{
    echo '{"status":0,"message":{"tips":"手机号可用","phonefrom":"中国电信"}}';
  }
 ?>