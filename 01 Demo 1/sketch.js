// Project Title\\
// Your Name\\
// Date\\
//\\
// Extra for Experts:\\
// - describe what you did to take this project "above and beyond"\\


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  print(framecount);
  fill(0,0,0);
  background(220);
  ellipse(mouseX, mouseY, 40, 40)
}

function mouseIsPressed(){
  if (r === 0){
    r = 255;
  } 
  else{
    r = 0;
  }

}