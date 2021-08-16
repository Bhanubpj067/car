var canvas,form,player,game;
var database;
var gameState = 0;


function setup(){
canvas = createCanvas(400,400);
database = firebase.database();//connection to the database
game = new Game();

game.getState();
game.start();

}

function draw(){


}