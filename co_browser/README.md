Readme
-----
original co@4.0.0
https://github.com/tj/co
-----
diff 
```js
/* browser fit */
if(typeof module !== 'undefined')
 module.exports = co['default'] = co.co = co;
else
 window.co = co['default'] = co.co = co;
```
