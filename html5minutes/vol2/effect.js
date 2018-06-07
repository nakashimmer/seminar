function trs(id,value){$(id).style.webkitTransition=value;}

audio.playbackRate=1;

function effect(){
	if(4==bar){
		$("btn1").style.display="none";
	}
	//CSSで作るの・・・
	if(9==bar){
		trs("item1","border 1s linear,width 1s linear,height 1s linear");
		$("item1").style.border="5px solid white";
		$("item1").style.width=H(1);
		$("item1").style.height=H(1);
	}
	
	//widthは・・・
	if(12 == bar){
		trs("item1","width 1s linear,height 1s linear,border 1s linear,webkit-transform 1s linear");
		$("item1").style.width=H(2);}
	if(13 == bar){
		$("item1").style.width=H(1);
		$("item1").style.height=H(1);}
	
	if(14 == bar){$("item1").style.height=H(2);}
	if(15 == bar){$("item1").style.height=H(1);}
	
	//私の心がささやくの
	if(16 == bar){
		trs("item1","-webkit-transform 1s linear,background 1s linear,border 1s linear");
		trs("item2","-webkit-transform 1s linear,background 1s linear,border 1s linear");
		trs("item3","-webkit-transform 1s linear,background 1s linear,border 1s linear");

		
		$("item1").style.webkitTransform="rotate(45deg)";
		$("item1").style.backgroundColor="red";
		$("item1").style.border="0 solid white";

		$("item2").style.width=H(1);
		$("item2").style.height=H(1);
		$("item3").style.width=H(1);
		$("item3").style.height=H(1);

		$("item2").style.borderRadius=H(1);
		$("item3").style.borderRadius=H(1);
	}

	if(18 == bar){
		trs("item2","-webkit-transform 1s linear");
		trs("item3","-webkit-transform 1s linear");
		$("item2").style.backgroundColor="red";
		$("item3").style.backgroundColor="red";
		$("item2").style.webkitTransform="translate("+H(-0.5)+","+H(0)+")";
		$("item3").style.webkitTransform="translate("+H(0)+","+H(-0.5)+")";
		
	}

	if(20 == bar){
		trs("item1","-webkit-transform 5s ease-in");
		$("item1").style.webkitTransform="translate(0,1200px)";
	}
	
	
	//戸惑い傷つき(ムエル)
	if(24 == bar){
		$("mlface").style.height="40px";
		$("mlmouth").style.webkitTransform=" scale(0.1,0.1) rotate(45deg)";
		$("mlmouth").style.bottom="2px";
		$("mlmouth").style.bottom="-10px";
		$("mlfive1").style.borderColor="transparent";
		$("mlfive2").style.borderColor="transparent";
		$("mlfive3").style.borderColor="transparent";
		$("mlfive4").style.borderColor="transparent";
		$("mlfive5").style.borderColor="transparent";
		
	}
	
	if(27 == bar){
		trs("mlface","height 7s linear");
		trs("mlmouth","-webkit-transform 3s linear,bottom 3s linear");
		$("mlface").style.height="80px";
		$("mlmouth").style.webkitTransform=" scale(1,0.5) rotate(45deg)";
		$("mlmouth").style.bottom="10px";
	}
	
	if(30 == bar){
		trs("mlface","height 3s linear");
		trs("mlmouth","-webkit-transform 3s linear,bottom 3s linear");
		$("mlface").style.height="90px";
		$("mlmouth").style.webkitTransform=" scale(1,0.5) rotate(45deg)";
		$("mlmouth").style.bottom="15px";
		trs("mllefthand","-webkit-transform 3s linear");
		trs("mlrighthand","-webkit-transform 3s linear");
		$("mllefthand").style.webkitTransform="rotate(130deg)";
		$("mlrighthand").style.webkitTransform="rotate(-130deg)";
	}
	

	//box-shadow
	if(34 == bar){
		$("item2").style.display="none";
		$("item3").style.display="none";
		$("item1").style.opacity="1";
		$("item1").style.display="block";
		$("item1").style.webkitTransform="rotate(0deg)";
		trs("item1","width 1s linear,height 1s linear,border 1s linear");
		$("item1").style.width=H(2);
		$("item1").style.height=H(2);
		$("item1").style.border="5px solid white";
	}
	
	if(38 == bar){
		trs("item1","box-shadow 1s linear");
		$("item1").style.boxShadow="50px 0 0 white";
	}
	//ぼかしいれてみた
	if(40 == bar){$("item1").style.boxShadow="50px 50px 0 white";}
	if(42 == bar){$("item1").style.boxShadow="50px 50px 20px white";}
	//増やしてみた
	if(44 == bar){$("item1").style.boxShadow+=",-60px -60px 40px pink";}
	if(46 == bar){$("item1").style.boxShadow+=",-80px 80px 60px skyblue";}
	if(48 == bar){$("item1").style.boxShadow+=",90px -90px 80px lightgreen";}

	//グラデーション
	if(50 == bar){
		{$("item1").style.boxShadow="none";}
		trs("item1","background 1s linear,width 1s linear,height 1s linear");
		$("item1").style.width=H(2);
		$("item1").style.height=H(2);
		$("item1").style.background="-webkit-gradient(linear,left top,left bottom,from(blue),to(white))";
		$("item1").style.webkitBoxReflect="below 2px -webkit-gradient(linear,left bottom,left top,from(white),color-stop(0.7,transparent),to(transparent))"

	}

	if(52 == bar){$("item1").style.background="-webkit-gradient(linear,left top,left bottom,from(red),to(white))";}
	if(53 == bar){$("item1").style.background="-webkit-gradient(linear,left top,left bottom,from(green),to(white))";}
	if(54 == bar){$("item1").style.background="-webkit-gradient(linear,left top,left bottom,from(skyblue),to(white))";}
	if(55 == bar){$("item1").style.background="-webkit-gradient(linear,left top,left bottom,from(pink),to(white))";}
	if(56 == bar){$("item1").style.background="-webkit-gradient(linear,left top,left bottom,from(yellow),to(white))";}
	if(57 == bar){$("item1").style.background="-webkit-gradient(linear,left top,left bottom,from(gray),to(transparent))";}
	if(58 == bar){$("item1").style.background="-webkit-gradient(linear,left top,left bottom,from(purple),to(transparent))";}
	if(59 == bar){$("item1").style.background="-webkit-gradient(linear,left top,left bottom,from(white),to(white))";}

	
	//border-radius角を丸くするの
	if(60 == bar){
		trs("item1","border-radius 1s linear,box-shadow 0s linear,margin 1s linear,height 1s linear,width 1s linear");
		$("item1").style.margin="0px";
		$("item1").style.width=H(2);
		$("item1").style.height=H(2);
		$("item1").style.background="white";
		$("item1").style.boxShadow="0 0 0 transparent";
		$("item1").style.webkitBoxReflect="none";
	}
	
	if(61 == bar){
		trs("item1","border-radius 1s linear");
		$("item1").style.borderRadius="50px 0 0 0";
	}
	
	if(62 == bar){
		trs("item1","border-radius 1s linear");
		$("item1").style.borderRadius="50px 150px 0 0";
	}
	
	if(63 == bar){
		trs("item1","border-radius 1s linear");
		$("item1").style.borderRadius="50px 100px 50px 0";
	}
	
	if(64 == bar){
		trs("item1","border-radius 1s linear");
		$("item1").style.borderRadius="50px 200px 70px 200px";
	}
	
	if(65 == bar){
		trs("item1","width 1s linear,height 1s linear,border 1s linear");
		$("item1").style.border="1px solid gray";
		$("item1").style.width=H(3);
		$("item1").style.height=H(3);
	}
	
	if(66 == bar){
		trs("item1","border-radius 1s linear");
		$("item1").style.borderRadius="50%";
		$("item1").style.boxShadow="inset 0px 0px 0px gray";
		}
	//球ができた
	if(67 == bar){
		trs("item1","box-shadow 1s linear");
		$("item1").style.boxShadow="inset -50px -50px 100px gray";
	}
	//IEのままで
	if(69 == bar){
		trs("item1","width 1s linear,height 1s linear,border-radius 1s linear,border 1s linear,-webkit-transform 1s ease-in");
		$("item1").style.borderRadius="0";
		$("item1").style.boxShadow="inset 0px 0px 0px transparent";
		$("item1").style.border="0px solid gray";
		$("item1").style.width="95px";
		$("item1").style.height="95px";
		$("item1").style.backgroundColor="red";
		$("item1").style.webkitTransformOrigin="right bottom";
		$("item1").style.webkitTransform="translate(-50px,-50px)";
		
	}
	//IEのままで
	if(70 == bar){$("item1").style.boxShadow="100px 0 0 green";}
	if(71 == bar){$("item1").style.boxShadow+=",0px 100px 0 blue";}
	if(72 == bar){$("item1").style.boxShadow+=",100px 100px 0 yellow";}

	if(73 == bar){
		trs("item1","-webkit-transform 1s ease-in");
		$("item1").style.webkitTransform="translate(-150px,-50px)";}
	if(74 == bar){$("item1").style.webkitTransform="translate(50px,-150px)";}
	//二度とIE6は
	if(75 == bar){$("item1").style.webkitTransform="translate(50px,50px) rotate(180deg)";}
	if(76 == bar){$("item1").style.webkitTransform="translate(-150px,50px) rotate(-180deg)";}
	if(77 == bar){$("item1").style.webkitTransform="rotate(0deg) skew(-40deg,0)";}
	if(78 == bar){$("item1").style.webkitTransform="translate(-150px,-50px) skew(40deg,0deg)";}
	if(79 == bar){$("item1").style.webkitTransform="skew(0,-40deg)";}
	if(80 == bar){$("item1").style.webkitTransform="skew(0,0deg)";}
	if(81 == bar){$("item1").style.webkitTransform="rotate(0deg)";}
	if(82 == bar){$("item1").style.webkitTransform="translate(-50px,-50px)";}
	//次に展開
	if(83 == bar){
		trs("item1","-webkit-transform 1s ease-in,background-color 1s linear");
		$("item1").style.webkitTransformOrigin="center center";
		$("item1").style.webkitTransform="scale(15) rotate(180deg)";
		$("item1").style.backgroundColor="white";
	}
	//３次元表示
	if(87==bar){
		trs("item21","-webkit-transform 3s ease-in-out");
		trs("item23","-webkit-transform 3s ease-in-out");
		$("item21").style.webkitTransform="rotateY(360deg)";
		$("item23").style.webkitTransform="rotateY(-720deg)";
	}
	if(89==bar){
		trs("item21","-webkit-transform 3s ease-in-out");
		trs("item23","-webkit-transform 3s ease-in-out");
		$("item21").style.webkitTransform="rotateY(-360deg)";
		$("item23").style.webkitTransform="rotateY(720deg)";
	}
	//高く舞い上がる
	if(91==bar){
		trs("item21","-webkit-transform 1s ease-in-out");
		trs("item23","-webkit-transform 1s ease-in-out");
		$("item21").style.webkitTransform="translateZ(100px)";
		$("item23").style.webkitTransform="translateZ(-100px)";
	}
	
	//花咲く氷の結晶
	if(92==bar){
		$("item21").style.webkitTransform="translateZ(-100px)";
		$("item23").style.webkitTransform="translateZ(100px)";
	}
	if(93==bar){
		$("item21").style.webkitTransform="translateZ(0px)";
		$("item23").style.webkitTransform="translateZ(0px)";
	}

	//アニメーションできる
	if(94==bar){
		trs("item21","-webkit-transform 1s linear");
		trs("item22","-webkit-transform 1s linear");
		trs("item23","-webkit-transform 1s linear");
		$("item21").style.webkitTransform="rotate(-180deg)";
		$("item23").style.webkitTransform="rotate(180deg)";
	}
	if(95==bar){
		$("item21").style.webkitTransform="rotate(180deg)";
		$("item23").style.webkitTransform="rotate(-180deg)";
	}
	
	if(96==bar){
		$("item21").style.webkitTransform="rotate(0deg)";
		$("item22").style.webkitTransform="rotateX(180deg)";
		$("item23").style.webkitTransform="rotate(0deg)";
	}
	if(97==bar){;
		$("item22").style.webkitTransform="rotateX(-180deg)";
	}
	if(98==bar){
		$("item22").style.webkitTransform="rotateX(0deg)";
	}

	if(99==bar){
		$("item21").style.webkitTransform="rotateX(-18deg)";
		$("item22").style.webkitTransform="rotateX(18deg)";
		$("item23").style.webkitTransform="rotateX(-18deg)";
	}
	
	if(100==bar){
		$("item21").style.webkitTransform="rotateX(18deg)";
		$("item22").style.webkitTransform="rotateX(-18deg)";
		$("item23").style.webkitTransform="rotateX(18deg)";
	}
	
	if(101==bar){
		$("item21").style.webkitTransform="rotateY(0deg)";
		$("item22").style.webkitTransform="translateZ(100px)";
		$("item23").style.webkitTransform="rotateY(0deg)";
	}
	
	if(102==bar){
		$("item21").style.webkitTransform="rotateY(0deg)";
		$("item22").style.webkitTransform="translateZ(0)";
		$("item23").style.webkitTransform="rotateY(0deg)";
	}
	if(111 == bar){
		trs("mlface","height 7s linear");
		trs("mlmouth","-webkit-transform 3s linear,bottom 3s linear");
		$("mlface").style.height="80px";
		$("mlmouth").style.webkitTransform=" scale(1,0.5) rotate(45deg)";
		$("mlmouth").style.bottom="10px";
		$("mllefthand").style.webkitTransform="rotate(0deg)";
		$("mlrighthand").style.webkitTransform="rotate(0deg)";
	}
	
	//ここはぐるんぐるん
	
	//ムエル
	
	if(112 == bar){
		
		trs("ml","-webkit-transform 2s linear");
		$("ml").style.webkitTransform="scale(0.5)";
		
		trs("mlcanvas","-webkit-transform 3s linear,background-color 3s linear,border-color 3s linear,color 3s linear");
		trs("mlgeo","-webkit-transform 3s linear,background-color 3s linear,border-color 3s linear,color 3s linear");
		trs("mlsensor","-webkit-transform 3s linear,background-color 3s linear,border-color 3s linear,color 3s linear");
		trs("mlcss3","-webkit-transform 3s linear,background-color 3s linear,border-color 3s linear,color 3s linear");
		trs("mljavascript","-webkit-transform 3s linear,background-color 3s linear,border-color 3s linear,color 3s linear");
		trs("mlaudouvideo","-webkit-transform 3s linear,background-color 3s linear,border-color 3s linear,color 3s linear");
		$("mlcanvas").style.backgroundColor="rgba(0,0,215,0.2)";
		$("mlgeo").style.backgroundColor="rgba(0,0,215,0.2)";
		$("mlsensor").style.backgroundColor="rgba(0,0,215,0.2)";
		$("mlcss3").style.backgroundColor="rgba(0,0,215,0.2)";
		$("mljavascript").style.backgroundColor="rgba(0,0,215,0.2)";
		$("mlaudouvideo").style.backgroundColor="rgba(0,0,215,0.2)";
		
		$("mlcanvas").style.borderColor="rgba(100,100,100,0.2)";
		$("mlgeo").style.borderColor="rgba(100,100,100,0.2)";
		$("mlsensor").style.borderColor="rgba(100,100,100,0.2)";
		$("mlcss3").style.borderColor="rgba(100,100,100,0.2)";
		$("mljavascript").style.borderColor="rgba(100,100,100,0.2)";
		$("mlaudouvideo").style.borderColor="rgba(100,100,100,0.2)";
		
		$("mlcanvas").style.color="gray";
		$("mlgeo").style.color="gray";
		$("mlsensor").style.color="gray";
		$("mlcss3").style.color="gray";
		$("mljavascript").style.color="gray";
		$("mlaudouvideo").style.color="gray";
		
		$("mlcanvas").style.webkitTransform="rotate(-30deg)";
		$("mlgeo").style.webkitTransform="rotate(0deg)";
		$("mlsensor").style.webkitTransform="rotate(30deg)";
		$("mlcss3").style.webkitTransform="rotate(-30deg)";
		$("mljavascript").style.webkitTransform="rotate(0deg)";
		$("mlaudouvideo").style.webkitTransform="rotate(30deg)";
	}
	
	if(113 == bar){
		trs("ml","-webkit-transform 2s ease-in-out");
		$("ml").style.webkitTransform="scale(0.5) translate(300px,-100px) rotate(10deg)";
	}
	
	if(114 == bar){
		$("ml").style.webkitTransform="scale(0.4) translate(-200px,-0px) rotate(-10deg)";
	}
	
	if(115 == bar){
		trs("ml","-webkit-transform 1s linear");
		$("ml").style.webkitTransform="scale(0.5) translate(200px,100px) rotate(10deg)";
	}
	
	if(116 == bar){
		$("ml").style.webkitTransform="scale(0.4) translate(-300px,-100px) rotate(-10deg)";
	}
	
	if(116 == bar){
		$("ml").style.webkitTransform="scale(0.4) translate(-100px,-50px) rotate(-10deg)";
	}
	
	if(117 == bar){
		$("ml").style.webkitTransform="scale(0.4) translate(-100px,0px) rotate(-10deg)";
	}
	
	if(118 == bar){
		$("ml").style.webkitTransform="scale(0.4) translate(0px,-70px) rotate(0deg)";
	}
	
	
	if(119 == bar){
		trs("ml","-webkit-transform 2s linear");
		$("ml").style.webkitTransform="scale(1) translate(0,0)";
		trs("mlface","height 3s linear");
		trs("mlmouth","-webkit-transform 3s linear,bottom 3s linear");
		$("mlface").style.height="90px";
		$("mlmouth").style.webkitTransform=" scale(1,0.5) rotate(45deg)";
		$("mlmouth").style.bottom="15px";
		trs("mllefthand","-webkit-transform 3s linear");
		trs("mlrighthand","-webkit-transform 3s linear");
		$("mllefthand").style.webkitTransform="rotate(130deg)";
		$("mlrighthand").style.webkitTransform="rotate(-130deg)";
		
	

		

	}
	if(122 == bar){
		trs("mlfive1","border-color 3s linear");
		trs("mlfive2","border-color 3s linear");
		trs("mlfive3","border-color 3s linear");
		trs("mlfive4","border-color 3s linear");
		trs("mlfive5","border-color 3s linear");
		$("mlfive1").style.borderColor="white";
		$("mlfive2").style.borderColor="white";
		$("mlfive3").style.borderColor="white";
		$("mlfive4").style.borderColor="white";
		$("mlfive5").style.borderColor="white";
	}
}