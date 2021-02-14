var snakeGround,dice1,dice2,dice3,dice4,dice5,dice6;
var snakeGroundImage,greenGround,greenGroundImage; 
var diceGroup,dice1Image,dice2Image,dice3Image,dice4Image,dice5Image,dice6Image,dice,winImage,winimg;
var Player1=whiteCoin,Player2=blackCoin;
var blackCoin,whiteCoin;
var blackCoinImage,whiteCoinImage;
var playerNumberPlayingCurrently=1,isStart=true;
var i=1,j=1;
var snakeSound,ladderSound,clapSound;
var pturn=1,win=0;

var delayInMilliseconds = 1000; //1 second


function preload(){

snakeGroundImage=loadImage("sl.png");
dice1Image=loadImage("d1.PNG");
dice2Image=loadImage("d2.PNG");
dice3Image=loadImage("d3.PNG");
dice4Image=loadImage("d4.PNG"); 
dice5Image=loadImage("d5.PNG");
dice6Image=loadImage("d6.PNG");
winImage=loadImage("win.png");
greenGroundImage=loadImage("greenground.png");
blackCoinImage=loadImage("b.png");
whiteCoinImage=loadImage("w.png");
snakeSound=loadSound("snake2.mp3");
ladderSound=loadSound("ladder.mp3");
clapSound=loadSound("clap.mp3");
  
}

function setup() {
createCanvas(600, 600);
snakeGround=createSprite(300,200,600,600);
  snakeGround.addImage("snakeGround",snakeGroundImage);
blackCoin=createSprite(50,350,20,20);
blackCoin.addImage("blackCoin",blackCoinImage);
whiteCoin=createSprite(90,350,20,20);
whiteCoin.addImage("whiteCoin",whiteCoinImage);
snakeGround.velocity.x=0;
snakeGround.velocity.y=0;
  

greenGround=createSprite(400,680,250,300);
greenGround.addImage("greenGround",greenGroundImage);
winimg=createSprite(570,60,20,20);
winimg.addImage("winimg",winImage);
winimg.scale=0.2;
whiteCoin.scale=0.1;
blackCoin.scale=0.1;

diceGroup=new Group();
}

function draw() {

background(0);
drawSprites();

  
fill (0);
textSize(32);
text(" Player 1", 10,450); 
  
fill (255);
textSize(32);
text("Computer ", 450,450); 

  
if(isStart)
{
  displayDice();
  isStart=false;

}
  

  if (pturn)
    {
    fill (0);
  textSize(25);
  text(" Player 1 Turn ", 210,475);
    }
  
  else
    {
      fill (255); 
  textSize(25);
  text(" Computer turn ", 210,475);
    }
  
   fill (0); 
  textSize(20);
  text("Position:"+i,20,480);
  
  fill (255); 
  textSize(20);
  text("Position:"+j,460,480);
  
  if (win==1)
  {
    
      clapSound.play(); 
    pturn=1;
    blackCoin.x=50;
       blackCoin.y=350;
     whiteCoin.x=90;
    whiteCoin.y=350;
   alert("Player 1 Wins !!!");
   
    win=0; 
    
   }
  else if (win==2)
    {
       
     clapSound.play();
      win =0 ;
      pturn=1;
       blackCoin.x=50;
       blackCoin.y=350;
       whiteCoin.x=90;
    whiteCoin.y=350;
      alert("Computer Wins !!!");
      
    }
  
}
function displayDice(){
dice=createSprite(300,550,10,60);
dice.addImage(dice1Image);
diceGroup.add(dice);
  drawSprites();
}

function keyPressed()
{
 pturn=0;
var rand= Math.round(random(1,6));
  i = i+rand;
  console.log(i);
    switch(rand) {
      case 1: dice.addImage(dice1Image);
              
              break;
      case 2: dice.addImage(dice2Image);
              break;
      case 3: dice.addImage(dice3Image);
              break;
      case 4: dice.addImage(dice4Image);
              break;
      case 5: dice.addImage(dice5Image);
              break;
      case 6: dice.addImage(dice6Image);
              break;
      
    }
  
  switch(i) {
      case 1: 
       blackCoin.x=50;
       blackCoin.y=350;
      break;
      case 2: 
       blackCoin.x=140;
       blackCoin.y=350;
      break;
      case 3: 
       blackCoin.x=230;
       blackCoin.y=130;
      ladderSound.play();
      i=22;
      break;
      
      case 4: 
       blackCoin.x=320;
       blackCoin.y=350;
      break;
      case 5: 
       blackCoin.x=410;
       blackCoin.y=260;
       ladderSound.play();
      i=8;
      break;
      
      case 6: 
       blackCoin.x=500;
       blackCoin.y=350;
      break;
      case 7: 
       blackCoin.x=500;
       blackCoin.y=260;
      break;
       case 8: 
       blackCoin.x=410;
       blackCoin.y=260;
      break;
       case 9: 
       blackCoin.x=320;
       blackCoin.y=260;
      break;
       case 10: 
       blackCoin.x=230;
       blackCoin.y=260;
      break;
       case 11: 
         blackCoin.x=140;
       blackCoin.y=60;
       ladderSound.play();
      i=26;
      break;
      case 12: 
       blackCoin.x=50;
       blackCoin.y=260;
      break;
      
      case 13: 
       blackCoin.x=50;
       blackCoin.y=195;
      break;
      case 14: 
       blackCoin.x=140;
       blackCoin.y=195;
      break;
      case 15: 
       blackCoin.x=230;
       blackCoin.y=195;
      break;
      
      case 16: 
       blackCoin.x=320;
       blackCoin.y=195;
      break;
      case 17: 
     blackCoin.x=320;
       blackCoin.y=350;
      snakeSound.play();
      i=4;
      break;
      
      case 18: 
       blackCoin.x=500;
       blackCoin.y=195;
      break;
      
      case 19: 
      blackCoin.x=500;
       blackCoin.y=260;
       snakeSound.play();
      i=7;
      break;
       case 20: 
      blackCoin.x=410;
       blackCoin.y=60;
       ladderSound.play();
      i=29;
      break;
       case 21: 
       blackCoin.x=320;
       blackCoin.y=260;
       snakeSound.play();
      i=21;
      break;
       case 22: 
       blackCoin.x=230;
       blackCoin.y=130;
      break;
       case 23: 
       blackCoin.x=140;
       blackCoin.y=130;
      break;
      case 24: 
       blackCoin.x=50;
       blackCoin.y=130;
      break;
      
        case 25: 
       blackCoin.x=50;
       blackCoin.y=60;
      break;
      case 26: 
       blackCoin.x=140;
       blackCoin.y=60;
      break;
      case 27: 
       blackCoin.x=50;
       blackCoin.y=350;
       snakeSound.play();
      i=1;
      break;
      
      case 28: 
       blackCoin.x=320;
       blackCoin.y=60;
      break;
      case 29: 
       blackCoin.x=410;
       blackCoin.y=60;
      break;
      
      case 30: 
       blackCoin.x=500;
       blackCoin.y=60;
       win=1;
      i=1;
      j=1;
      break;
      default:
        i = i-rand;
  }
  
 if (win != 1)
   {
     setTimeout(function() {
  computerGame();
    //your code to be executed after 1 second
  }, delayInMilliseconds);
}
}
function computerGame(){
  pturn=1;
  var rand= Math.round(random(1,6));
  j = j+rand;
  console.log(j);
    switch(rand) {
      case 1: dice.addImage(dice1Image);
              
              break;
      case 2: dice.addImage(dice2Image);
              break;
      case 3: dice.addImage(dice3Image);
              break;
      case 4: dice.addImage(dice4Image);
              break;
      case 5: dice.addImage(dice5Image);
              break;
      case 6: dice.addImage(dice6Image);
              break;
      
    }
  
  
  switch(j) {
      case 1: 
       whiteCoin.x=80;
       whiteCoin.y=350;
      break;
      case 2: 
       whiteCoin.x=170;
       whiteCoin.y=350;
      break;
      case 3: 
       whiteCoin.x=260;
       whiteCoin.y=130;
       ladderSound.play();
      j=22;
      break;
      
      case 4: 
       whiteCoin.x=350;
       whiteCoin.y=350;
      break;
      case 5: 
       whiteCoin.x=440;
       whiteCoin.y=260;
       ladderSound.play();
      j=8;
      break;
      
      case 6: 
       whiteCoin.x=530;
       whiteCoin.y=350;
      break;
      case 7: 
       whiteCoin.x=530;
       whiteCoin.y=260;
      break;
       case 8: 
       whiteCoin.x=440;
       whiteCoin.y=260;
      break;
       case 9: 
       whiteCoin.x=350;
       whiteCoin.y=260;
      break;
       case 10: 
       whiteCoin.x=260;
       whiteCoin.y=260;
      break;
       case 11: 
         whiteCoin.x=170;
       whiteCoin.y=60;
       ladderSound.play();
      j=26;
      break;
      case 12: 
       whiteCoin.x=80;
       whiteCoin.y=260;
      break;
      
      case 13: 
       whiteCoin.x=80;
       whiteCoin.y=195;
      break;
      case 14: 
       whiteCoin.x=170;
       whiteCoin.y=195;
      break;
      case 15: 
       whiteCoin.x=260;
       whiteCoin.y=195;
      break;
      
      case 16: 
       whiteCoin.x=350;
       whiteCoin.y=195;
      break;
      case 17: 
     whiteCoin.x=350;
       whiteCoin.y=350;
       snakeSound.play();
      j=4;
      break;
      
      case 18: 
       whiteCoin.x=530;
       whiteCoin.y=195;
      break;
      
      case 19: 
      whiteCoin.x=530;
       whiteCoin.y=260;
       snakeSound.play();
      j=7;
      break;
       case 20: 
      whiteCoin.x=440;
       whiteCoin.y=60;
       ladderSound.play();
      j=29;
      break;
       case 21: 
       whiteCoin.x=350;
       whiteCoin.y=260;
       snakeSound.play();
      j=21;
      break;
       case 22: 
       whiteCoin.x=260;
       whiteCoin.y=130;
      break;
       case 23: 
       whiteCoin.x=170;
       whiteCoin.y=130;
      break;
      case 24: 
       whiteCoin.x=80;
       whiteCoin.y=130;
      break;
      
        case 25: 
       whiteCoin.x=80;
       whiteCoin.y=60;
      break;
      case 26: 
       whiteCoin.x=170;
       whiteCoin.y=60;
      break;
      case 27: 
       whiteCoin.x=80;
       whiteCoin.y=350;
       snakeSound.play();
      j=1;
      break;
      
      case 28: 
       whiteCoin.x=350;
       whiteCoin.y=60;
      break;
      case 29: 
       whiteCoin.x=440;
       whiteCoin.y=60;
      break;
      
      case 30: 
       whiteCoin.x=530;
       whiteCoin.y=60;
      win=2;
      j=1;
      i=1;
      break;
      default:
        j = j-rand;
  
}  
  if (win != 2)
   {
  setTimeout(function() {
     //your code to be executed after 1 second
    }, delayInMilliseconds*50); 
   }
}
  
  
  
 

