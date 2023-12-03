<?php 
  // echo "var str='123'";
  // echo "foo('123')";
  $cbName=$_GET['callback'];
  $city=$_GET['city'];
  if($city=='beijing'){
    echo $cbName."('北京的天气晴')";
  }else{
    echo $cbName."('没有查询到相关信息')";
  }
 ?>