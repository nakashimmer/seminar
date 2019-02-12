var voices = speechSynthesis.getVoices();

function mySpeech(str){
	var msg = new SpeechSynthesisUtterance(str);
	msg.lang = "ja-JP";
	var voices = speechSynthesis.getVoices();
	speechSynthesis.speak(msg);
	
}

