//要素の取得
const maimai = document.getElementById("maimai");
const cource = document.getElementById("cource");
const maimaimp3 = document.getElementById("maimaimp3");
const msg = document.getElementById("msg");

//初期化
var x=0;	//位置(0〜500)
var d=5;
var startTime;
var go=false;
var finish=false;
var px100=true;
var px200=true;
var px300=true;
var px400=true;
var px500=true;

//イベント
msg.addEventListener("click",start);
cource.addEventListener("click",maimaiRun);


//ルーチン
function start(){
	var now=new Date();
	startTime=now.getTime();
	maimaimp3.play();
	msg.innerHTML="スタート！";
	mySpeech("スタート");
	go=true;
}

function maimaiRun(e){
	console.log(x);
	e.preventDefault();
	if(!go){return false;}
	if(finish){return false;}

	if(100<x && px100){mySpeech("100ピクセル通過");px100=false;}
	if(200<x && px200){mySpeech("200ピクセル通過");px200=false;}
	if(300<x && px300){mySpeech("300ピクセル通過");px300=false;}
	if(400<x && px400){mySpeech("400ピクセル通過");px400=false;}
	//移動
	x+=d;

	//回転と上下移動
	maimai.style.transform = "rotateX(-55deg) rotate("+Math.sin(x/2)*5+"deg)";
	maimai.style.top = 50+Math.sin(x/180*Math.PI)*50+"px";
	maimai.style.left = x+"px";
	msg.innerHTML=Math.floor(x)+"px";
	
	//ゴール
	if(500<x){
		d=0;
		//BGM切り替え
		maimaimp3.currentTime=38;
		//結果メッセージ表示
		var now=new Date();
		var t=Math.floor((now.getTime()-startTime))/1000;
		//msg.innerHTML = t+"秒でゴール！！！";
		finish=true;
		
		var gool1=Math.floor(t);
		var gool2=Math.floor((t-gool1)*1000)+" ";
		mySpeech(gool1+"秒"+gool2[0]+" "+gool2[1]+" "+gool2[2]+"でゴールしました！");
		msg.innerHTML = gool1+"秒"+gool2+"でゴールしました！🎉"
	}
	
}

maimaimp3.addEventListener("timeupdate",()=>{
	if((!finish) && (38<maimaimp3.currentTime)){
		maimaimp3.currentTime=0;
	}
});

