var imgsfondo;
var imgocchi;
var imgcover;

function preload(){
  // setShakeThreshold(20);//meno è grande questo numero piu sara sensibile
  imgsfondo = loadImage("/assets/giocondasfondo.jpg");
  imgocchi = loadImage("/assets/giocondaocchi.png");
  imgcover = loadImage("/assets/giocondacover.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  angleMode(DEGREES);
}

function draw() {

  // image(imgcover, 0 , 0, imgcover.width, imgcover.height)
  // image(imgocchi, 0 + map(rotationY, 0, 360, 1, width), 0 + map(rotationX, -180, 180, 1, width), imgocchi.width, imgocchi.height)
  // image(imgcover.height, 0 , 0, imgsfondo.width, imgcover.height)1290, 1920

  image(imgcover, 0 , 0, width , height);
  image(imgocchi, 0 , 0 + map(rotationX, 0, -20,0,-20, [20,20]), width , height)
  image(imgsfondo, 0 , 0, width , height);
}


function touchMoved(){
  return false;
}

function touchEnded() {
  DeviceOrientationEvent.requestPermission()
}
