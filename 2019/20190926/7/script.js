//オブジェクト生成
const VOICES = speechSynthesis.getVoices();

//要素の取得
const LANG = document.getElementById("lang");
const INPUT = document.getElementById("input");


//1.音声の種類を取得してリストを作成・表示
function mkList(){
	//オブジェクト生成
	const VOICES = speechSynthesis.getVoices();
	//要素の取得
	const LIST = document.getElementById("list");
	
	let voiceStr = '<select id="voiceNo">';
	
	for(var i=0;i<VOICES.length;i++){
		if(VOICES[i]){
			let sel = "";
			if(VOICES[i].name === "Google 日本語"){sel = "selected";}
			voiceStr += "<option value="+i+" "+sel+">"+VOICES[i].name+"</option>";
		}
	}
	
	voiceStr += "</select>";
	
	LIST.innerHTML = voiceStr;
}

//テキスト読み上げ
function mySpeech(){
	const VOICES = speechSynthesis.getVoices();
	
	const VOICENO=document.getElementById("voiceNo");

	const CONTEXT = new SpeechSynthesisUtterance(INPUT.value);
	CONTEXT.lang = LANG.value;
	CONTEXT.voice = VOICES[VOICENO.value];
	speechSynthesis.speak(CONTEXT);
}

//音声認識
function nyuryoku(){
	const BTN=document.getElementById("btn");
	BTN.innerHTML="🔴録音中";

	const RECOGNITION = new webkitSpeechRecognition();	//音声認識オブジェクト生成
	const LANG=document.getElementById("lang");
	RECOGNITION.lang = LANG.value;	//言語設定
	RECOGNITION.start();	//認識開始

	// 出力
	RECOGNITION.addEventListener('result', (e)=>{
		let msg = e.results.item(0).item(0).transcript;	//文字列抽出
		
		//認識文字列を加工
		//①文字を書き換え
		msg = msg.replace("中島","イケメン中島");
		msg = msg.replace("なかしま","イケメン中島");
		//②時間を回答
		const now=new Date();
		msg = msg.replace("何時",now.getHours()+"時"+now.getMinutes()+"分です");

		INPUT.value = msg;
		BTN.innerHTML="ボタンを押して";
		setTimeout(mySpeech,1000);	//1秒後にmySpeechを起動
	});
}

