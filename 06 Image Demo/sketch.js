//image demo

let lionL, lionR;


function preload(){
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");



}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(lionL, mouseX, mouseY);
  imageMode(CENTER);
  noCursor();



}
