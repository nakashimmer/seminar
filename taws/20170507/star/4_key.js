//キー入力による値の変更

var limit=4;

var z=600,dz=0;
var x=0,dx=0;
var y=0,dy=0;

window.addEventListener("keydown",function(e){
	if(e.keyCode==70){dz+=1;if( limit<dz)dz=0;}	//Forard
	if(e.keyCode==66){dz-=1;if(dz<-limit)dz=0;}	//Back
	if(e.keyCode==39){dx+=1;if( limit<dx)dx=0;}	//←
	if(e.keyCode==37){dx-=1;if(dx<-limit)dx=0;}	//→
	if(e.keyCode==40){dy-=1;if(dy<-limit)dy=0;}	//↓
	if(e.keyCode==38){dy+=1;if( limit<dy)dy=0;}	//↑
	
	$id("info").innerHTML
		="距離:"+flr(z-600)+"px("+dz+"), "
		+"回転:"+flr(x)+"deg("+dx+"), "
		+"仰角"+(flr(y))+"deg("+dy+")";
});