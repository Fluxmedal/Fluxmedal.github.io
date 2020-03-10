// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let redTime = 10;
let redSpeed = 0.01;


function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  //drawCircle();
}


function drawCircle(){
  for (let x = 0; x < width; x+= 25){
    for (let y =0; y < height; y += 25){
      ellipse(x, y, 25, [25]);
      let r = map(noise(redTime),0,1,0,255);
      fill (r,0,0);
      ellipse(x,y,25,25);
      redTime += redSpeed;
    }
  }
}


function draw() {
  redTime = 10;
  background(220);
  drawCircle();
  
}
