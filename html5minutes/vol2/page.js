var nowpage=0;
function page(){

	if(bar==0){
		$("p1").style.left="0";
	}
	
	if(bar==4){
		$("p1").style.left="-1500px";
		nowpage=4;
		$("btn1").style.display="none";
	}

	if(4<=bar && bar%4==0 
		&& bar!=76 && bar!=80 && bar!=84
		&& bar!=108 && bar!=112 && bar!=116
		&& bar!=124 && bar!=128 && bar!=132 && bar!=136
	){
		$("p"+nowpage).style.left="-2000px";
		$("p"+bar).style.left="0";
		nowpage=bar;
	}
	
	
	if(bar ==28){document.getElementById("kidou").play();}
	if(bar ==72){document.getElementById("nyuryoku").play();}
	if(bar ==104){document.getElementById("sim").play();}
	if(bar ==124){document.getElementById("finish").play();}
	
	if(bar ==48){document.getElementById("kidou").pause();}
	if(bar ==92){document.getElementById("nyuryoku").pause();}
	if(bar ==114){document.getElementById("sim").pause();}



}