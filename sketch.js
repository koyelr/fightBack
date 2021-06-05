var virus1, virus2, virus3, virus4, virus4, virus5, virus6, virus7,paddle;
var v1, v2, v3, v4, v5, v6, v7,paddleImg;
var ball, ballImg;
function preload(){
  v1 = loadImage("virus1.png");
  v2 = loadImage("virus2.png")
  v3 = loadImage("virus3.png")
  v4 = loadImage("virus4.png")
  v5 = loadImage("virus5.png")
  v6 = loadImage("virus6.png")
  v7 = loadImage("virus7.png")
  paddleImg=loadImage("sprite_0.png")
  ballImg=loadImage("donut.png")

}


function setup() {
  createCanvas(800,630);
  for(var i =0; i<740; i=i+55){
    var rand =  Math.round(random(1,7)) 
    var y = 60;
    switch(rand){
      case 1: virus1 = createSprite(i+40,y,50,50);
              virus1.addImage(v1);
              virus1.scale = 0.15
      break;
      case 2: virus2 = createSprite(i+40,y,50,50);
              virus2.addImage(v2);
              virus2.scale = 0.15
      break;
      case 3: virus3 = createSprite(i+40,y,50,50);
              virus3.addImage(v3);
              virus3.scale = 0.15
      break;
      case 4: virus4 = createSprite(i+40,y,50,50);
              virus4.addImage(v4);
              virus4.scale = 0.15 
      
      break;
      case 5: virus5 = createSprite(i+40,y,50,50);
              virus5.addImage(v5);
              virus5.scale = 0.15
      break;
      case 6: virus6 = createSprite(i+40,y,50,50);
              virus6.addImage(v6);
              virus6.scale = 0.15
      break;
      case 7: virus7 = createSprite(i+40,y,50,50);
              virus7.addImage(v7);
              virus7.scale = 0.15
      break;
      default:break;
      
    }
  }


  for(var j =50; j<700; j=j+55){
    var y = 120;
    console.log("inside for")
    var rand1 =  Math.round(random(1,7)) 
    switch(rand1){
      case 1: virus1 = createSprite(j+40,y,50,50);
              virus1.addImage(v1);
              virus1.scale = 0.15
      break;
      case 2: virus2 = createSprite(j+40,y,50,50);
              virus2.addImage(v2);
              virus2.scale = 0.15
      break;
      case 3: virus3 = createSprite(j+40,y,50,50);
              virus3.addImage(v3);
              virus3.scale = 0.15
      break;
      case 4: virus4 = createSprite(j+40,y,50,50);
              virus4.addImage(v4);
              virus4.scale = 0.15 
      
      break;
      case 5: virus5 = createSprite(j+40,y,50,50);
              virus5.addImage(v5);
              virus5.scale = 0.15
      break;
      case 6: virus6 = createSprite(j+40,y,50,50);
              virus6.addImage(v6);
              virus6.scale = 0.15
      break;
      case 7: virus7 = createSprite(j+40,y,50,50);
              virus7.addImage(v7);
              virus7.scale = 0.15
      break;
      default:break;
      
    }
  }


  for(var j =100; j<650; j=j+55){
    var y = 180;
    console.log("inside for")
    var rand1 =  Math.round(random(1,7)) 
    switch(rand1){
      case 1: virus1 = createSprite(j+40,y,50,50);
              virus1.addImage(v1);
              virus1.scale = 0.15
      break;
      case 2: virus2 = createSprite(j+40,y,50,50);
              virus2.addImage(v2);
              virus2.scale = 0.15
      break;
      case 3: virus3 = createSprite(j+40,y,50,50);
              virus3.addImage(v3);
              virus3.scale = 0.15
      break;
      case 4: virus4 = createSprite(j+40,y,50,50);
              virus4.addImage(v4);
              virus4.scale = 0.15 
      
      break;
      case 5: virus5 = createSprite(j+40,y,50,50);
              virus5.addImage(v5);
              virus5.scale = 0.15
      break;
      case 6: virus6 = createSprite(j+40,y,50,50);
              virus6.addImage(v6);
              virus6.scale = 0.15
      break;
      case 7: virus7 = createSprite(j+40,y,50,50);
              virus7.addImage(v7);
              virus7.scale = 0.15
      break;
      default:break;
      
    }
  }


  for(var j =150; j<550; j=j+55){
    var y = 240;
    console.log("inside for")
    var rand1 =  Math.round(random(1,7)) 
    switch(rand1){
      case 1: virus1 = createSprite(j+40,y,50,50);
              virus1.addImage(v1);
              virus1.scale = 0.15
      break;
      case 2: virus2 = createSprite(j+40,y,50,50);
              virus2.addImage(v2);
              virus2.scale = 0.15
      break;
      case 3: virus3 = createSprite(j+40,y,50,50);
              virus3.addImage(v3);
              virus3.scale = 0.15
      break;
      case 4: virus4 = createSprite(j+40,y,50,50);
              virus4.addImage(v4);
              virus4.scale = 0.15 
      
      break;
      case 5: virus5 = createSprite(j+40,y,50,50);
              virus5.addImage(v5);
              virus5.scale = 0.15
      break;
      case 6: virus6 = createSprite(j+40,y,50,50);
              virus6.addImage(v6);
              virus6.scale = 0.15
      break;
      case 7: virus7 = createSprite(j+40,y,50,50);
              virus7.addImage(v7);
              virus7.scale = 0.15
      break;
      default:break;
      
    }
  }

  for(var j =200; j<500; j=j+55){
    var y = 300;
    console.log("inside for")
    var rand1 =  Math.round(random(1,7)) 
    switch(rand1){
      case 1: virus1 = createSprite(j+40,y,50,50);
              virus1.addImage(v1);
              virus1.scale = 0.15
      break;
      case 2: virus2 = createSprite(j+40,y,50,50);
              virus2.addImage(v2);
              virus2.scale = 0.15
      break;
      case 3: virus3 = createSprite(j+40,y,50,50);
              virus3.addImage(v3);
              virus3.scale = 0.15
      break;
      case 4: virus4 = createSprite(j+40,y,50,50);
              virus4.addImage(v4);
              virus4.scale = 0.15 
      
      break;
      case 5: virus5 = createSprite(j+40,y,50,50);
              virus5.addImage(v5);
              virus5.scale = 0.15
      break;
      case 6: virus6 = createSprite(j+40,y,50,50);
              virus6.addImage(v6);
              virus6.scale = 0.15
      break;
      case 7: virus7 = createSprite(j+40,y,50,50);
              virus7.addImage(v7);
              virus7.scale = 0.15
      break;
      default:break;
      
    }
  }

  paddle= createSprite(400, height-10);
  paddle.addImage(paddleImg)
  paddle.scale = 0.8

  ball = createSprite(paddle.x,height-60);
  ball.addImage(ballImg)
  ball.scale =0.15


}

function draw() {
  background("black");  
  paddle.x = mouseX;
  //ball.x = paddle.x
  if(keyDown("space")){
    ball.velocityX = 7;
    ball.velocityY= -5;
  }
  edges = createEdgeSprites();
  ball.bounceOff(edges);
  ball.bounceOff(paddle);
  


  drawSprites();
}

