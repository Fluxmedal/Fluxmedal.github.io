// This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
// http://www.learningprocessing.com
// Refactor the following code. Be sure the refactored version:
//  - is readable
//  - is able to work easily with any canvas size
let pageSizeX = 480;
let pageSizeY = 270;
function setup() {
  createCanvas(pageSizeX, pageSizeY);
}

function rectangle(){ // draw and determine wether the mouse is in the rectangle
  noStroke();
  fill(0);
  if (mouseX < 240 && mouseY < 135){
    rect(0, 0, 240, 135);
  }
  else if (mouseX > 240 && mouseY < 135){
    rect(240,0,240,135);
  }
  else if (mouseX < 240 && mouseY > 135){
    rect(0,135,240,135);
  }
  else if (mouseX > 240 && mouseY > 135){
    rect(240,135,240,135);
  }

}

function draw() {
  background(255); // draw two lines and set stroke to 0
  stroke(0);
  line(240, 0, 240, 270);
  line(0, 135, 480, 135);
  rectangle();
}