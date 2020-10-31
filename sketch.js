// global variables
var monkey , monkey_running;
var banana ,bananaImage, obstacle; 
var obstacleImage,ground;
var FoodGroups, obstacleGroups;
var survivaltime = 0;
var position,score;

function preload()
  {
  // preloading images and animations
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  //creating canvas
  createCanvas(600, 600);
  
  // creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  // creating ground
  ground = createSprite(400,350,900,10);
  ground.x = ground.width/2;
  ground.velocityX = -4;
  console.log(ground.x);
  
  
  obstacleGroups = new Group();
  FoodGroups = new Group();
  
}


function draw() {
  // adding background colour as white
background ("white");
  
 
  stroke("white");
  textSize(20);
  fill("black");
  
  stroke("black");
  textSize(20);
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time : "+survivalTime,100,50);
  
  
  
  
  if (ground.x<0)
    {
      ground.x = ground.width/2;
    }
    
  if (keyDown("space"))
    {
      monkey.velocityY = -12;
    }
  monkey.velocityY= monkey.velocityY+0.8;
  monkey.collide(ground);
  
  // making banana Group
  FoodGroup();
  
 obstacleGroup();
  
 drawSprites(); 
}

function FoodGroup()
{
  if(World.frameCount%80===0)
  {
    // creating banana
    banana = createSprite(600,250,40,10);
    banana.y = Math.round(random(120,200));
    console.log(position);
    // adding image to banana
   banana.addImage("banana",bananaImage);
    banana.scale=0.1;
    
  }
}

function obstacleGroup(){
  

if (frameCount % 60 === 0){
   obstacle = createSprite(800,320,10,40);
   obstacle.velocityX = -6;   
  obstacle.addImage("obstacle",obstacleImage);
  
  //assign scale and lifetime to the obstacle
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
     obstacle.collide(ground);
   
   //add each obstacle to the group
   obstacleGroups.add(obstacle);
 }

}

