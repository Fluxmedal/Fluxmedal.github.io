// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

float montecarlo(){

    while (true) {
      float r1 = random(1);
      float probability = r1
      float r2 = random(1);
      if (r2 < probability) {
        return r1;
      }
    }
  }


float t = 3;


function draw() {
  background(220);
  float n = noise(t);
  println(n);
}
