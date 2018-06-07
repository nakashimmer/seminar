function page(){
	if(bar== 8){
		$("p1").style.display="-webkit-box";
	}
	
	if(bar== 24){
		$("p1").style.display="none";
		$("p15").style.display="-webkit-box";
	}
	
	if(bar== 33){
		$("p15").style.display="none";
		$("p1").style.display="-webkit-box";
	}
	
	if(bar==84){
		$("p1").style.display="none";
		$("p2").style.display="-webkit-box";
		$("html").style.background="white";
		fColor="black";
	}
	if(bar==103){
		$("p2").style.display="none";
		$("p3").style.display="-webkit-box";
		$("html").style.background="white";
		fColor="black";
	}
	
	if(bar==111){
		$("p15").style.display="-webkit-box";
		$("p3").style.display="none";
		$("html").style.background="-webkit-gradient(linear,left top,left bottom,from(white),to(skyblue))";
		fColor="black";
	}

}