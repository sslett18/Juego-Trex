var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudsGroup, cloudImage;


//todas las variables deben ir arriba para usarlas después

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  //faltaba una animación
  
  groundImage = loadImage("ground2.png")

cloudImage=loadImage("cloud.png");

}
    function setup(){ 
        createCanvas(600,200) ;
        //crear sprite de Trex
        trex = createSprite(50,160,20,50);
        trex.addAnimation("running", trex_running);
        trex.scale = 0.5;
         ground=createSprite(210,190,400,20); 
         //aquí la animación debe ser guardada en otra var para evitar problemas
         ground.addImage("ground",groundImage); 
         ground.x=ground.width/2;
         ground.velocityX=-5;
         invisibleGround = createSprite(200,200,400,10);
          invisibleGround.visible=false; 
        } 

           function draw(){ 

console.warn(random(10,100));

            console.info("Este es un mensaje de informacion"); 
            console.error("Tienes error en el draw"); 
            console.warn("Esta es una advertencia"); 
            background("220"); 

console.log(trex.y)

            if (keyDown("space") && trex.y >=100) {
                 trex.velocityY=-10; 
                } 
               trex.velocityY=trex.velocityY + 0.8;
               //debe chocar con el piso falso para que parezca que camina

if (ground.x<0){
  ground.x=ground.width/2;
}


             trex.collide(invisibleGround); 

             spawnClouds();

                 drawSprites(); 

}
                 


function spawnClouds(){

if (frameCount%60===0){

  console.warn("Spawn de nubes");
  cloud=createSprite(600,100,40,10);
  cloud.addImage(cloudImage)
  cloud.y=Math.round(random(10,60));
  cloud.scale=0.5;
  cloud.velocityX=-3;

}


}



//Estás haciendo un gran trabajo, sigue esforzándote mucho, revisa bien el código, nos vemos en clase