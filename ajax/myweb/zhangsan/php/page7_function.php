<?php 
  $arr=array('zhangsan','lisi','王五');
  print_r($arr);
  var_dump($arr);
  $result=json_encode($arr);
  $count=count($arr);

  $addResult=add(10,20);
  echo '计算结果为'.$addResult;
  echo json_encode('你好');
  function add($num1,$num2){
    return $num1+$num2;
  }
 ?>