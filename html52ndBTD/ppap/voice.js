function mySpeech(i){
	var input = $id("input"+i).value;
	var voice = parseInt("alex");
	var input = new SpeechSynthesisUtterance(input);
	var lang = "en-US"
	input.lang = lang;
	var voices = speechSynthesis.getVoices();
	input.voice = voices[voice];
	speechSynthesis.speak(input);
	
	if(0<i){
		$id("input"+(i-1)).style.backgroundColor="white";
		$id("input"+(i-1)).style.color="black";
	}
	$id("input"+(i)).style.backgroundColor="gray"
	$id("input"+(i)).style.color="white";
}

function noteChange(){
	$id("input0").value="HTML5"
	$id("input1").value="I have a Happy."
	$id("input2").value="I have a Birthday."
	$id("input3").value="ah! Happy Birthday."
	$id("input4").value="I have a HTML."
	$id("input5").value="I have a five."
	$id("input6").value="ah! HTML5."
	$id("input7").value="Happy Birthday."
	$id("input8").value="HTML5."
	$id("input9").value="ah! Happy Birthday HTML5."
	$id("input10").value="Happy Birthday HTML5."
	$id("pen1").innerHTML="❤"
	$id("pen1").style.color="red"
	$id("apple").innerHTML="🎂"
	$id("pen2").innerHTML="<img src='logo.png'>"
	$id("pen2").style.zIndex="2";
	$id("pineapple").innerHTML="5"
	$id("pineapple").style.zIndex="3";
	
}