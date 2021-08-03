nosex = "";
nosey = "";
eye1x = "";
eye2x = "";
eye1y = "";
earrx = "";
earry = "";
earlx = "";
early = "";
difference = "";
function preload(){
    img1 = loadImage("https://i.postimg.cc/C5qRBGHz/download-removebg-preview.png");
    img2 = loadImage("sunglasses-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(800, 533);
    canvas.position(250, 200);
    video = createCapture(VIDEO);
    video.size(800, 533)
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotresult);
}
function draw(){
    image(video, 0, 0, 800, 533);
    if(document.getElementById("filter1").value == "mustache"){
        image(img1, nosex - 50 , nosey + 10, 100, 50);
    }else if(document.getElementById("filter1").value == "sunglasses"){
        image(img2, eye1x - 150 , eye1y - 230, 400, 500);
    }
}
function modelLoaded(){
    console.log("posenet is enabled");
}
function gotresult(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        eye1x = results[0].pose.rightEye.x;
        eye2x = results[0].pose.leftEye.x;
        eye1y = results[0].pose.rightEye.y;
        earrx = results[0].pose.rightEar.x;
        earry = results[0].pose.rightEar.y;
        earlx = results[0].pose.leftEar.x;
        early = results[0].pose.leftEar.x;
        difference = eye2x - eye1x;
    }
}