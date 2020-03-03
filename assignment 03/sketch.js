// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSpacing = 60;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  rectGrid();
}

function mouseClicked(){
  if (mouseButton === LEFT){
    gridSpacing = gridSpacing ++;
    redraw;
  }

}




function rectGrid(){
  for (let y = gridSpacing; y < height; y+=gridSpacing){
    for (let x = gridSpacing; x < width; x+=gridSpacing){
      let size = (gridSpacing, gridSpacing);
      rect(x,y,size,size);
    }
  }
}


function draw() {
  background(220);
  rectGrid();
  
}
