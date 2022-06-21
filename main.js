noseX=0;
noseY=0;
LwristX=0;
RwristY=0;

difference=0;



function setup(){
    
    video=createCapture(VIDEO);
    video.size(550, 550);

    canvas=createCanvas(550, 550);
    canvas.position(550, 150);

    poseNet= ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}

function modelLoaded(){

console.log("Posenet model loaded");
}

function gotPoses(results){

    if (results.length > 0) {

        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        LwristX=results[0].pose.leftWrist.x;
        RwristX=results[0].pose.rightWrist.x;

        difference=floor(LwristX - RwristX);

        console.log("Nose X =  " + noseX);
        console.log("Nose Y =  " + noseY);
        console.log("Left Wrist X =  " + LwristX);
        console.log("Right wrist X = " + RwristX);
        console.log("The diffrence between left wrist and right wrist is =   " +  difference);

    }
}


function draw() {

    background('#00e03c');
    document.getElementById('square_side').innerHTML = "The width and height of this square is:  " + difference + "px";
    fill('#0af5e5');
    stroke('black');
    square(noseX, noseY, difference);
}