<?php 
  $arr=array('zhangsan','lisi','����');
  print_r($arr);
  var_dump($arr);
  $result=json_encode($arr);
  $count=count($arr);

  $addResult=add(10,20);
  echo '������Ϊ'.$addResult;
  echo json_encode('���');
  function add($num1,$num2){
    return $num1+$num2;
  }
 ?>