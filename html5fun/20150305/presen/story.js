var c=[

{	t:"",
c:'<h1 class=theme><img src="bg/qr.gif" align=right width=220>ちょと面白い<br><small>(かもしれない)</small><br>CSS3</h1><p style="text-align:center;">http://bitly.com/fun0305</p>',
b:"css3.jpg"
},

{	t:"",
c:'<h1 class=theme>1.自己紹介</h1>',
b:"html5.png"
},

{	t:"自己紹介:<ruby>中島俊治<rt>なかしましゅんじ</rt></ruby>",
	c:"<ol><li>放送大学「<b>HTML5入門</b>」面接授業非常勤講師"+
	"<li>ソフトバンク入社。<b>GeoCities</b>、"+
	"<b>Y! JAPAN</b> etc..後独立"+
	"<li><b>HTML5資格</b>レベル1・2取得"+
	"<li><b>マイクロソフトMVP</b>(IE)受賞",
	b:"me.jpg"
},

{	t:"",
c:'<h1 class=theme>2.お題は<br>「最新トレンド」</h1>',
b:"html5.png"
},

{	t:"",
	c:"<p>HTML5の最新トレンドを調べてみた</p>"+
	'<ul><li><a target=_blank href="http://www.google.co.jp/trends/explore#q=HTML5&cmpt=q&tz=">HTML5</a>'+
	'<li><a target=_blank href="http://www.google.co.jp/trends/explore#q=CSS3&cmpt=q&tz=">CSS3</a>'+
	'<li><a target=_blank href="http://www.google.co.jp/trends/explore#q=JavaScript&cmpt=q&tz=">JavaScript</a>'+
	'<li><a target=_blank href="http://www.google.co.jp/trends/explore#q=canvas&cmpt=q&tz=">canvas</a>'+
	'</ul>',
	b:"trend.png"
},

{	t:"",
	c:"<p>最近はやっていそうなもの…</p>"+
	'<ul><li><a target=_blank href="http://www.google.co.jp/trends/explore#q=WEBRTC">WebRTC</a>'+
	'<li><a target=_blank href="http://www.google.co.jp/trends/explore#q=%2Fm%2F0h_98b8">Responsive web design</a>'+
	'<li><a target=_blank href="http://www.google.co.jp/trends/explore#q=single%20page%20application&cmpt=q&tz=">single page application</a>'+
	'<li><a target=_blank href="http://www.google.co.jp/trends/explore#q=single%20page%20web%20application&cmpt=q&tz=">single page web application</a>'+
	'</ul>',
	b:"trend1.png"
},


{	t:"ということで",
	c:"<p><b>シングルページWebアプリケーション</b>を中心に<b>パララックス</b>なども含んで、<b>HTML5</b>を作る上でのヒントを考えていきます。みなさんのお役に立つことができれば嬉しいです。</p>",
	b:"disney.jpg"
},




{	t:"",
c:'<h1 class=theme>3.何ができればいい？</h1>',
b:"html5.png"
},

{	t:"①シングルページ",
c:"<p>Q：シングルページとは？</p>"+
"<p>1ページで完結のWebページ</p>"+
'<a target=_blank href="https://www.apple.com/jp/iphone-6/">iPhone6</a>',
b:"blue.png"
},

{	t:"でもそれって",
c:"<p>昔からあったよね<br>↓</p>"+
'<a target=_blank href="http://www.linguage-school.jp/lp/201401.html">ランディングページ</a>',
b:"green.png"
},

{	t:"②パララックス",
c:"<p>Q:パララックスとは？</p>"+
'<ol><li><a target=_blank href="http://www.tamabi.ac.jp/index_j.htm">多摩美術大学</a>'+
'<li><a target=_blank href="http://www.dangersoffracking.com/">HYDRAULIC FRACTURING</a></ol>',
b:"purple.png"
},

{	t:"③(Web)アプリケーション",
c:"<p>Webアプリケーション</p>"+
'JSでコントロールされたWeb上のプログラム。(他の意味もあり)<br>必要な物はHTML5',
b:"pink.png"
},

{	t:"④Single Page Application",
c:'<ol><li><a target=_blank href="http://shop.nikon-image.com/nikon1/nikon1aw1/">Nikon A AW1</a>'+
'<li><a target=_blank href="http://graphicnovel-hybrid4.peugeot.com/start.html">peugeot hybrid4</a>'+
'<li><a target=_blank href="http://2011.beercamp.com/">BEERCAMP</a></ol>',
b:"yellow.png"
},



{	t:"",
c:'<h1 class=theme>4.プログラムを考える</h1>',
b:"html5.png"
},

{	t:"①ページの構成",
c:'&lt;section id=p5><br>'+
	'　&lt;h1 id=t5>タイトル&lt;/h1><br>'+
	'　&lt;div id=c5>コンテンツ&lt;/div><br>'+
	'&lt;/section>',
b:"page.jpg"
},

{	t:"②CSSで指定してたのを…",
c:'#t5{ <b>color:#ff0000</b>; }<br>'+
	'#c5{ <b>width:300px</b>; }',
b:"css.jpg"
},

{	t:"③JSでプロパティ指定してみる",
c:'<ol><li>色：<br>document.getElementById(id)<b>.style.color="#ff0000"</b>;<br>'+
'<li>幅：<br>document.getElementById(id)<b>.style.width="300px"</b>;</ol>',
b:"green.png"
},

{	t:"④小技",
c:'<p>document.getElementById(id)は長すぎるので関数化しよう</p>'+
'function <b>$(id)</b>{<br>'+
'　return<br>'+
' <b>document.getElementById(id)</b>;'+
'}',
b:"pink.png"
},

{	t:"⑤すっきり！",
c:'<ol><li>色：<br>$(id)<b>.style.color="#ff0000"</b>;<br>'+
'<li>幅：<br>$(id)<b>.style.width="300px"</b>;</ol>',
b:"green.png"
},

{	t:"⑥でも注意！",
c:'数字の値を持つCSSプロパティはOK。でもこれは動かない！<br>'+
'<ol><li>文字大きさ：<br>$(id).style.<b>font-size="30px"</b>;</ol>',
b:"bikkuri.png"
},

{	t:"⑥これで解決",
c:'ハイフン消し次の頭文字を大文字<br>'+
'<ol><li>文字大きさ：<br>$(id).style.<b>fontSize="30px"</b>;</ol>',
b:"yellow.png"
},

{	t:"⑦CSS3変形も自由自在",
c:'<p style="-webkit-transform:rotate(20deg)">$(id).style.<b>webkitTransform="rotate(20deg)</b>";</p>'+
'<p  style="-webkit-transform:scale(-1,1)">$(id).style.<b>webkitTransform="scale(-1,1)</b>";</p>'+
'<p style="-webkit-transform:translate(-100px,0px)">$(id).style.<b>webkitTransform="translate(-100px,00px)</b>";</p>',
b:"blue.png"
},

{	t:"",
c:'<h1 class=theme>5.スクロール<br>と連動</h1>',
b:"html5.png"
},

{	t:"①スクロール値を検知して…",
c:'window<b>.onscroll</b>=function(){<br>'+
'　pos=<br>　<b>document.body.scrollTop</b>;<br>'+
'}',
b:"green.png"
},

{	t:"②画面の大きさを測って…",
c:'var W=window<b>.innerWidth</b>;<br>'+
'var H=window<b>.innerHeight</b>;',
b:"pink.png"
},

{	t:"③要素の配置をCSSで…",
c:'for(要素数分繰り返し){<br>'+
'　$(title).style<b>.marginLeft<br>　　=W/8+W*i-pos/H*W</b>;<br>'+
'　$(content).style<b>.marginTop<br>　　=H/8*1.5-pos+i*H</b>;<br>'+
'}',
b:"purple.png"
},

{	t:"④完成！！！",
c:'<ol><li><a target=_blank href="http://springreen.jp/podium/htmlday/">HTMLDAY</a>'+
'<li><a target=_blank href="http://springreen.jp/podium/html5newfuture2/presen/">放送大学</a></ol>',
b:"blue.png"
},

{	t:"",
c:'<h1 class=theme>6.最後にPR</h1>',
b:"html5.png"
},



{	t:"",
c:'<p>オンライン教室の<b>schoo</b>でHTML5の授業を3ヶ月間シリーズで行います。<b>3/7(土)13時</b>から一回目放送！</p><ul><li>マークアップ<li>CSS3<li>JavaScript</ul>',
b:"schoo.png"
},

{	t:"",
c:'<p>HTML5プロフェッショナル認定試験のための<b>対策テキスト</b>を出版します。お近くの本屋さんでぜひご覧ください。</p><ol><li>3月後半<li>秀和システム</ol>',
b:"taisaku.png"
},

{	t:"東京アプリ・ワークショップ",
c:'<p>HTML5の講座を都内で開催しています。</p><ol><li>一日どっぷりHTML5入門<li>一日どっぷりCSS3<li>HTML5試験対策講座</ol>',
b:"taws.jpg"
},

{	t:"8.終了",
c:'<p >ご清聴ありがとうございました。</p>',
b:"thanks.jpg"
},


];



