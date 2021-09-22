var bow, arrow, background; 
var green = [];
var red = [];
var blue = [];
var pink = [];
var bowImage, arrowImage, green_balloonImage, 
red_balloonImage, pink_balloonImage ,blue_balloonImage, 
backgroundImage;
var gcnt = 1;
var rcnt = 1;
var bcnt = 1;
var pcnt = 1;
var gcntr = 1;
var rcntr = 1;
var bcntr = 1;
var pcntr = 1;
var gameState = "start";

function preload()
{
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
}



function setup() 
{
  createCanvas(400, 400);
  
  //creating background
  background = createSprite(200,200);
  background.addImage(backgroundImage);
  background.scale = 2.5;
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;  
}

function draw() 
{ 
   drawSprites();
  
  if(gameState == "start")
    {
      bow.y = World.mouseY;
      textSize(25);
      fill("pink");
      stroke("black");
      strokeWeight(5);
      text("Press LEFT mouse button",50,245);
      text("to Start and Shoot",75,275);   
    }
  
   if (mouseWentDown("leftButton")) 
    {
      gameState = "play";
      createArrow();
    }
  
  if(gameState == "play")
    {
      bow.y = World.mouseY;
     
      background.velocityX = -4; 
  
      if (background.x < 0)
     {
      background.x = background.width/2;
     }
    
    redBalloon();
    blueBalloon();
    greenBalloon();
    pinkBalloon();
  }
}


// Creating  arrows for bow
 function createArrow() 
 {
  arrow= createSprite(100,100);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -10;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrow.lifetime = 200;
}


function redBalloon() 
{
  if(frameCount % 100 == 0)
  {
  red[rcnt] = createSprite(Math.round(random(-40,0)),Math.round(random(0, 400)));
  red[rcnt].addImage(red_balloonImage);
  red[rcnt].velocityX = Math.round(random(2,4));
  red[rcnt].lifetime = 200;
  red[rcnt].scale = 0.08;
  rcnt++
  }
  for(var a = rcntr; a < rcnt; a++)
  {
    if(red[a].isTouching(arrow))
    {
      red[a].destroy();
      arrow.destroy();
      rcntr = a;
    }
  }
}

function blueBalloon() 
{
  if(frameCount % 100 == 0)
  {
  blue[bcnt] = createSprite(Math.round(random(-30,0)),Math.round(random(0, 400)));
  blue[bcnt].addImage(blue_balloonImage);
  blue[bcnt].velocityX = Math.round(random(2,4));
  blue[bcnt].lifetime = 200;
  blue[bcnt].scale = 0.08;
  bcnt++
  }
  for(var a = bcntr; a < bcnt; a++)
  {
    if(blue[a].isTouching(arrow))
    {
      blue[a].destroy();
      arrow.destroy();
      bcntr = a;
    }
  }
}

function greenBalloon() 
{
  if(frameCount % 100 == 0)
  {
  green[gcnt] = createSprite(Math.round(random(-20,0)),Math.round(random(0, 400)));
  green[gcnt].addImage(green_balloonImage);
  green[gcnt].velocityX = Math.round(random(2,4));
  green[gcnt].lifetime = 150;
  green[gcnt].scale = 0.08; 
  gcnt++
  }

  for(var a = gcntr; a < gcnt; a++)
  {
    if(green[a].isTouching(arrow))
    {
      green[a].destroy();
      arrow.destroy();
      gcntr = a;
    }
  }
}

function pinkBalloon() 
{
  if(frameCount % 100 == 0)
  {
  pink[pcnt] = createSprite(Math.round(random(-10,0)),Math.round(random(0, 400)));
  pink[pcnt].addImage(pink_balloonImage);
  pink[pcnt].velocityX = Math.round(random(2,4));
  pink[pcnt].lifetime = 150;
  pink[pcnt].scale = 1; 
  pcnt++
  } 
  for(var a = pcntr; a < pcnt; a++)
  {
    if(pink[a].isTouching(arrow))
    {
      pink[a].destroy();
      arrow.destroy();
      pcntr = a;
    }
  }
}

