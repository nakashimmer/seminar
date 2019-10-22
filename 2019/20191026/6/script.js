const BOARD1=document.getElementById("board1");
const BOARD2=document.getElementById("board2");
const VOL=document.getElementById("vol");

const KNAME=[
	"c<br>z",	"c#<br>s",
	"d<br>x",	"d#<br>d",
	"e<br>c",
	"f<br>v",	"f#<br>g",
	"g<br>b",	"g#<br>h",
	"a<br>n",	"a#<br>j",
	"b<br>m",
	"C<br>q",	"C#<br>2",
	"D<br>w",	"D#<br>3",
	"E<br>e",
	"F<br>r",	"F#<br>5",
	"G<br>t",	"G#<br>6",
	"A<br>y",	"A#<br>7",
	"B<br>u",
	"CC<br>i",	"CC#<br>9"
]

for(let i=0;i<KNAME.length;i++){
	if(0<KNAME[i].indexOf("#")){
		BOARD1.innerHTML += '<div class="keys" id="key-'+i+'">'+KNAME[i]+'</div>';
	}
}

for(let i=0;i<KNAME.length;i++){
	if(KNAME[i].indexOf("#")<0){
		BOARD2.innerHTML+="<div class=keys id=key-"+i+">"+KNAME[i]+"</div>";
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

var Code=[
	90,/*z-c*/	83,/*s-c#*/
	88,/*x-d*/	68,/*d-d#*/
	67,/*c-e*/
	86,/*v-f*/	71,/*g-f#*/
	66,/*b-g*/	72,/*h-g#*/
	78,/*n-a*/	74,/*j-a#*/
	77,/*m-b*/
	
	81,/*q-cc*/	50,/*2-cc#*/
	87,/*w-dd*/	51,/*3-dd#*/
	69,/*e-ee*/
	82,/*r-ff*/	53,/*5-ff#*/
	84,/*t-gg*/	54,/*6-gg#*/
	89,/*y-aa*/	55,/*u-aa#*/
	85,/*i-bb*/
	73,/*i-ccc*/	57/*9-ccc#*/
];

const BGC=[
	"white",	/*c*/	"black",	/*c#*/
	"white",	/*d*/	"black",	/*d#*/
	"white",	/*e*/
	"white",	/*f*/	"black",	/*f#*/
	"white",	/*g*/	"black",	/*g#*/
	"white",	/*a*/	"black",	/*a#*/
	"white",	/*b*/
	
	"white",	/*cc*/	"black",	/*cc#*/
	"white",	/*dd*/	"black",	/*dd#*/
	"white",	/*ee*/
	"white",	/*ff*/	"black",	/*ff#*/
	"white",	/*gg*/	"black",	/*gg#*/
	"white",	/*aa*/	"black",	/*aa#*/
	"white",	/*bb*/	
	"white",	/*ccc*/	"black" /*ccc#*/
];

window.addEventListener("keydown",(e)=>{
	let i = Code.indexOf(e.keyCode);

	VCG.gain.value=VOL.value; //音量
	let wstyle = document.getElementsByName("wstyle");
	for(let w=0;w<wstyle.length;w++){
		if (wstyle[w].checked) {
			VCO[i].type=wstyle[w].value; //音色
		}
	}
	let key = document.getElementById("key-"+i);
	key.style.backgroundColor="#666";
	key.style.color="white";
	VCO[i].start();
	f=false;
});



window.addEventListener("keyup",(e)=>{
	let i = Code.indexOf(e.keyCode);

		VCO[i].stop();
		VCO[i]=AC.createOscillator(); //音源を作る
		VCO[i].connect(VCG); //音源をボリュームにつなぐ
		VCO[i].frequency.value=HZ[i];
		let key = document.getElementById("key-"+i);
		key.style.backgroundColor=BGC[i];
		if(BGC[i]==="white"){
			key.style.color="black";
		}else{
			key.style.color="white";
		}
});