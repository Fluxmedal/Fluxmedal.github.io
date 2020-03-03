// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  push();
  translate(width/2, height/2);
  ellipseMode(CENTER);
  strokeWeight(4);
  stroke(0,0,0);
  ellipse(0,0,width*.4,width *.4);

  for(let i =0; i <60; i++){
    if(i%5===0){
      strokeWeight(4);
      line(width*.15,0,width*.19,0);
    }
    else{
      strokeWeight(2);
      line(width*.16,0,width*.19,0);
    }
    
    rotate(radians(6));
  }
  
  stroke(255,0,0);
  strokeWeight(2);
  line(0,0,width*.19,0);
  pop();
}

