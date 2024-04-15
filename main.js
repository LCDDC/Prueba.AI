nosex = 0;
nosey = 0;
difference = 0;
rightwristx = 0;
leftwristx = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 550);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("poseNet esta inicializado");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nosex = "+nosex+"nosey = "+nosey);
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx-rightwristx);
    }
}
function draw(){
    background("lavand")
    document.getElementById("square_side").innerHTML = "El ancho y el alto del cuadrado sera: "+difference+"px";
    fill("lightgreen");
    stroke("lime");
    circle(nosex,nosey,difference)
}