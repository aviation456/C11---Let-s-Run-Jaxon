var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var nice
var niceImg

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  niceImg = loadAnimation("energyDrink.png","energyDrink.png","coin.png","coin.png", "bomb.png")
}

function setup(){
  
createCanvas(400,400);
  

path=createSprite(195,195);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

nice = createSprite(300,100,50,50);
nice.addAnimation("Celebration", niceImg)
nice.scale = 0.3


boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  

  if(path.y > 400 ){
    path.y = height/2;
  }
  if(keyIsDown(RIGHT_ARROW)){
    boy.y += 200
    if(boy.y >= 0){
      boy.x = 180
      boy.y = 340
    }

  }
  
  
 
  drawSprites();
  
  
}
