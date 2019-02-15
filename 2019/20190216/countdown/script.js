
function cls(){
	c.fillStyle="black";
	c.fillRect(0,0,canvas.width,canvas.height);
}

function drawArc(maxMinute,i){
	c.beginPath();
	c.moveTo(150,150);
	var rad=(i/maxMinute*2-0.5)*Math.PI;
	c.arc(150,150,100,rad,1.5*Math.PI,false);
	c.closePath();
	c.fillStyle="white";
	c.fill();
}

function countdown(maxMinute,i){
	$("countdown").innerHTML="残り時間"+(maxMinute-i)+"秒"
}

function $(id){
	return document.getElementById(id)
}
