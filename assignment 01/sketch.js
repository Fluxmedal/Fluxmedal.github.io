// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let r2,g2,b2;
r2 = 255;
g2 = 255;
b2 = 0;


let r,g,b;
r = 0;
g = 255;
b = 0;

let eye = 0;

  
function setup() {
  createCanvas(windowWidth, windowHeight);
  text("Jason Rendle", 1000, 1000, 1100, 1100);


}




function draw(stickman){//stickman{
  
  background(0,100,175 );
  fill(255,255,255);
  fill (r2,g2,b2);
  ellipse(2258,173,200,200);
  fill(255,255,255);
  ellipse(mouseX+250,mouseY+200,200,200); //add mouseX + number and mouseY + number
  fill (r,g,b);
  ellipse(mouseX+233,mouseY+175,20,20);
  ellipse(mouseX+272,mouseY+175,20,20);
  line(mouseX+249,mouseY+300,mouseX+249,mouseY+397);
  strokeWeight(4);
  line(mouseX+248,mouseY+397,mouseX+201,mouseY+470);
  line(mouseX+248,mouseY+397,mouseX+288,mouseY+470);
  line(mouseX+248,mouseY+328,mouseX+196,mouseY+352);
  line(mouseX+248,mouseY+328,mouseX+296,mouseY+353);
  line(mouseX+227,mouseY+272,mouseX+277,mouseY+266);
  rect(0,1000,3080,1000);
  
  
}


function keyPressed(){
  if ( keyCode === 38){
    
    r = 0;
    g = 255;
    b = 0;
    eye = eye +1;
    
  }
  if (keyPressed){
    if (eye > 3){
      eye = 0;
    }
    if (keyCode === 38){
      if (eye === 0){
        r = 0;
        g = 255;
        b = 0;
        eye = eye ++;
      }
      if (eye === 1){
        r = 255;
        g = 0;
        b = 0;
        eye = eye ++;
      }
      if (eye === 2){
        r = 0;
        g = 0;
        b = 255;                     
      }         
    }
  }
}
