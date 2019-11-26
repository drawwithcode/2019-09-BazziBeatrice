var imgsfondo;
var imgocchi;
var imgcover;

function preload(){

  imgsfondo = loadImage("/assets/bg.png");
  imgocchi = loadImage("/assets/eyes.png");
  imgcover = loadImage("/assets/cover2.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  angleMode(DEGREES);
}

function draw() {
//gli occhi seguono fino ad un tot di spostamento
  image(imgsfondo, 0 , 0, width , height);
  image(imgocchi, 0 + map(rotationY, -180, 180, -20, 20 ), 0 + map(rotationX, -180, 180, -20, 20 ) , width , height)
  image(imgcover, 0 ,0 , width , height);
}


function touchMoved(){
  return false;
}

function touchEnded() {
  DeviceOrientationEvent.requestPermission()
}
