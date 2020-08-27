var database, playerCount,form, game, player, canvas
var gameState=0
var backgroundImg

function setup(){
  canvas=createCanvas(400,400);
  database=firebase.database();
game=new Game();
game.getState();
game.start();

}

function draw(){

}

