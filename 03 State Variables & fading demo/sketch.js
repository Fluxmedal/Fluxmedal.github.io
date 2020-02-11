// Project Title\\
// Your Name\\
// Date\\
//\\
// Extra for Experts:\\
// - describe what you did to take this project "above and beyond"\\

let onLeft, onRight; //boolean state variable\\



function setup() 
{
  createCanvas(windowWidth, windowHeight);
  onLeft = true;
  onRight= false;





}


function updateCurrentSide()
{
  //Update the state variables to represent which side of the canvas the mouse cursor is presently on\\
  if (mouseX < width/2){
  //mouse on left\\
    onLeft = true;
    onRight = false;
  }
  else
  {
    //mouse is on the right\\
    onRight = true;
    onLeft = false;
  }



}


function renderRectangles()
{
//draw two rectangles of varying fill values on the screen\\
  if(onLeft)
{
  //onleft === true
    fill(0,);
}
  else {fill(255);}
  rect(0,0,width/2,height);
  rect(width/2,0, width/2,height);
  if(onRight)
  {
    fill(0);

  }
  else
  { 
    fill (255)
  }
}


function draw() 
{
  background(220);
  updateCurrentSide();
  print("Left: " + onLeft + "    Right: " + onRight);
  renderRectangles();






}
