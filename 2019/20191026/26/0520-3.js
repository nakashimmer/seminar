/* --------------------------*/
/*-- #0520-3  効果音 --*/
/*---------------------------*/

//要素の取得関数
function $(id){return document.getElementById(id);}

//初期化
var mypx=0;	//位置(0〜500)
var interval=5;	//インターバル(0~)
var startTime;

//★①音声
var bgm1 = new Audio();
bgm1.src="bgm1.mp3";
var bgm2 = new Audio();
bgm2.src="bgm2.mp3";

//イベント
$("btn1").addEventListener("click",fnc1);

//ルーチン
function fnc1(){
	$("runner").style.transform="rotate("+(mypx%3-1)*5+"deg)";
	$("runner").style.top=50+Math.sin(mypx/180*Math.PI)*50+"px";

	mypx+=interval;
	$("runner").style.left = mypx+"px";
	$("btn1").innerHTML=mypx+"px";
	
	var now=new Date();
	
	if(mypx===interval){
		startTime=now.getTime();
		//★②再生
		bgm1.play();
	}
	
	//ゴール
	if(500<=mypx){
		$("btn1").disabled="disabled";
		
		$("btn1").innerHTML += "<br>"+(now.getTime()-startTime)/1000+"s";
		$("btn1").style.lineHeight="1.5em";
		//★③停止と再生
		bgm1.pause();
		bgm2.play();
	}
	
}
