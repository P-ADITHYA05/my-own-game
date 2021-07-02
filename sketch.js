var pacman, pacImage, blueGhost, roseGhost, redGhost, yellowGhost;
var yellowImage, roseImage, redImage, blueImage, food, foodImage;
var power, powerImage, ghostRunImage;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;
var m11,m12,m13,m14,m15,m16,m17,m18,m19,m20,m21,m22,m23,m24,m25,m26,m27,mazeGroup;
var edges, foodGroup;
var score = 0;

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
  createCanvas(displayWidth,displayHeight-100);
  

  edges = createEdgeSprites();

  mazeGroup = new Group();
    spawnMaze();
  

   blueGhost = createSprite(80,100);
   blueGhost.addImage(blueImage);
   blueGhost.scale = 0.15;
   blueGhost.velocityX = Math.round(random(6,10));
   blueGhost.velocityY = Math.round(random(5,8));

   //create red ghost sprite
   redGhost = createSprite(width-80,100);
   redGhost.addImage(redImage);
   redGhost.scale = 0.15;
   redGhost.velocityX = Math.round(random(5,8));
   redGhost.velocityY = Math.round(random(3,6));

   //create rose ghost sprite
   roseGhost = createSprite(80,height-100);
   roseGhost.addImage(roseImage);
   roseGhost.scale = 0.15;
   roseGhost.velocityX = Math.round(random(5,8));
   roseGhost.velocityY = Math.round(random(3,6));

   //create yellow ghost sprite
   yellowGhost = createSprite(width-80,height-100);
   yellowGhost.addImage(yellowImage);
   yellowGhost.scale = 0.15;
   yellowGhost.velocityX = Math.round(random(5,8));
   yellowGhost.velocityY = Math.round(random(3,6));

   foodGroup = new Group();

  for(var i =  180; i<=1200; i = i+50){
     var food1 = createSprite(i,744)
     food1.addImage(foodImage);
     food1.scale = 0.1
     foodGroup.add(food1);
   }

  for(var j =  180; j<=1900; j = j+50){
    var food2 = createSprite(j,644)
    food2.addImage(foodImage);
    food2.scale = 0.1
    foodGroup.add(food2);
  }

  for(var a =  180; a<=1200; a = a+50){
    var food3 = createSprite(a,270)
    food3.addImage(foodImage);
    food3.scale = 0.1
    foodGroup.add(food3);
  }

  for(var b =  180; b<=1900; b = b+50){
    var food4 = createSprite(b,144)
    food4.addImage(foodImage);
    food4.scale = 0.1
    foodGroup.add(food4);
  }

  for(var c =  180; c<=1900; c = c+50){
    var food5 = createSprite(c,34)
    food5.addImage(foodImage);
    food5.scale = 0.1
    foodGroup.add(food5);
  }

  for(var d =  130; d<=1750; d = d+50){
    var food6 = createSprite(d,891)
    food6.addImage(foodImage);
    food6.scale = 0.1
    foodGroup.add(food6);
  }

  for(var e =  34; e<=900; e = e+50){
    var food7 = createSprite(50,e);
    food7.addImage(foodImage);
    food7.scale = 0.1
    foodGroup.add(food7);
  }

  for(var f =  88; f<=926; f = f+50){
    var food8 = createSprite(1880,f);
    food8.addImage(foodImage);
    food8.scale = 0.1
    foodGroup.add(food8);
  }

  for(var g =  180; g<=830; g = g+50){
    var food9 = createSprite(1300,g);
    food9.addImage(foodImage);
    food9.scale = 0.1
    foodGroup.add(food9);
  }

  for(var h =  184; h<=850; h = h+50){
    var food10 = createSprite(1389,h);
    food10.addImage(foodImage);
    food10.scale = 0.1
    foodGroup.add(food10);
  }
  
  for(var k =  1420; k<=1820; k = k+50){
    var food11 = createSprite(k,523);
    food11.addImage(foodImage);
    food11.scale = 0.1
    foodGroup.add(food11);
  }

  for(var l =  700; l<=1180; l = l+50){
    var food12 = createSprite(l,505);
    food12.addImage(foodImage);
    food12.scale = 0.1
    foodGroup.add(food12);
  }

  for(var m =  688; m<=1160; m = m+50){
    var food13 = createSprite(m,363);
    food13.addImage(foodImage);
    food13.scale = 0.1
    foodGroup.add(food13);
  }

  for(var n =  270; n<=570; n = n+50){
    var food14 = createSprite(n,375);
    food14.addImage(foodImage);
    food14.scale = 0.1
    foodGroup.add(food14);
  }

  for(var o =  270; o<=570; o = o+50){
    var food15 = createSprite(o,500);
    food15.addImage(foodImage);
    food15.scale = 0.1
    foodGroup.add(food15);
  }

  for(var p =  300; p<=530; p = p+50){
    var food16 = createSprite(160,p);
    food16.addImage(foodImage);
    food16.scale = 0.1
    foodGroup.add(food16);
  }

  pacman = createSprite(1182,360);
  pacman.addImage(pacImage);
  pacman.scale = 0.2
  

}

function draw() {
  background(0,0,0);  
  console.log(mouseX,mouseY);
  
  //bounceOff all ghost from mazeGroup and edges
  blueGhost.bounceOff(mazeGroup);
  blueGhost.bounceOff(edges);

  redGhost.bounceOff(mazeGroup);
  redGhost.bounceOff(edges);

  roseGhost.bounceOff(mazeGroup);
  roseGhost.bounceOff(edges);

  yellowGhost.bounceOff(mazeGroup);
  yellowGhost.bounceOff(edges);

  if(keyDown(UP_ARROW)){
    pacman.velocityY=pacman.velocityY-4
  }

  if(keyDown(DOWN_ARROW)){
    pacman.velocityY=pacman.velocityY+4
  }

  if(keyDown(RIGHT_ARROW)){
    pacman.velocityX=pacman.velocityX+4
  }

  if(keyDown(LEFT_ARROW)){
    pacman.velocityX=pacman.velocityX-4
  }

  for(var i = 0; i<foodGroup.length; i++){if(pacman.isTouching(foodGroup.get(i))){
    foodGroup.get(i).destroy();
    score = score+20
  }}

  pacman.bounceOff(mazeGroup);
  pacman.bounceOff(edges);

  if(pacman.isTouching(blueGhost)){
    pacman.destroy();
    blueGhost.destroy();
    roseGhost.destroy();
    redGhost.destroy();
    yellowGhost.destroy();
    textSize(50)
    text("score:"+score,width/2-100,height/2)
    text("you lose",width/2-50,height/2-100)
  }

  if(pacman.isTouching(roseGhost)){
    pacman.destroy();
    blueGhost.destroy();
    roseGhost.destroy();
    redGhost.destroy();
    yellowGhost.destroy();
    textSize(50)
    text("score:"+score,width/2-100,height/2)
    text("you lose",width/2-50,height/2-100)
  }

  if(pacman.isTouching(redGhost)){
    pacman.destroy();
    blueGhost.destroy();
    roseGhost.destroy();
    redGhost.destroy();
    yellowGhost.destroy();
    textSize(50)
    text("score:"+score,width/2-100,height/2)
    text("you lose",width/2-50,height/2-100)
  }

  if(pacman.isTouching(yellowGhost)){
    pacman.destroy();
    blueGhost.destroy();
    roseGhost.destroy();
    redGhost.destroy();
    yellowGhost.destroy();
    textSize(50)
    text("score:"+score,width/2-100,height/2)
    text("you lose",width/2-50,height/2-100)
  }

  
  
  drawSprites();
}