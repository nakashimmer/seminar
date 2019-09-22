const VOL=document.getElementById("vol");
const wstyle = document.getElementsByName("wstyle");
const MSG = document.getElementById("msg");

let midi;
let no;

//通信成功時
navigator.requestMIDIAccess().then(success,failure);

function success(midiAccess) {
	midi = midiAccess;
	MSG.innerHTML="MIDI READY";
	setInput(midiAccess);
}

//通信失敗時
function failure(msg) {
	console.log("MIDI FAILED - " + msg);
}

//MIDIデバイスへアクセスする

function setInput(midiAccess) {
	var inputs = midiAccess.inputs;
	inputs.forEach(
		function (key, port) {
			console.log("[" + key.state + "] manufacturer:" + key.manufacturer + " / name:" + key.name + " / port:" + port);
		key.onmidimessage = onMidiMessage;
	});
}

let noo;
function onMidiMessage(e) {
	no = e.data[1] - 60;
	if(e.data[0]===144){
		MSG.innerHTML =HZ[no];
		noo=no;
		on(no);
	}else{
		MSG.innerHTML = "not";
		off(no);
	}

}

const HZ=[
	261.63,	/*c*/	277.18,	/*c#*/
	293.66,	/*d*/	311.13,	/*d#*/
	329.63,	/*e*/
	349.23,	/*f*/	369.99,	/*f#*/
	392,	/*g*/		415.3,	/*g#*/
	440,	/*a*/		466.16,	/*a#*/
	493.88,	/*b*/
	
	523.25,	/*cc*/	554.37,	/*cc#*/
	587.33,	/*dd*/	622.25,	/*dd#*/
	659.26,	/*ee*/
	698.46,	/*ff*/	739.99,	/*ff#*/
	783.99,	/*gg*/	830.61,	/*gg#*/
	880,	/*aa*/	932.33,	/*aa#*/
	987.77,	/*bb*/	
	1046.5,	/*ccc*/	1108.73,/*ccc#*/
];

const AC=new AudioContext(); //音の元を作る
const VCG=AC.createGain(); //ボリュームを作る
const VCO=new Array()
for(let i=0;i<HZ.length;i++){
 VCO[i]=AC.createOscillator(); //音源を作る
 VCO[i].connect(VCG); //音源をボリュームにつなぐ
 VCO[i].type="sine"; //音色
 VCO[i].frequency.value=HZ[i];
}
VCG.connect(AC.destination); //出力につなぐ



function on(no){

	VCG.gain.value=VOL.value; //音量
	
	for(let w=0;w<wstyle.length;w++){
		if (wstyle[w].checked) {
			VCO[no].type=wstyle[w].value; //音色
		}
	}
	VCO[no].start();
	noo=no;
};

function off(no){
		VCO[no].stop();
		VCO[no] = AC.createOscillator(); //音源を作る
		VCO[no].connect(VCG); //音源をボリュームにつなぐ
		VCO[no].frequency.value = HZ[no];
};