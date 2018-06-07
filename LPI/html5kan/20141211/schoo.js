function $(id){return document.getElementById(id);}

var topPos=0;

function next(d){
	topPos-=520*d;
	$("top").style.marginTop=topPos+"px";
	
	
}