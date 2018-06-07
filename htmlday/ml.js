var canvas=document.getElementById("canvasina");
var c=canvas.getContext("2d");
var pi=Math.PI;

setInterval(anime,50);
var frame=0;
function anime(){
	frame++;
	c.clearRect(0,0,500,450)
	c.save();
	c.translate(-40,10*Math.sin(frame/180*pi));
	c.rotate((-10+5*Math.sin(frame/180*pi))/180*pi);
	hane(30);
	hane(0);
	hane(-30);
	hane(180+30);
	hane(180+0);
	hane(180-30);
	haneMsg("CSS3",360,175,-25);
	haneMsg("JavaScript",360,245,0);
	haneMsg("AudioVideo",360,305,40);
	haneMsg("Canvas",140,175,25);
	haneMsg("Geolocation",140,245,0);
	haneMsg("Sensor",140,300,-40);
	
	footer(250-25,300);footer(250+25,300);
	fude(250-100,235-5,250-140,235-5-50);
	ude(250,235,250-70,235+5,250-100,235-5);
	ude(250,235,250+70,235+5,250+60,235+55);
	body(250,250);
	face(250,170);
	eye(220,190,0);
	eye(280,190,0);
	mouth(250,210);
	hat(230,135);
	five();
	c.restore();
}

function five(){
	c.save();
	c.translate(250,265);
	
	c.fillStyle="white";
	c.font="8px serif";
	c.fillText("mL Fairy",-5,-20);
	
	
	c.beginPath();
	c.moveTo(35,0);
	c.lineTo(-30,0);
	c.lineTo(-29,20);
	c.lineTo(29,20);
	c.lineTo(28,45);
	c.lineTo(0,50);
	c.lineTo(-27,45);
	c.lineTo(-28,30);
	c.lineWidth=15;
	c.strokeStyle="white";
	c.stroke();
	c.restore();
}

function haneMsg(msg,x,y,kakudo){
	c.font="20px serif";
	c.save();
	c.translate(x,y);
	c.rotate(kakudo/180*pi);
	c.textAlign="center";
	c.fillStyle="#0091BE";
	c.beginPath();
	c.fillText(msg,0,0);
	c.restore();
}

function fude(x,y,x1,y1){
	c.beginPath();
	c.moveTo(x1+5,y1);
	c.lineTo(x,y);
	c.lineTo(x1-10,y1);
	c.fillStyle="#955629";
	c.fill();
	c.lineWidth=5;
	c.strokeStyle="#955629";
	c.stroke();
	
	c.beginPath();
	c.moveTo(x1+3,y1+5);
	c.lineTo(x1-9,y1-10);
	c.lineWidth=18;
	c.strokeStyle="#ffffad";
	c.stroke();
}

function hat(x,y){
	c.save();
	c.translate(x,y);
	c.rotate(-15/180*pi);
	c.scale(1,0.5);
	c.beginPath();
	c.arc(0,0,60,0,2*pi,true);
	c.closePath();
	c.fillStyle="#EF652A";
	c.fill();
	c.fillStyle="white";
	c.font="20px sans-serif";
	c.rotate(40/180*pi);
	c.fillText("HTML",-40,40);
	c.restore();
}

function mouth(x,y){
	c.save();
	c.translate(x,y);
	c.beginPath();
	c.moveTo(-10,-3)
	c.lineTo(0,3);
	c.lineTo(10,-3);
	c.lineWidth=3;
	c.lineCap="round";
	c.strokeStyle="#E34F26";
	c.stroke();
	c.restore();
}

function eye(x,y,kakudo){
	c.save();
	c.translate(x,y);
	c.rotate(kakudo/180*pi);
	c.scale(1,0.5);
	c.beginPath();
	c.arc(0,0,10,0,2*pi,false);
	c.closePath();
	c.fillStyle="gray";
	c.fill();
	c.restore();
}
function face(x,y){
	c.save();
	c.translate(x,y);
	c.scale(1,0.7);
	c.beginPath();
	c.arc(0,0,80,0,2*pi,false);
	
	c.closePath();
	c.fillStyle="#FFE4C4";
	c.fill();
	//髪
	c.beginPath();
	c.arc(0,0,80,10/180*pi,170/180*pi,true);
	c.arc(0,70,60,pi,0,false);
	c.closePath();
	c.fillStyle="#ffffad";
	c.fill();
	
	c.restore();
}

function ude(x,y,x2,y2,x3,y3){
	c.save();
	c.translate(x,y);
	c.beginPath();
	c.moveTo(0,0);
	c.lineTo(x2-x,y2-y);
	c.lineTo(x3-x,y3-y);
	c.lineWidth=20;
	c.strokeStyle="#FFE4C4";
	c.stroke();
	c.beginPath();
	c.arc(x3-x,y3-y,13,0,2*pi,false);
	c.closePath();
	c.fillStyle="#FFE4C4";
	c.fill();
	c.restore();
}

function body(x,y){
	c.save();
	c.translate(x,y);
	c.fillStyle="#EF652A";
	c.beginPath();
	c.moveTo(-50,-30);
	c.lineTo(50,-30);
	c.lineTo(40,0);
	c.arc(0,-50,150,0.2*pi,0.8*pi,false);
	c.lineTo(-40,0);
	c.fill();
	c.restore();
}

function footer(x,y){
	c.save();
	c.translate(x,y);
	
	c.lineWidth=35;
	c.strokeStyle="#FFE4C4";
	c.beginPath();
	c.moveTo(0,0);
	c.lineTo(0,100);
	c.stroke();
	
	c.lineWidth=40;
	c.strokeStyle="#fff";
	c.beginPath();
	c.moveTo(0,60);
	c.lineTo(0,100);
	c.stroke();
	
	c.beginPath();
	c.arc(0,100,20,0,2*pi,false);
	c.fillStyle="#fff";
	c.fill();
	
	c.restore();
}

function hane(kakudo){
	c.save();
	c.translate(250,250);
	c.rotate(kakudo/180*pi);
	c.scale(1,0.3);
	c.beginPath();
	c.arc(100,0,100,-0,2*pi,pi,false);
	c.closePath();
	c.fillStyle="skyblue";
	c.globalAlpha=0.5;
	c.fill();
	c.globalAlpha=1;
	c.restore();
}
