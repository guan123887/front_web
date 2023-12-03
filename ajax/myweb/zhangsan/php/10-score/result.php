<!-- 根据学生的考号查询数据库，得到数据之后进行返回 -->
 <!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <title>Document</title>
     <style type="text/css">
    ul{
      list-style: none;
      color: red;
    }

    .title{
      font-size: 20px;
    }
  </style>
 </head>
 <body>
  <?php 
  //准备模拟数据，注意的是，根据道理数据应该是从数据库获取的，这里进行简单的处理。
  $data=array();
  $data['123']=array('name'=>'张三','Chinese'=>'103','math'=>'89','english'=>'143');
  $data['234']=array('name'=>'李四','Chinese'=>'87','math'=>'98','english'=>'123');
  $data['345']=array('name'=>'王五','Chinese'=>'143','math'=>'66','english'=>'47');
  $code=$_GET['code'];
 ?> 

 <?php 
 //判断code是否在data里有此下标
  if(array_key_exists($code,$data)){
      $result=$data[$code];
  ?>
 <div>
   <div class="title"><?php echo $result['name'] ?>成绩如下:</div>
   <ul>
     <li>语文:<?php echo $result['Chinese'] ?>分</li>
     <li>数学:<?php echo $result['math'] ?>分</li>
     <li>语文:<?php echo$result['english'] ?>分</li>
   </ul>
 </div>
 <?php 
  }else{


  ?>
  <div>该学生考号不存在</div>
  <?php 
  }
   ?>
 </body>
 </html>