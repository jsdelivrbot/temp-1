Readme
-----
## useful.js
https://cdn.jsdelivr.net/gh/kunigamaeno/temp@master/webjspack/useful.js

## Usage
efn(number,header='',numflg=0)
2lings element about 700 auto create
```js
var e=efn(2); //e.a,b,c,d,....,e0,e1,...,ea...e.x0... - e.zz
//e.a.innerHTML=""
```
sprintf(arg...)
```js
//%s only
sprintf("<div>%s</div>","aiuewo");
```

xpad(str,padding);
```js
var s=1234.999999;
xpad(s,'*.00'); //=>1234.99
xpad(s,'000000.*');//=>001234.999999
//padding alf is not mean. but less is alf padding  
xpad(s,'xx.x');//=>34.9
xpad(s,'77.x');//=>34.9

var m=0.8;
xpad(m,'77.77');//=>70.87
```

debounce(fn(),wait);
```js
var ds= debounce(function(){
   var dat=document.querySelector('[data-iobox=a]').innerText;
   var id=lst.makeid(10);
   lst.save(id,dat);
   var p = document.querySelector('[data-iobox=log]');
   var t= sprintf("%s>%s",new Date( parseInt(lst.time(id),10) ).toUTCString(),id);
   p.appendChild(o.logback('data-iobox-log', id , t ,dat )); 
 },300);
```

## lst
lst is localstorage utility
lst.save(id,dat);
lst.load(id); //=>return storage data
lst.time(id); //=>return save time
lst.makeid(num); //=>return randomstring length=num
lst.timelist(); //=>return stock list ids and times
```js
 var id="eeee",dat="this is data"
 lst.save(id,dat);
 var rid=lst.makeid(10)
 lst.save(rid,dat);//random id randamstring length 10
 var stka=lst.load(rid);
 var stkb=lst.load(id);
 var tl=lst.timelist(); tl.forEach(d=>console.log(d));
 //id to savetime
 var savetime=lst.time(id); //=> output Data.now() format
```

## qtime 
qtime is time watch
```js
qtime.time('a');
var calcms =qtime.end('a'); //=> start is call time(), stop is end()
//if id differ is multi stock ok
var sy='bbbbxxxxxyyaerera';
qtime.time(sy)
var calcsy=qtime.end(sy);
```
escape_html(string); // [&'\`"<>]/g

getJson(url); //11 line mini Promise 
```js
 getJson('https://xxxxyyyyy').then(d=> console.log(d) ).catch(d=> console.log('err',d) );
```
```js 
//inner-code
var getJson = function(url){
  return new Promise(function(sol,rej){ 
   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function(){ 
    if( this.readyState == 4){ 
     if( this.status == 200|| this.status==0) sol( this.response);
     else rej(this.response);
    }
   }
   xhr.open( 'GET',url, true );xhr.responseType = 'json';xhr.send( null );
   });//
}
```
