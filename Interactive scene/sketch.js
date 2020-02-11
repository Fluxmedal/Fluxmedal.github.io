// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let r,g,b;
r = 0;
g = 255;
b = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);

  


}




function draw(stickman)//stickman
{
  background(0,100,175 );
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
}