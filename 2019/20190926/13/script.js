//要素の取得
const VOICESelect=document.getElementById("voiceSelect");
const LANG=document.getElementById("lang");
const MSG=document.getElementById("msg");
const RESULT=document.getElementById("result");
const BTN1=document.getElementById("btn1");
const BTN2=document.getElementById("btn2");
const BTN3=document.getElementById("btn3");


//ボイスの種類

let VOICES = speechSynthesis.getVoices();

BTN1.addEventListener("click",()=>{
	VOICES = speechSynthesis.getVoices();
	let length=VOICES.length;
	let voiceStr="<select id=voice>";
	
	for(let i=0;i<length;i++){
		if(VOICES[i]){
			if(VOICES[i].name==="Google 日本語"){
				var sel="selected"
			}else{
				var sel=""
			};
			voiceStr += "<option value="+i+" "+sel+">"+VOICES[i].name+"</option>";
			
		}
	}
	voiceStr+="</select>";
	VOICESelect.innerHTML=voiceStr;
});

//音声認識
BTN2.addEventListener("click",()=>{
	const RECOGNITION = new webkitSpeechRecognition();	//音声認識オブジェクト生成
	RECOGNITION.lang = LANG.value;	//言語設定
	RECOGNITION.start();	//認識開始
	BTN2.innerHTML="🔴認識中";
	// 終了時トリガー
	RECOGNITION.addEventListener('result', (e)=>{
		let rec = e.results.item(0).item(0).transcript;	//文字列抽出
		MSG.value=	rec;
		setTimeout(talk1,1000);	//1秒後にmySpeechを起動
		BTN2.innerHTML = "音声で呼びかける";
	});
});

var pcres="";

BTN3.addEventListener("click",talk1);

function talk1(){
	let msg =MSG.value;
	const params={
		apikey:"2Fqmk3u4lWUjbZ6ps7gPcKaRXeq3dA92",
		query:msg
	};
	
	RESULT.innerHTML
		="<p class=you>You: "+msg+"</p>"
		+RESULT.innerHTML;
	
	$.post(
		'https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk',
		params,
		(result)=>{
			if(result.status == 0) {
				pcres = result.results[0].reply;
				speech1(pcres);
			}
			RESULT.innerHTML 
				="<p class=pc>AIちゃん: "+pcres
				//+"(status:"+ result.status +"-"+
				//"message:"+result.message+")"
				+"</p>"
				+RESULT.innerHTML;
		},'json');
	
	//RESULT.scrollTop = RESULT.scrollHeight;
	return false;
};

//テキスト読み上げ
function speech1(pcres){
	let voiceSelect = parseInt(VOICESelect.value);
	PCRES = new SpeechSynthesisUtterance(pcres);
	let lang = LANG.value
	PCRES.lang = lang;
	let VOICES = speechSynthesis.getVoices();
	PCRES.voice = VOICES[voiceSelect];
	speechSynthesis.speak(PCRES);
	MSG.value="";
}
