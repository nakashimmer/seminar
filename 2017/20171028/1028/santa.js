var code=`/*背景*/
#bg{
	width:800px;height:500px;
	margin:0 auto;
	position:relative;
	overflow:hidden;
}


/*サンタ枠*/
#santa{
	width:400px;height:160px;
	position:absolute;top:300px;left:380px;
}


/*サンタアニメーション*/
#santa{
	animation:story1 4s linear 0s infinite normal;
	animation-fill-mode:both;
}

@keyframes story1{
	  0%{transform:rotate(0deg);top:300px;}
	 15%{transform:rotate(3deg);}
	 35%{transform:rotate(3deg);}
	 50%{transform:rotate(0deg);top:100px;}
	 65%{transform:rotate(-3deg);}
	 85%{transform:rotate(-3deg);}
	100%{transform:rotate(0deg);top:300px;}
}


/*背景の雪*/
#snows{
	width:1600px;height:500px;
	position:absolute;top:0;
	border:1px solid gray;
}
.snow{
	width:30px;height:30px;
	position:absolute;
	border-radius:50%;
	background-color:rgba(255,255,255,0.5);
	box-shadow:0px 0px 20px white;
}


/*雪のアニメーション*/
.snow{
	animation:storySnow 4s linear 0s infinite normal;
	animation-fill-mode:both;
}

@keyframes storySnow{
	  0%{left:-50px;}
	100%{left:810px;}
}


/*雪を遅延させる*/
div.snow:nth-of-type(1){top:100px;animation-delay:0s;}
div.snow:nth-of-type(2){top:300px;animation-delay:0.8s;}
div.snow:nth-of-type(3){top:200px;animation-delay:1.3s;}
div.snow:nth-of-type(4){top:400px;animation-delay:2.5s;}
div.snow:nth-of-type(5){top:350px;animation-delay:3.2s;}

.inner{position:relative;}


/*サンタ*/
#santa{display:flex;}

#sled{width:200px;height:160px;position:relative;}
#tonakai{width:200px;height:160px;position:relative;}
#sled *,#tonakai *{position:absolute;}


/*帽子*/
#bousi{
	width:0;height:0;top:-30px;left:80px;
	border:75px solid red;
	border-top-width:0px;
	border-left-width:55px;border-left-color:transparent;
	border-right-width:5px;border-right-color:transparent;
	transform:rotate(20deg);
}

#bousi-huchi{
	width:70px;height:20px;top:30px;left:65px;
	background-color:white;
	transform:rotate(20deg);
}


/*顔*/
#face{
	width:60px;height:30px;top:40px;left:70px;
	background-color:#f0ddc3;
}


/*ひげ*/
#hige{
	width:0px;height:0px;top:60px;left:70px;
	border:60px solid transparent;
	border-top-color:white;
	border-left-width:0px;
}

/*からだ*/
#body{
	width:70px;height:70px;top:60px;left:70px;
	background-color:red;
	border-radius:0 10px 0 0;
}


/*そり*/
#sori{
	width:200px;height:50px;top:110px;left:0px;
	background-color:brown;
	border-radius:10px 85px 5px 80px/10px 45px 5px 30px;
}


/*プレゼント*/
#present{
	width:120px;height:100px;top:50px;left:80px;
	background-color:white;
	border-radius:50%;
	transform:rotate(-40deg);
}

/*目*/
#eye1{
	width:10px;height:3px;top:50px;left:70px;
	background-color:black;
	border-radius:100% 0 0 0;
	transform:rotate(-10deg);
}

#eye2{
	width:10px;height:3px;top:50px;left:85px;
	background-color:black;
	border-radius:0 100% 0 0;
	transform:rotate(20deg);
}


/*トナカイ*/
#kao{
	width:100px;height:50px;top:15px;left:0px;
	background-color:#c39143;
	border-radius:0 0 10% 90%;
	transform:rotate(0deg);
	border-bottom:1px solid black;
}

#kubi1{
	width:40px;height:61px;top:30px;left:60px;
	background-color:#c39143;
	transform:skew(-16deg);
	transform-origin:top;
}
#kubi2{
	width:40px;height:70px;top:30px;left:60px;
	background-color:#c39143;
	transform:skew(0deg);
	transform-origin:top;
}

#doutai{
	width:140px;height:60px;top:90px;left:43px;
	background-color:#c39143;
	border-radius:0 0 50% 50%/0 0 100% 100%;
	border-bottom:1px solid black;
}

#maeashi{
	width:10px;height:50px;top:100px;left:50px;
	background-color:#c39143;
	transform:rotate(30deg);
	transform-origin:top left;
	border-bottom:10px solid white;
}

/*前足アニメーション*/
#maeashi{
	animation:story3 4s linear 0s infinite normal;
	animation-fill-mode:both;
}

@keyframes story3{
	0%{transform:rotate(30deg);}
	50%{transform:rotate(120deg);}
	100%{transform:rotate(30deg);}
}

#ushiroashi{
	width:10px;height:50px;top:100px;left:150px;
	background-color:#c39143;
	transform:rotate(30deg);
	transform-origin:top left;
	border-bottom:10px solid white;
}

/*後ろ足アニメーション*/
#ushiroashi{
	animation:story4 4s linear 0s infinite normal;
	animation-fill-mode:both;
}

@keyframes story4{
	0%{transform:rotate(30deg);}
	50%{transform:rotate(-60deg);}
	100%{transform:rotate(30deg);}
}

#hana{
	width:10px;height:10px;
	background-color:red;
	border-radius:100%;
	box-shadow:0px 0px 10px white,0px 0px 10px white;
}

#me{
	width:10px;height:3px;top:30px;left:70px;
	background-color:black;
	border-radius:100% 0 0 0;
	transform:rotate(20deg);
}

#tuno1{
	width:100px;height:100px;top:-80px;left:60px;
	border:10px solid transparent;
	border-left-color:yellow;
	border-bottom-color:yellow;
	border-radius:50%;
	transform:rotate(-10deg);
}
#tuno2{
	width:50px;height:50px;top:-30px;left:75px;
	border:8px solid transparent;
	border-left-color:yellow;
	border-bottom-color:yellow;
	border-radius:50%;
	transform:rotate(-10deg);
}

#bg h1{
	font-size:90px;text-align:center;color:white;
	font-family: 'Alex Brush', cursive;
}
#bg p{
	position:absolute;width:300px;left:10px;
	font-size:20px;text-align:center;color:white;
	font-family:serif;
}

div{border:none;}
p{color:white;margin:10px;text-align:center;}
small a{color:white;}
#style{z-index:-1;}
`;
