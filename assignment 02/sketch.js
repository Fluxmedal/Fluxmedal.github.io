// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//if it doesnt look right put it into full screen and refresh the page
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
  if (mouseX > 0 && mouseY > 0 && mouseX < 1280 && mouseY <638)
    return "hi";
}



function renderSquares(){
  
  rect(0,0, width/2, height/2);//top left
  
  rect(0, 640, width/2, height/2);//bottom left
  
  rect(1280, 0, width/2, height/2);//top right
  
  rect(1280, 640, width/2, height/2);//bottom right
  


}



function draw() {
  background(220);
  renderSquares();

}
