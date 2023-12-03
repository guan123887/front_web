// obj={
//   url:'https://suggest.taobao.com/sug',
//   data:{q:'123',pwd:"123456"},
//   success:function(data){
//   }
// }

//跨域数据obj  dataType=jsonp
function myAjax(obj){
  if(obj.dataType=='jsonp'){
    myAjax4Across(obj);
  }else{
    myAjax4Normal(obj);
  }
}
//获取跨域数据
function myAjax4Across(obj){
  var defaults={
    type:'get',
    url:'#',
    data:{},
    success:function(data){},
    jsonp:"callback",
    jsonpCallback:'hehe'
  }
  for(var key in obj){
    defaults[key]=obj[key];
  }
  var params='';

  for(var attr in defaults.data){
    params+=attr+'='+defaults.data[attr]+"&";
  }
  if(params){
    params.substring(0,params.length-1);
    defaults.url+='?'+params; 
  }
  defaults.url+='&'+defaults.jsonp+'='+defaults.jsonpCallback; 
  var script=document.createElement('script');
  script.src=defaults.url;
  window[defaults.jsonpCallback]=function(data){
    defaults.success(data);
  }
  var head=document.querySelector('head');
  head.appendChild(script);
}

//获取同源地址数据
function myAjax4Normal(obj){
  var defaults={
    type:"get",
    url:"#",
    dataType:"json",
    data:{},
    async:true,
    success:function(result){
      console.log(result);
    }
  };

  //obj中的属性，覆盖到defaultss中的属性
  //1.如果有一些属性值存在obj中，会给defaultss中增加属性
  //2.如果有一些属性在obj和defaultss中都存在，会将defaultss中的默认值覆盖
  //3.如果有一些属性只在defaultss中存在，在obj中不存在，这时候defaultss中将保留预定义的默认值
  for(var key in obj){
    defaults[key]=obj[key];
  }
  var xhr=null;
  if(window.XMLHttpRequest){
    xhr=new XMLHttpRequest();
  }else{
    xhr=new ActiveXObject('Microsoft.XMLHTTP');
  }

  var params='';
  //最终得到以下  形式  uanme=zhangsan&age=18
  for(var attr in defaults.data){
    params+=attr+'='+defaults.data[attr]+'&';
  }
  if(params){
    params=params.substring(0,params.length-1);
  }
  if(defaults.type=='get'){
    defaults.url+='?'+params;
  }
  xhr.open(defaults.type,defaults.url,defaults.async);
  if(defaults.type=='get'){
    xhr.send(null);
  }else if(defaults.type=='post'){
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(params);
  }

  if(defaults.async){
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4){
        if(xhr.status==200){
          var result=null;
          if(defaults.datatype=="json"){
            result=xhr.responseText;
            result=JSON.parse(result);     
          }else if(defaults.datatype=='xml'){
            result=xhr.responseXML;
          }else{
            result=xhr.responseText;
          }
          if ((typeof result== 'object' )&&result.constructor==Object){
                  result=result;
              } else {
                  result  = eval( "(" +result+ ")" );
              }
          defaults.success(result);
        }
      }
    }
  }else{
      if(xhr.readyState==4){
        if(xhr.status==200){
          var result=null;
          if(defaults.datatype=="json"){
            result=xhr.responseText;
            result=JSON.parse(result);     
          }else if(defaults.datatype=='xml'){
            result=xhr.responseXML;
          }else{
            result=xhr.responseText;
          }
                   if ((typeof result== 'object' )&&result.constructor==Object){
                  result=result;
              } else {
                  result  = eval( "(" +result+ ")" );
              }
          defaults.success(result);
        }
      }    
  }

}