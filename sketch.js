const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg, ground, reindeer, reindeerImg, brown, brownImg, black, blackImg, grey, greyImg;
var engine
var ice1=[];
var snow1=50;
var snow2=50;
function preload(){
bg=loadImage("snow1.jpg");
reindeerImg=loadAnimation("reindeer1.png","reindeer2.png","reindeer3.png","reindeer4.png","reindeer5.png","reindeer6.png","reindeer7.png","reindeer8.png","reindeer9.png");
brownImg=loadAnimation("brown1.png","brown2.png","brown3.png","brown4.png","brown5.png","brown6.png","brown7.png","brown8.png");
blackImg=loadAnimation("black1.png","black2.png","black3.png","black4.png","black5.png","black6.png","black7.png","black8.png");
greyImg=loadAnimation("grey1.png","grey2.png","grey3.png","grey4.png","grey5.png","grey6.png");

}
function setup() {
  createCanvas(1300,600);

  engine = Engine.create();
 world = engine.world;

  ground=createSprite(1300,600,1310,610);
  ground.visible=false;

  reindeer=createSprite(150,480);
  reindeer.addAnimation("running", reindeerImg);
  reindeer.scale=1.1;
  reindeer.velocityX=2;
  reindeer.setCollider("rectangle",15, -20,100,180);

  brown=createSprite(150,480);
  brown.addAnimation("hopping", brownImg);
  brown.scale=1.1;
  brown.velocityX=2;
  brown.setCollider("rectangle",15, -20,100,180);

  black=createSprite(150,480);
  black.addAnimation("jumping",blackImg);
  black.scale=1.1;
  black.velocityX=2;
  black.setCollider("rectangle",15, -20,100,180);

  grey=createSprite(150,480);
  grey.addAnimation("skipping",greyImg);
  grey.scale=1.1;
  grey.velocityX=2;
  grey.setCollider("rectangle",15, -20,100,180);

  if(frameCount % 20 === 0){
    for(var i=0; i<snow1; i++){
    ice1.push(new Snow1(random(width/2-400,width/2+400),2,5));
    }
    }

    if(frameCount % 20 === 0){
      for(var j=0; j<snow2; j++){
        ice1.push(new Snow2(random(width/2-400,width/2+400),2,5));
      }
}

function draw() {
  background(bg);  
  
  Engine.update(engine);

  reindeer.collide(ground);
  brown.collide(ground);
  black.collide(ground);
  grey.collide(ground);

  if(reindeer.x > 1200){
    reindeer.x=150;
  }
  if(black.x > 1200){
    black.x=150;
  }
  if(brown.x > 1200){
    brown.x=150;
  }
  if(grey.x > 1200){
    grey.x=150;
  }
   
  for(var i = 0;i < snow1; i++){
    ice1[i].display();
    ice1[i].changePosition();
    }   

    for(var j = 0;j < snow2; j++){
      ice1[j].display();
      ice1[j].changePosition();
      }   


  reindeer.display();
  brown.display();
  black.display();
  grey.display();

  drawSprites();
}}