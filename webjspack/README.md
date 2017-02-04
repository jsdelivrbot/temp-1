Readme
-----
# useful.js
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


