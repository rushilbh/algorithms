var fixedRect, movingRect;



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100,200,60,40);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX = 5;

  movingRect =createSprite(600, 200,40,60);
  movingRect.shapeColor ="green";
  movingRect.debug = true;
  movingRect.velocityX = -5;
  
}

function draw() {
  background(0); 
 // movingRect.x = mouseX ;
  //movingRect.y = mouseY;

if( movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
  && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX*(-1);
  }
  if( fixedRect.y - movingRect.y< movingRect.height/2 + fixedRect.height/2
    &&  movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
    }


  if ( movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.y - movingRect.y< movingRect.height/2 + fixedRect.height/2
    &&  movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor = "red";
  }
  else {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  
  drawSprites();


 
}