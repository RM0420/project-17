
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600, 200)
  
  monkey = createSprite(50, 155, 20, 20);
  monkey.addAnimation("monkeyRunning", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(300,190, 600, 20)
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
  score  = 0
  
}


function draw() {
  background("white")
  
  
  stroke("black")
  textSize(20);
  fill("black") 
  score = Math.ceil(frameCount/2)
  text("Survival Time: "+ score, 225,50);
  
  monkey.collide(ground)
  
  if(keyDown("space") && monkey.y > 145){
    monkey.velocityY = -11
  }
  monkey.velocityY = monkey.velocityY + 0.55
  
  ground.velocityX = -5
  ground.x = ground.width/2
  
  spawnFood();
  spawnObstacles();

  drawSprites();
}

function spawnFood(){
  if(frameCount % 80 === 0){
    banana = createSprite(600, Math.round(random(45,110)), 20, 20)
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.velocityX = -5
    banana.lifeime = 130
    FoodGroup.add(banana)
  }
}

function spawnObstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(600, 170, 20, 20)
    obstacle.addImage(obstaceImage)
    obstacle.scale = 0.2
    obstacle.velocityX = -5
    obstacle.lifetime= 130
    obstaclesGroup.add(obstacle)
  }
}
