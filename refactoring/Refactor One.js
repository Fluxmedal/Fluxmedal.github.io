let a,b,c,d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  a=200; b=300; c=random(3,8); d=random(3,8);
}

function parrimeters(){
  a+=c; b+=d;
  if (b>=height-75||b<=0){ //determines wether b is either bigger or equal to the height -75 or lesser than or eqal to 0
    d=d*-1; // if true d becomes negetive
  }
  if (a>=width-250||a<=0){ // determines wether a is bigger or equal to width -250 or a lesser than or equal to 0
    c=c*-1;// if true d become negetive and bounces the other way
  }
}

function draw() {
  parrimeters();
  background(80,80,80); // sets  background color
  rect(a,b,250,75); //draws rectangle using a and b to for location
}