//Global Variables
var gameoverimage,restartimage,groundimage,bananaimage,jungleimage,stoneimage,monkeyani;
var obstaclegroup,background1,MONKEY,ground,stone,stonegroup,banana,bananagroup
var score
function preload(){
 gameoverimage =loadImage("gameOver.png")
 restartimage =loadImage("restart.png")
  groundimage=loadImage("ground.jpg")
 bananaimage =loadImage("Banana.png")
  jungleimage =loadImage("jungle.jpg")
 stoneimage =loadImage("stone.png")
  monkeyani=loadAnimation("Monkey_03.png","Monkey_02.png","Monkey_01.png","Monkey_10.png","Monkey_08.png","Monkey_09.png","Monkey_07.png","Monkey_05.png","Monkey_06.png","Monkey_04.png") 
}


function setup() {
  createCanvas(600,300);

   background1=createSprite(400,150,20,20)
  background1.addImage(jungleimage)
 // background1.velocityX=-6.5


  MONKEY=createSprite(100,230,20,20)
  MONKEY.addAnimation("running",monkeyani)
  MONKEY.scale=.1
  
  ground=createSprite(300,280,800,10)
  ground.visible=false
    
  bananagroup=new Group();
  stonegroup=new Group();
  
  score=0
  }



function draw(){
  if(frameCount%110===0){
  stone =createSprite(600,240,20,20)
  stone.addImage(stoneimage)
  stone.scale=0.2
  stone.velocityX=-6.5
    stonegroup.add(stone)
    stone.lifetime=120
}
  
 if(frameCount%105===0){
  banana =createSprite(600,random(140,240),20,20)
 banana.addImage(bananaimage)
  banana.scale=0.07
 banana.velocityX=-7.9
   bananagroup.add(banana)
   banana.lifetime=120
}
  
  if(MONKEY.isTouching(bananagroup)){
   score=score+2 
    bananagroup.destroyEach()
  }
  
   
  if(MONKEY.isTouching(stonegroup)){
   score=0      
    bananagroup.destroyEach()
    stonegroup.destroyEach()
    MONKEY.scale=.1
  }
  
   if(keyDown("space")&&MONKEY.y>220){
    MONKEY.velocityY=-17.5
}
  console.log(MONKEY.y)
   MONKEY.collide(ground)
 MONKEY.velocityY=MONKEY.velocityY+0.6
  
  switch(score){
    case 6:MONKEY.scale=0.12
       break;
    case 12:MONKEY.scale=0.14
       break;
    case 18:MONKEY.scale=0.16
       break; 
    case 24:MONKEY.scale=0.18
       break;
       default:break;
      
  }
  
  drawSprites()
  
   stroke("white")
  textSize(20)
  fill("white")
  text("Score:"+score,500,50)
  
}

