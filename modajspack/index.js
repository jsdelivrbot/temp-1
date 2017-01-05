//target
//fetch.js
//q.js
//underscore.js
//sprintf.js
//md5.js
//
(function(){
 //m5.js
 let str ="abcx",key="abcxkey",dump;
 //console.log("### md5 ###");
 dump=md5(str); //b1a85930d233609029cc0b18a97b2d5d
 //console.log(dump); 
 dump=md5(key,str); //2e37caf694bc8ecc20a69d2bca50d78e
 
})();

(function(){
  let dump;
 //console.log("### sprintf ###");
 dump=sprintf("%d", 12345); //12345 //符号付き10進整数
 //console.log(dump);
 dump=sprintf("%d", 123.6); //123 //四捨五入でなく切り捨て
 dump=sprintf("%6d", 123); // 123 //幅指定
 dump=sprintf("%06d", 123); // 000123 //flag 0
 dump=sprintf("%06d", -123); // -00123 //先頭は -
 dump=sprintf("%6.4d", 123); //    123 //整数の精度
 dump=sprintf("%06.8d", 123); // 00000123 //精度優先
 
dump=sprintf("%f", 123.45); // 123.45 //小数
dump=sprintf("%10f", 123.45); //    123.4500 //幅指定
dump=sprintf("%.3f", 123.45); // 123.450 //精度指定
dump=sprintf("%.1f", 123.25); // 123.2 //表示丸め。四捨五入ではない
dump=sprintf("%.1f", 123.251); // 123.3 //表示丸め。5より大きければ切り上げ
dump=sprintf("%.0f", 123.45); // 123 //表示丸め。精度0なら.無し
dump=sprintf("%08.2f", 123.45); // 00123.45 //flag 0
dump=sprintf("%08.2f", -123.45); // -0123.45 //先頭は -
 
dump=sprintf("%6e", 123.45); // 1.2345e+2 //指数 
dump=sprintf("%13e", 123.45); //   1.2345e+2 //幅指定
dump=sprintf("%.8e", 123.45); // 1.23450000e+2 //精度指定
dump=sprintf("%13.5e", 123.45); //  1.23450e+2 //幅＋精度
 
dump=sprintf("%s", "abc"); // abc //文字列
dump=sprintf("%4s", "abc"); // abc //幅指定
dump=sprintf("%.2s", "abc"); // ab //精度指定
dump=sprintf("%d", 123.45); // 123 //小数は整数にして表示
dump=sprintf("%8d", "123"); //     123 //文字列も整数にして表示+幅
//dump=sprintf("%d", "abc"); //TypeError //数値と解釈できないときはerror : [sprintf] expecting number but found string
dump=sprintf("%7s", 123.45); // 123.45 //数値を文字列に変換
dump=sprintf("%12.06f", 123.45); // 123.450000 //空白追加+小数精度
dump=sprintf("%+7.3f", 123.45); // +123.450 //+追加
 
//other offitial document
//https://github.com/alexei/sprintf.js
//quick summary
/*
% — yields a literal % character
b — yields an integer as a binary number
c — yields an integer as the character with that ASCII value
d or i — yields an integer as a signed decimal number
e — yields a float using scientific notation
u — yields an integer as an unsigned decimal number
f — yields a float as is; see notes on precision above
g — yields a float as is; see notes on precision above
o — yields an integer as an octal number
s — yields a string as is
t — yields true or false
T — yields the type of the argument1
v — yields the primitive value of the specified argument
x — yields an integer as a hexadecimal number (lower-case)
X — yields an integer as a hexadecimal number (upper-case)
j — yields a JavaScript object or array as a JSON encoded string
*/
})();

(function(){
  //q.js
 //let str ="abcx",key="abcxkey",dump;
 //console.log("### q.js ###");

 //https://gist.github.com/guptag/7205768
 
})();

(function(){
 //fetch.js
 let u='https://raw.githubusercontent.com/kunigamaeno/tdot/master/dict_je.json';
  fetch(u).then((res)=>{ return res.json(); })
          .then((dict)=>{ console.log('parsed json', dict.length); return dict; })
  ;//
 
})();

(function(){
 //underscore.js
 //http://underscorejs.org/
 let a= _.chain([1,2,3,4,5,6,7]).filter((d)=>{ return d%2;}).value();
 console.log(a);
 let key="melekrrlek";
 let b=_.chain(["a.css","b.css","c.css"])
   .map((d)=>{ return sprintf('<link href="%s" data-hash-id="%.6s"></link>',d,md5(key,d)); })
   .join('\n').value();
 console.log(b);
 
})();


;(function(){
 
});


(function(){
 Element.prototype.on = function(event) {
    return new Promise(function (resolve, reject) {
            this.addEventListener(event, resolve);
    }); 
 }
 
 
 var el =document.getElementById("done"),
     ein =document.getElementById("in"),
     eout =document.getElementById("out"),
     enu =document.getElementById("num");
 el.addEventListener('click',()=>{ 
  let s =_.chain( (ein.value).split("\n") )
   .map((d)=>{ return d.trim() }).compact()
   .value();
  enu.innerHTML = s.length;
  eout.value = ein.value;// + s.length;
 });
 
 
  urls=[
  "https://raw.githubusercontent.com/kunigamaeno/tdot/master/dict_je.json",
  "https://raw.githubusercontent.com/kunigamaeno/tdot/master/dict_je.json",
  "https://raw.githubusercontent.com/kunigamaeno/tdot/master/dict_je.json",
  "https://raw.githubusercontent.com/kunigamaeno/tdot/master/dict_je.json"
  ];
 
 var foo = (d)=>{ return fetch(d).then((d)=>{ return d.json() }) };
 Promise.all(urls.map(foo)).then( (texts) => {
   console.log(texts);
});
 
 var d="aiuewo";
 Promise.resolve(d)
  .then(y=> "aa"+y )
  .then(z=> "youyouyou"+z)
  .then((a)=>{
  console.log(a) 
 })
  .catch(d=> console.log("catch",d));
 
})();