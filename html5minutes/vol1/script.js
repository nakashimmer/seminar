var meter=0;
	setInterval(function(){
		document.getElementById("meter").value=meter;
		meter+=1/60;
},1000);

window.onload=function(){
	var pageNo=0;
	var pages=document.getElementsByClassName("page");
	var w=document.body.clientWidth;
	for(var i=0;i<pages.length;i++){
		pages[i].style.display="none";
		pages[i].addEventListener("click",pagemove);
	}
	pages[pageNo].style.display="-webkit-box";
	function pagemove(e){
		if(window.innerWidth*7/8<e.pageX){
			pageNo++;if(pages.length<=pageNo)pageNo=pages.length-1;
			pages[pageNo-1].style.display="none";
			pages[pageNo].style.display="-webkit-box";
		}
		if(e.pageX<window.innerWidth*1/8){
			pageNo--;if(pageNo<=0)pageNo=0;
			pages[pageNo+1].style.display="none";
			pages[pageNo].style.display="-webkit-box";
		}
		document.getElementById("meter2").value=100*(pageNo+1)/pages.length;
	}
	
	
	document.getElementById("pica").innerHTML
	='<div class=inner>'
	+'<h1>しばし癒やされてください</h1>'
	+'<div id=picakao style="border:1px solid gray">'
	+'	<div class=picaeye id=picaeye1>'
	+'		<div class=picaeyelight></div>'
	+'	</div>'
	+'	<div class=picaeye id=picaeye2>'
	+'		<div class=picaeyelight></div>'
	+'	</div>'
	+'	<div class=picahoho id=picahoho1></div>'
	+'	<div class=picahoho id=picahoho2></div>'
	+'	<div id=picahana></div>'
	+'	<div id=picakuchi></div>'
	+'	<div id=picakuchi2></div>'
	+'</div>'
	+'</div>';
	
	
	

}