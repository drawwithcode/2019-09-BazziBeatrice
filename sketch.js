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

  var myText = "NOT ALL THEY SAY IS FALSE:";
  var myText2 = "THIS EYES FOLLOW YOU";

  textFont("Cormorant Garamond");
  textAlign(CENTER);
  textSize(60);
  fill(233,216,157);
  text(myText, width/2, height/1.3);
  text(myText2, width/2, height/1.25);

}


function touchMoved(){
  return false;
}

function touchEnded() {
  DeviceOrientationEvent.requestPermission()
}
