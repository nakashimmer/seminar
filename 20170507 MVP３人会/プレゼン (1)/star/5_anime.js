//アニメーション

var z=600,dz=0;
var x=0,dx=0;
var y=0,dy=0;

var startTime = new Date().getTime();

anime();

function anime(){

	window.requestAnimationFrame(anime);
	var currentTime=new Date().getTime()
	var elapsedTime = (new Date().getTime()-startTime)/50;
	startTime=currentTime;

	z+=dz*elapsedTime;
	x+=dx*elapsedTime;
	y+=dy*elapsedTime;

	$id("center").style.transform
		="translateZ("+z+"px) "
		+"rotateY("+x+"deg) "
		+"rotateX("+y+"deg)";
		
	$id("info").innerHTML
		="距離:"+flr(z-600)+"px("+dz+"), "
		+"回転:"+flr(x)+"deg("+dx+"), "
		+"仰角"+(flr(y))+"deg("+dy+")";;
		
	function flr(x){return Math.floor(x)}
}