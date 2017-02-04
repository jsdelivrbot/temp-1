
var idary =function(num=0,prefix='',mixnum=1){
 if(num===0) return [];
 var merge = Array.prototype.push,f= function(p,m,d){ return m.map((v)=>{ return p+d+v }) },
     h="abcdefghijklmnopqrstuvwxyz",h1= (mixnum===1)? "0123456789"+h : h,p=prefix,
     ret=[];
  h=h.split(''); h1=h1.split('');
 Array.from(Array(num).keys())
  .forEach((i)=>{ 
   var wk=[];
   if(i===0) merge.apply(wk,f(p, (i===0)? h : h1 ,'') ); 
   else ret.forEach(d=> merge.apply(wk,f(p, (i===0)? h : h1 ,d) ) );
   merge.apply(ret,wk); 
  });
 return ret;
}
var efn=function(num,str){
   var e={};idary(num,str).forEach((d)=>{ e[d] = document.getElementById(d) });
   return e;
  }
 var sprintf =function(){
  var body= arguments[0]||'',
      arg = Array.prototype.slice.call(arguments, 1);
  arg.forEach((d)=>{ body= body.replace("%s",d) });
  return body;
  //spf("%s %s %s","aaa","bbb","ccc") //=> aaa bbb ccc
 };
