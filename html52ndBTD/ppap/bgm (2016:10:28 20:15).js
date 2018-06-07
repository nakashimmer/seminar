var key=[
"c",	"c#",	"d",	"d#",	"e",	"f",	"f#",	"g",	"g#",	"a",	"a#",	"b",
"cc",	"cc#",	"dd",	"dd#",	"ee",	"ff",	"ff#",	"gg",	"gg#",	"aa",	"aa#",	"bb",
"ccc",	"ccc#",	"n"
]
var hz=[
	261.63,	//c
	277.18,	//c#
	293.66,	//d
	311.13,	//d#
	329.63,	//e
	349.23,	//f
	369.99,	//f#
	392,	//g
	415.3,	//g#
	440,		//a
	466.16,	//a#
	493.88,	//b	
	523.25,	//cc
	554.37,	//cc#
	587.33,	//dd
	622.25,	//dd#
	659.26,	//ee
	698.46,	//ff
	739.99,	//ff#
	783.99,	//gg
	830.61,	//gg#
	880,		//aa
	932.33,	//aa#
	987.77,	//bb	
	1046.5,	//ccc
	1108.73,	//ccc#
	0				//n
];

var keyHz=new Array();
for(var i=0;i<hz.length;i++){
	keyHz[key[i]]=hz[i];
}

var ac=new AudioContext(); //音の元を作る
var vcg=ac.createGain(); //ボリュームを作る
var vco=new Array()
for(var i=0;i<hz.length;i++){
 vco[i]=ac.createOscillator(); //音源を作る
 vco[i].connect(vcg); //音源をボリュームにつなぐ
 vco[i].frequency.value=hz[i];
 vco[i].type="triangle"; //音色 sine,square,triangle,sawtooth
}
vcg.connect(ac.destination); //出力につなぐ



clearInterval(mainSet)
var mainSet;
function start(){
	mainSet=setInterval(interval,120);
}
var ptn1=["ccc#","n",	"bb","n",		"gg#","n","ff#","n",
					"cc#","n",		"b","n",	"g#","n",	"f#","n"];
var ptn2=["c#","n","cc#","n","n","n","cc#","n",];
var ptn3=["n","n","g#","n","b","n","cc","n"];
var ptn4=["c#","n","n","n","c#","n","n","n"];

var ptn5=["cc#","dd","dd#","ee","ff","ff#","gg","gg#","aa","aa#","bb","ccc","ccc#"];
var ptn6=["n","n","n","n","n","n","n","n"];
var melody=
	ptn1.concat(
	ptn6.concat(ptn6.concat( //PPAP
	ptn2.concat(ptn2.concat(ptn2.concat(ptn3.concat( //前奏
	ptn2.concat(ptn2.concat(ptn2.concat(ptn3.concat( //前奏
	
	ptn2.concat(ptn2.concat(ptn2.concat(ptn3.concat( //i have a pen i have a apple
	ptn2.concat(ptn2.concat(ptn2.concat(ptn3.concat( //ah! apple pen
	
	ptn2.concat(ptn2.concat(ptn2.concat(ptn3.concat( //i have a pen i have a pineapple
	ptn2.concat(ptn2.concat(ptn2.concat(ptn3.concat( //ah! pineapple pen
	
	ptn4.concat(ptn4.concat(ptn4.concat(ptn4.concat( //apple pen pineapple pen
	ptn6.concat(ptn6.concat(ptn6.concat(ptn6.concat(//Pen pineapple apple pen 
	
	ptn2.concat(ptn2.concat(ptn2.concat(ptn3.concat( //間奏
	ptn2.concat(ptn2.concat(ptn6.concat(ptn6.concat( //Pen pineapple apple pen 
	ptn6.concat(ptn5))))))))))))))))))))))))))))))))))))))))))));


var nn=0;
function play(n){
	vco[n]=ac.createOscillator(); //音源を作る
	vco[n].connect(vcg); //音源をボリュームにつなぐ
	vco[n].frequency.value=hz[n];
	vco[n].type="triangle"
	vco[n].start();
	if(n!==26){
		$id("d"+n).innerHTML="●";
		$id("d"+n).style.color="yellow";
	}
	nn=n;
	setTimeout(function(){
		vco[n].stop();
		if(n!==26){
			$id("d"+n).innerHTML="◯";
			$id("d"+n).style.color="white";
		}
	},120);
}
