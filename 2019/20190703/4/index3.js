/** 
* @license
* Copyright Copyright 2018 Google Inc. All Rights Reserved.
* Apache License Version 2.0（「本ライセンス」）に基づいてライセンスされます。
* あなたがこのファイルを使用するためには、本ライセンスに従わなければなりません。
* 本ライセンスのコピーは下記の場所から入手できます。
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* 適用される法律または書面での同意によって命じられない限り、
* 本ライセンスに基づいて頒布されるソフトウェアは、明示黙示を問わず、
* いかなる保証も条件もなしに「現状のまま」頒布されます。
* 本ライセンスでの権利と制限を規定した文言については、本ライセンスを参照してください。
*/
/*
* このプログラムは
* https://github.com/tensorflow/tfjs-models/tree/master/posenet/demos
* および
* https://github.com/tensorflow/tfjs-models/blob/master/posenet/demos/camera.js
* をもとに作成しました。
*/
/*
このファイルは、随時改変しています。
*/


const imageScaleFactor = 0.2;
const outputStride = 16;
const flipHorizontal = false;
const stats = new Stats();
const contentWidth = 800;
const contentHeight = 600;

bindPage();

async function bindPage() {
	const net = await posenet.load();
	let video = await loadVideo();
	detectPoseInRealTime(video, net);
}

async function loadVideo() {
	const video = await setupCamera();
	video.play();
	return video;
}

async function setupCamera() {	
	const video = document.getElementById('video');
	
	if (
		navigator.mediaDevices && 
		navigator.mediaDevices.getUserMedia){
			const stream 
			= await navigator.mediaDevices.getUserMedia({
				'audio': false,
				'video': true
		});
    video.srcObject = stream;
    return new Promise(
			resolve => {
				video.onloadedmetadata = () => {
				resolve(video);
      	};
      }
		);
  } else {
		const errorMessage = "ブラウザかカメラがNGです。";
		alert(errorMessage);
		return Promise.reject(errorMessage);
	}
}


const data = document.getElementById('data');

function detectPoseInRealTime(video, net) {
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
  const flipHorizontal = true;

  async function poseDetectionFrame() {
    stats.begin();
    let poses = [];
    const pose = await net.estimateSinglePose(
			video, 
			imageScaleFactor, 
			flipHorizontal, 
			outputStride
		);
    poses.push(pose);

    ctx.clearRect(0, 0, contentWidth,contentHeight);

    ctx.save();
    ctx.scale(-1, 1);
    ctx.translate(-contentWidth, 0);
  //  ctx.drawImage(video, 0, 0, contentWidth, contentHeight);
    ctx.restore();

		poses.forEach(({ s, keypoints }) => {
			drawLine(keypoints[3], keypoints[4], ctx, "green",150);//輪郭

			drawArc(keypoints[0], ctx,"yellow",20);//鼻
			drawArc(keypoints[1], ctx, "blue",30);//右目
			drawArc(keypoints[2], ctx, "blue",30);//左目

			drawLine(keypoints[5], keypoints[6], ctx, "gray", 50);//肩
			drawLine(keypoints[5], keypoints[7], ctx, "gray",10);//腕1
			drawLine(keypoints[6], keypoints[8], ctx, "gray",10);//腕1
			drawLine(keypoints[7], keypoints[9], ctx, "gray",10);//腕2
			drawLine(keypoints[8], keypoints[10], ctx, "gray",10);//腕2
/*
			drawLine(keypoints[5], keypoints[12], ctx, "gray", 50);//脇腹1
			drawLine(keypoints[6], keypoints[11], ctx, "gray", 50);//脇腹1

			drawLine(keypoints[11], keypoints[13], ctx, "black",10);
			drawLine(keypoints[12], keypoints[14], ctx, "black",10);
			drawLine(keypoints[13], keypoints[15], ctx, "black",10);
			drawLine(keypoints[14], keypoints[16], ctx, "black",10);
			*/
		});

		stats.end();
		requestAnimationFrame(poseDetectionFrame);
	}
	poseDetectionFrame();
}

let r = 1;

function drawArc(point,ctx,color,width){
    ctx.beginPath();
		ctx.fillStyle = color;
    ctx.arc(
			Math.floor(point.position.x / r) * r, 
			Math.floor(point.position.y / r) * r,
			width,0,2*Math.PI,false);
		ctx.fill();
	console.log(point.position.x);
}

function drawLine(point1,point2,ctx,color,width) {
	ctx.beginPath();
	ctx.line = color;
	ctx.strokeStyle = color;
	ctx.lineWidth=width;
	ctx.lineCap="round";
	ctx.lineTo(
		Math.floor(point1.position.x/r)*r,
		Math.floor(point1.position.y / r) * r);
	ctx.lineTo(
		Math.floor(point2.position.x / r) * r,
		Math.floor(point2.position.y / r) * r);
	ctx.stroke();	
}




