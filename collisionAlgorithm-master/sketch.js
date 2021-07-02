var pacman, pacImage, blueGhost, roseGhost, redGhost, yellowGhost;
var yellowImage, roseImage, redImage, blueImage, food, foodImage;
var power, powerImage, ghostRunImage;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;

function preload(){
  pacImage = loadImage("IMAGES/pac-man.png");
  yellowImage = loadImage("IMAGES/yellow ghost.png");
  roseImage = loadImage("IMAGES/rose ghost.png");
  redImage = loadImage("IMAGES/red ghost.png");
  blueImage = loadImage("IMAGES/blue ghost.png");
  foodImage = loadImage("IMAGES/food image.png");
  powerImage = loadImage("IMAGES/food image.png");
  ghostRunImage = loadImage("IMAGES/ghost image while it is chased.png");
}


function setup() {
  createCanvas(displayWidth,displayHeight);

  
}

function draw() {
  background(0,0,0);  
  console.log(mouseX,mouseY);
 
  
  drawSprites();
}