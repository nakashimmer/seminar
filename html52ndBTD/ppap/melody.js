var count=0;
function interval(){
	count++;
	var onpu= key.indexOf(melody[count-1])
	play(onpu);

	$id("count").innerHTML=Math.floor(count/4);
	if(count===16+4){mySpeech(0);}
	
	if(count===16*6){mySpeech(1);anime("pen1",0,200);}
	if(count===16*7){mySpeech(2);anime("apple",200,200);}
	if(count===16*8+7){mySpeech(3);anime("pen1",100,200);anime("apple",100,200);}
	if(count===16*9+4){anime("pen1",0,440);anime("apple",0,440);}
	
	if(count===16*10){mySpeech(4);anime("pen2",200,200);}
	if(count===16*11){mySpeech(5);anime("pineapple",0,200);}
	if(count===16*12+8){mySpeech(6);anime("pen2",100,200);anime("pineapple",100,200);}
	if(count===16*13+4){anime("pen2",200,440);anime("pineapple",200,440);}
	
	if(count===16*14-1){mySpeech(7);anime("pen1",0,200);anime("apple",0,200);}
	if(count===16*15-1){mySpeech(8);anime("pen2",200,200);anime("pineapple",200,200);}
	if(count===16*16+9){mySpeech(9);anime("pen1",75,200);anime("apple",75,200);anime("pen2",125,200);anime("pineapple",125,200);}
	if(count===16*19-2){anime("pen1",0,200);anime("apple",0,200);anime("pen2",50,200);anime("pineapple",50,200);}

	if(count===16*21-2){mySpeech(10);anime("pen1",75,200);anime("apple",75,200);anime("pen2",125,200);anime("pineapple",125,200);}
	if(count===16*23-2){anime("pen1",0,-200);anime("apple",100,-200);anime("pen2",150,-200);anime("pineapple",250,-200);}
	if(melody.length<count){clearInterval(mainSet);}
}
