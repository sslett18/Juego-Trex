var trex, trex_running, trex_collided, trex_collided_image;
var ground, invisibleGround, groundImage;
var cloud, cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var score;
var play=1;
var end=0;
var gameState=play;
var pajarito;
var gameOver, gameOverSprite;
var restart, restartSprite;
var jumpSound, checkPointSound, dieSound;
var mensaje_global="esta es la variable global, puedo usarla en cualquier funcion :0";

//todas las variables deben ir arriba para usarlas después

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  //faltaba una animación
  
  groundImage = loadImage("ground2.png")

cloudImage=loadImage("cloud.png");

//imagenes de los obstaculos

obstacle1=loadImage("obstacle1.png");
obstacle2=loadImage("obstacle2.png");
obstacle3=loadImage("obstacle3.png");
obstacle4=loadImage("obstacle4.png");
obstacle5=loadImage("obstacle5.png");
obstacle6=loadImage("obstacle6.png");

//imagenes de el gameover & restart

gameOver=loadImage("gameOver.png");
restart=loadImage("restartt.png");

//imagenes de el trex cuando perdemos

trex_collided_image=loadImage("trex_collided.png");

//sonidos

jumpSound=loadSound("jump.mp3");
checkPointSound=loadSound("checkPoint.mp3");
dieSound=loadSound("die.mp3");



}
    function setup(){ 

      createCanvas(windowWidth,windowHeight);

      var sun=createSprite(width-50,100,10,10);
      sun.addAnimation()
      sun.scale=0.1;
      

        var mensaje_setup="esta es la variable setup ;)";
        console.log(mensaje_setup);
        createCanvas(600,200) ;
        //crear sprite de Trex
        trex = createSprite(50,height-70,20,50);
        trex.addAnimation("running", trex_running);
        trex.scale = 0.5;
         ground=createSprite(width/2,height,width,2); 
         ground.addImage("ground",groundImage); 
         ground.x=ground.width/2;
        
         invisibleGround = createSprite(width/2,height-10,width,125);
         invisibleGround.shapeColor="f4cbaa"
          invisibleGround.visible=false; 

        gameOverSprite=createSprite(width/2,height/2-50);
        gameOverSprite.scale=0.5;
        gameOverSprite.addImage(gameOver);

        restartSprite=createSprite(width/2,height/2);
          restartSprite.scale=0.5;
          restartSprite.addImage(restart);
    


          score=0;

obstaclesGroup=createGroup();
cloudsGroup=createGroup();


        trex.setCollider("circle",0,0,);
        trex.debug=true;

obstaclesGroup.setLifetimeEach(-1);
cloudsGroup.setLifetimeEach(-1);



        } 

           function draw(){ 

            var mensaje_draw="este es el mensaje de la variable draw c:";
            console.log(mensaje_draw);
console.warn(random(10,100));

            console.info("Este es un mensaje de informacion"); 
            console.error("Tienes error en el draw"); 
            console.warn("Esta es una advertencia"); 
            background("220"); 

            text("Points:"+score,500,50);

            score=score+Math.round(frameCount/60);





            if (gameState===play){

              score=score+Math.round(getFrameRate()/60);

            gameOverSprite.visible=false;
            restartSprite.visible=false;
              ground.velocityX=-(6+score/1000);

            if ((touches.length > 0 || keyDown("SPACE")) && trex.y >= height-120) {
              jumpSound.play( )
              trex.velocityY=-10;
              touches=[];

            }


              
              if(score>0&&score%1000===0){
                checkPointSound.play();
                
              }

              if(obstaclesGroup.isTouching(trex)){
                trex.addAnimation(trex_collided_image);
                gameState=end;
               
                
              }




              if (ground.x<0){
                ground.x=ground.width/2;
              }

              if (keyDown("space") && trex.y >=150) {
                trex.velocityY=-10; 
                jumpSound.play();
               } 

               trex.velocityY=trex.velocityY + 0.8;

               spawnClouds();
               spawnObstacles();
            
               
                

                
                trex.collide(invisibleGround); 

              }

                else if (gameState===end){
                  gameOverSprite.visible=true;
                  restartSprite.visible=true;
                  ground.velocityX=0;
                  obstaclesGroup.setVelocityXEach(0);
                  cloudsGroup.setVelocityXEach(0);
                
                }

              if (mousePressedOver(restart)){
                  reset();
              }



               drawSprites(); 
               
              }
              

          

            

            





            
               
               //debe chocar con el piso falso para que parezca que camina




             

            

                

                





                 


function spawnClouds(){

  var mensaje_clouds="esta es la variable clouds :D"
  console.warn(mensaje_clouds);
  console.log(mensaje_global);
  

if (frameCount%60===0){

  console.warn("Spawn de nubes");
  cloud=createSprite(600,100,40,10);
  cloud.addImage(cloudImage)
  cloud.y=Math.round(random(10,60));
  cloud.scale=0.5;
  cloud.velocityX=-3;


  

//depht

cloud.depth=trex.depth;
trex.depth=trex.depth+1;

cloudsGroup.add(cloud);


}



}

function spawnObstacles(){

  var mensaje_obstacles="esta es la variable de los obstaculos o_O";
  console.log(mensaje_obstacles);

  if (frameCount%60===0){

var obstacle=createSprite(400,175,10,40);
obstacle.velocityX=-(6+score/1000);

var rand=Math.round(random(1,6));
switch(rand) {

  case 1: obstacle.addImage(obstacle1);
          break;
  case 2: obstacle.addImage(obstacle2);
          break;
  case 3: obstacle.addImage(obstacle3);
          break;
  case 4: obstacle.addImage(obstacle4);
          break;
  case 5: obstacle.addImage(obstacle5);
          break;
  case 6: obstacle.addImage(obstacle6);
          break;
  default: break;
}

obstacle.scale=0.5;


obstaclesGroup.add(obstacle);

  }

}


function reset(){
  gameState=play;
  gameOverSprite.visible=false;
restartSprite.visible=false;
score=0;
obstaclesGroup.destroyEach();
cloudsGroup.destroyEach();
}
