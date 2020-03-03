// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let onLeft, onRight, topLeft, topRight;
let leftFade = 0;
let rightFade = 0;
let topLeftfade = 0;
let topRightFade = 0;
const FADE_SPEED = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function updateCurrentSide(){
 
  
}

function mouseLocation(){
  if (mouseX < 630 && mouseY < 350) // top left

}

if (mouseX < 630 && mouseY > 350){

  
}

function renderSquares(){
  
  rect(0,0, width/2, height/2);//top left
  
  rect(0, 640, width/2, height/2);//bottom left
  
  rect(640, 0, width/2, height/2);//top right
  
  rect(640, 640, width/2, height/2);//bottom right
  


}



function draw() {
  background(220);
  renderSquares();

}
