//fullsource
### target pre
js file
```js
var copyfn=function(){
  var f=function selectAll(el,flg=0){
  var sel = window.getSelection();
  if(flg==-1){
     sel.removeAllRanges();
  }else{
    var range = document.createRange();
    range.selectNodeContents(el);
    sel.removeAllRanges();
    sel.addRange(range);
  }
};
  var f1=function copyevent(el){
  try{
   f(el);//allselect
   document.execCommand('copy');
   f(el,-1);//un
   el.classList.add('copymark');
   setTimeout(()=>{ el.classList.remove('copymark'); },1000);
  }catch(err){ el.classList.remove('copymark'); }
 };
  [].forEach.call(document.querySelectorAll('pre'), (e)=>{ 
   e.addEventListener('click',function(){ f1(this) });
  });
 };
  copyfn();
```

css
```css
/*copyeffect*/
.copymark{position:relative;}
.copymark:before{
 position:absolute; z-index:10;
 top:0em;right:0.3em;
 /*color:$sfont;*/
 font-family:cambria,serif;
 content:"copy";
 /*transition: all 0.3s ease;*/
}
```
