//ページ切り替えJS

const iframe = document.getElementById("iframe");
const srcs = document.getElementsByClassName("src");

let slideno = localStorage.getItem("slideno");
if(slideno){
	iframe.src=slideno+"/index.html";
}
for(let i=0;i<srcs.length;i++){
	srcs[i].addEventListener("click",()=>{
		iframe.src = srcs[i].getAttribute("id")+"/index.html";
		srcs[i].style.color="#fff";
		srcs[i].style.textShadow="none";
		localStorage.setItem("slideno", srcs[i].getAttribute("id"));
	});
}


//video
const CANVAS = document.getElementById("canvas");
const VIDEO = document.getElementById("video");
let t=true;
VIDEO.addEventListener("click",()=>{
	if(t){
		VIDEO.style.transform = "translate(-200px,150px) scale(3,3)";
		t=false;
	}else{
		VIDEO.style.transform = "translate(0px,0px) scale(1,1)";
		t = true; 
	}
});