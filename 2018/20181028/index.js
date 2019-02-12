//ページ切り替えJS

const iframe = document.getElementById("iframe");
const srcs = document.getElementsByClassName("src");

let slideno = localStorage.getItem("slideno");
if(slideno){
	iframe.src=slideno+"/index.html";
}
for(let i=0;i<srcs.length;i++){
	srcs[i].addEventListener("click",()=>{
		iframe.src=i+"/index.html";
		srcs[i].style.color="gray";
		srcs[i].style.textShadow="none";
		localStorage.setItem("slideno",i);
		console.log(i);
	});
}


//