noseX = 0;
noseY = 0;
load_image = "";
function preload()
{
 load_image = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup()
{
 canvas = createCanvas(400,300);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();

 pose_net = ml5.poseNet(video, modelLoaded);
 pose_net.on('pose',gotPoses);
}

function draw()
{
 image(video,0,0,400,300);
 image(load_image,noseX,noseY,30,30);
}

function modelLoaded()
{
    console.log('Model Has Been Loaded');
}

function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
        noseX = results[0].pose.nose.x-150;
        noseY = results[0].pose.nose.y-80;
    }
    
}

