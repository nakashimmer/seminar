//初期設定：id=bg~の位置と画像のポジションを設定する

for(var i=0;i<20;i++){
	var id="bg"+i;

	$id(id).style.transform
		="rotateY("+(-i*(360/20))+"deg) "
		+"translateZ(-312px)";

	$id(id).style.backgroundPosition
		=(0-100*(i-1))+"px";

}