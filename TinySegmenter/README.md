Readme
-----
## orginal 
http://chasen.org/~taku/software/TinySegmenter/

## set
https://rawgit.com/kunigamaeno/temp/master/TinySegmenter/tinysegmenter.js
```js
<script type="text/javascript" src="https://rawgit.com/kunigamaeno/temp/master/TinySegmenter/tinysegmenter.js" charset="UTF-8"></script>
```
## charset="UTF-8" Needs?
safety call is needs. but Not is do.

## Usage
```js
var segmenter = new TinySegmenter();                 // インスタンス生成
var segs = segmenter.segment("私の名前は中野です");  // 単語の配列が返る
console.log(segs);  // 表示
```
