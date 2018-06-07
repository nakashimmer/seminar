//★
for(var i=0;i<500;i++){
	var starZ=Math.floor(Math.random()*1000+1700);
	var starX=Math.floor(Math.random()*360);
	var starY=Math.floor(Math.random()*360);

	$id("star"+i).style.transform
		="rotateX("+starX+"deg) "
		+"rotateY("+starY+"deg) "
		+"translateZ("+starZ+"px)";

	$id("star"+i).style.color
		="rgba("
			+flr(Math.random()*100+150)+","
			+flr(Math.random()*100+150)+","
			+flr(Math.random()*100+150)+",1)";
}