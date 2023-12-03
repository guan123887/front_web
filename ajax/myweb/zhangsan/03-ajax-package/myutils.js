 function myAjax(type,url,params,datatype,callback,async){
      var xhr=null;
      if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest();
      }else{
        xhr=new ActiveXObject('Microsoft.XMLHTTP');
      }

      if(type=='get'){
        if(params&&params!=''){          
          url+='?'+params;             
        }
      }
      xhr.open(type,url,async);      
      if(type=='get'){
        xhr.send(null);
      }else if(type=='post'){  
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(params);
      }
      if(async){
       xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
          if(xhr.status==200){
            var result=null;
            if(datatype=='json'){
              result=xhr.responseText;  
              result=JSON.parse(result);          
            }else if(datatype=='xml'){
              result=xhr.responseXML;
            }else{
              result=xhr.responseText;
            }
            if(callback){
              callback(result);              
            }
          }
        }
      }      
    }else{
       if(xhr.readyState==4){
          if(xhr.status==200){
            var result=null;
            if(datatype=='json'){
              result=xhr.responseText;  
              result=JSON.parse(result);          
            }else if(datatype=='xml'){
              result=xhr.responseXML;
            }else{
              result=xhr.responseText;
            }
            if(callback){
              callback(result);              
            }
        }
      }
    }
}


// obj={
//   url:"xxx",
//   type:'get',
//   dataType:'json',
//   data:{
//     uname:'zhangsan',
//     age:18
//   }
// };

function myAjax2(obj){
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