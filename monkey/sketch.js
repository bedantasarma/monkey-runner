
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score,bananaI;
var ground,iground;
var fruit,obsatclesF;
var Score=0;
function preload(){
  
  
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  monkey=createSprite(40,380);
  monkey.addAnimation("running",monkey_running);
  monkey .scale=0.10;
  ground=createSprite(250,425,500,5);
  ground.velocityX=-4;
  iground=createSprite(250,427,500,5);
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
  background("white");
  text("survival time:"+Score,380,45);
  if (ground.x<250){
      ground.x=ground.width/2;
  }
  Score=Score+Math.round(getFrameRate()/60);
  if(keyDown("space")&&monkey.y>379){
     monkey.velocityY=-16;
    
  }
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(iground);
  iground.visible=false;
  
  fruit();
  obstaclesF();
  if (obstacleGroup.isTouching(monkey)){
      ground.velocityX=0;
      monkey.velocityY=0;
      obstacleGroup.setVelocityXEach(0);
      FoodGroup.setVelocityXEach(0);
      obstacleGroup.setLifetimeEach(-1);
      FoodGroup.setLifetimeEach(-1);
      
      
  }
  drawSprites();
}
function fruit(){
  
  if(frameCount%80===0){
     banana=createSprite(550,Math.round(random(120,240)) );
     banana.addImage(bananaImage);
     banana.scale=0.13;
     banana.velocityX=-4;
     banana.lifetime=125;
     FoodGroup.add(banana);
    }
  }
function obstaclesF(){
  
  if(frameCount%300===0){
     obstacle=createSprite(500,386);
     obstacle.addImage(obstacleImage);
     obstacle.scale=0.2;
     obstacle.velocityX=-5;
     obstacle.lifetime=90;
     obstacleGroup.add(obstacle);
     }
  } 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  