
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex=createSprite(60,200,30,60);
 trex.addAnimation("running", trex_running);

 trex.scale=0.7;
 trex.x=60
 
 var ground=createSprite(210,190,400,20);
 
 ground.addImage("ground2");
 ground.x=ground.width/2;
 ground.velocityX=-5;

 invisibleGround=createSprite(210,210,400,20);
invisibleGround.visible=true;


}



function draw(){

console.info("Este es un mensaje de informacion");
console.error("Tienes error en el draw");
console.warn("Esta es una advertencia");


  background("220")
  
if (keyDown("space") && trex.y >=100) {
  trex.velocityY=-10;
}

trex.velocityY=trex.velocityY + 0.8

trex.collide(ground);
drawSprites();



}
