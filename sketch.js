var bg,bgImg;
var player, shooterImg, shooter_shooting;
//Declare variable for zombie & for zombie Image
var zombie, zombieImg

//Declare varible for 3 hearts
var heart, heartImg1, heartImg2, heartImg3


//declare variable to load 3 heart Image


//Declare variable for zombie group
var zombieGroup


function preload()
{
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  bgImg = loadImage("assets/bg.jpeg")

  //Load heart Image
  heartImg3 = loadImage("assets/heart_3.png")
  heartImg2 = loadImage("assets/heart_2.png")
  heartImg1 = loadImage("assets/heart_1.png")

  //load zombie img
  zombieImg = loadImage("assets/zombie.png")

  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


   //creating sprites to depict lives remaining
   heart1 = createSprite(displayWidth-150,40,20,20)
   heart2 = createSprite(displayWidth-138,40,20,20)
   heart3 = createSprite(displayWidth-150,40,20,20)


   heart1.addImage("heart1",heartImg1)
   heart2.addImage("heart2",heartImg2)
   heart3.addImage("heart3",heartImg3)

   heart1.scale = 0.37
   heart2.scale = 0.37
   heart3.scale = 0.37


   heart1.visible = false
   heart2.visible = false

    //creating group for zombies    
    zombieGroup = new Group
}

function draw() 
{
  background(0); 
  if(keyDown("UP_ARROW")||touches.length>0)
  {
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0)
  {
    player.y = player.y+30
  }

  if(keyWentDown("space"))
  {
    player.addImage(shooter_shooting)
  }
  else if(keyWentUp("space"))
  {
    player.addImage(shooterImg)
  }

//destroy zombie when player touches it
if(zombieGroup.isTouching(player)){
  for(var i = 0;i<zombieGroup.length;i++){
    if(zombieGroup[i].isTouching(player))
    {
      zombieGroup[i].destroy()
    }
  }
}

//calling the function to spawn zombies
spawnZombies()

drawSprites();
}



//creating function to spawn zombies
function spawnZombies(){
  if(frameCount%60===0){
    zombie = createSprite(random(500,1100),random(100,500),40,40);
    zombie.addImage("zombie",zombieImg);
    zombie.scale = 0.15
    zombie.velocityX = -5
    zombie.lifetime= 200
    zombieGroup.add(zombie);
    zombie.debug = true
    zombie.setCollider("rectangle",0,0,400,400)
  }
}