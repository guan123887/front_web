<?php    //在php中，获取一个链接中的数据
  //设置编码
  /*header('Content-Type:text/plain; charset=utf-8');
  //使用curl进行网络数据访问
  $ch=curl_init();
  //网络访问的url地址
  $school=$.GET['school']
  $url=' 
https://api.yonyoucloud.com/apis/dst/collegeInfoQuery/collegeInfoQuery?apicode=ae79109248d14d93bd69b228250bac51&name='.$school;
  //网络访问的url地址
  curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
  //执行HTTP请求
  curl_setopt($CH,CURLOPT_URL,$url);
  //得到数据
  $res=curl_exec($ch);
  echo $res;*/

header('Content-type:text/html;charset=utf-8');
//配置您申请的appkey
$apicode = "ae79109248d14d93bd69b228250bac51";
 
$url = "https://api.yonyoucloud.com/apis/dst/collegeInfoQuery/collegeInfoQuery";
$method='GET';
 $name=$_GET['school'];
$params = array(
        "name" =>$name,
);
 
$header = array();
$header[] = "apicode:".$apicode;
$header[] = "content-type:application/json";
 
 
$content = linkcurl($url,$method,$params,$header);
echo $content;
/**
 * 请求接口返回内容
 * @param  string $url [请求的URL地址]
 * @param  string $params [请求的参数]
 * @param  int $ipost [是否采用POST形式]
 * @return  string
 */
function linkcurl($url,$method,$params=false,$header=false){
    $httpInfo = array();
    $ch = curl_init();
     
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST,$method);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
    curl_setopt($ch, CURLOPT_FAILONERROR, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
     
    if (1 == strpos("$".$url, "https://"))
    {
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    }
    curl_setopt( $ch, CURLOPT_CONNECTTIMEOUT , 60 );
    curl_setopt( $ch, CURLOPT_TIMEOUT , 60);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
 
    if($method == "POST" ){
        curl_setopt( $ch , CURLOPT_POST , true );
        curl_setopt( $ch , CURLOPT_POSTFIELDS, json_encode($params) );
    }else if($params){
        curl_setopt( $ch , CURLOPT_URL , $url.'?'.http_build_query($params) );
    }
    $response = curl_exec( $ch );
    if ($response === FALSE) {
        //echo "cURL Error: " . curl_error($ch);
        return false;
    }
    $httpCode = curl_getinfo( $ch , CURLINFO_HTTP_CODE );
    $httpInfo = array_merge( $httpInfo , curl_getinfo( $ch ) );
    curl_close( $ch );
    return $response;
}
?>


