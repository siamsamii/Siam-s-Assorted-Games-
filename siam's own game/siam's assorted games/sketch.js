
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

engine = Engine.create();
world = engine.world;

var boy, boy_running, boy_collided;
var robber, robber_running, robberCaught
var ground, invisibleGround, groundImage;
var game1background;
var score = 0;
var obstacle1, obstacle2; 
var obstaclesGroup;
var spawnObstacles
var obstacles = [];
var game, game2, game3;
var gameEnd; 
var sketch
var resetButton


var wincond
var player
var platforms
var killplatforms

var bg_img

var game3
var ropeclass
var bubbleimg
var mouse
var mousehole
var cat
var cheeseimg
var blowerimg



var bubbleSound
var diedsound
var losesound
var jumpsound
var mariojump
var leafblower
var winsound
function preload() {
  jumpsound = loadSound("audio/jump.mp3")
  diedsound = loadSound("audio/die.mp3")
  bubbleSound = loadSound("audio/bubbles.mp3")
  leafblower = loadSound("audio/leafBlower.mp3")
  mariojump = loadSound("audio/mariojump.mp3")
  winsound = loadSound("audio/victory.mp3")
  losesound = loadSound("audio/losing.mp3")


mousehole = loadImage("assets/mousehole.png")
mouse = loadImage("assets/mouse.png")
cat = loadImage("assets/cat.png")
bubbleimg = loadImage("assets/bubble.png")
cheeseimg = loadImage("assets/cheese.png")
blowerimg = loadImage("assets/blower.png")

  backgroundImage = loadImage("assets/background.png");
  groundImage = loadImage("assets/ground.png");
  game1background = loadImage("assets/blue-sky.webp");
  boy_running = loadAnimation(
    "assets/boyRunning1.png",
    "assets/boyRunning2.png",
    "assets/boyRunning3.png",
    "assets/boyRunning4.png",
    "assets/boyRunning5.png",
    "assets/boyRunning6.png",
    "assets/boyRunning7.png",
    "assets/boyRunning8.png",
    "assets/boyRunning9.png",
    "assets/boyRunning10.png",
    "assets/boyRunning11.png",
    "assets/boyRunning12.png"
  );

  robber_running = loadAnimation(
    "assets/robberRunning1.png",
    "assets/robberRunning2.png",
    "assets/robberRunning3.png",
    "assets/robberRunning4.png",
    "assets/robberRunning5.png",
    "assets/robberRunning6.png",
    "assets/robberRunning7.png",
    "assets/robberRunning8.png",
    "assets/robberRunning9.png",
    "assets/robberRunning10.png",
    "assets/robberRunning11.png",
    "assets/robberRunning12.png",
    "assets/robberRunning13.png",
    "assets/robberRunning14.png",
    "assets/robberRunning15.png",
    "assets/robberRunning16.png",
    "assets/robberRunning17.png",
    "assets/robberRunning18.png",
    "assets/robberRunning19.png",
    "assets/robberRunning20.png",
    "assets/robberRunning21.png"



    
  );

  robberCaught =loadImage("assets/robbercaught.jpg")

  obstacle1 = loadImage("./assets/ton-image.png");
  obstacle2 = loadImage("./assets/money-bag-removebg-preview.png");

  bg_img = loadImage("assets/bg3.png")
}



function setup() {

  canvas = createCanvas(1200, 600);
  menu()
  obstaclesGroup = createGroup();


}

function draw() {
  Engine.update(engine);
  background("blue");

  fill ("black")
  textSize(60)
  text("Siam's Assorted Games",0,50)

  textSize(20)
  text("game 1 is an infinite runner game where you have to catch the robber and avoid the obstacles. use space to jump!",50,150)

  textSize(20)
  text("game 2 is a platformer game. use the arrowkeys to move around, red boxes will kill you, while green send you up!",50,230)

  textSize(20)
  text("game 3 is a physics engine game where your goal is to send the mouse to the mouse hole,cut the ropes by clicking, ",50,320)
  text("touching the bubble will send the mouse up, and clicking on the blower will send the mouse right! ",50,350)


  drawSprites()
}
function menu() {
  background("blue");
  button = createButton("Game 1 , CATCH THE ROBBER");
  button.position(50, 90);
  button.mousePressed(startGame1);

  button2 = createButton("Game 2 , HELP THE BOX ESCAPE");
  button2.position(50, 180);
  button2.mousePressed(startGame2);

  button3 = createButton("Game 3, HELP THE MOUSE ESCAPE");
  button3.position(50, 260);
  button3.mousePressed(startGame3);


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function startGame3() {
  clear();
  hideButtons();
  game3 = new Game3(ropeclass);
game3.setup()
}
function startGame2() {
  clear();
  hideButtons();
  game2 = new Game2();
  game2.setup();
}

function startGame1() {
  clear();
  hideButtons();
  game = new Game(gameEnd,sketch);

}
function hideButtons() {
  button.hide();
  button2.hide();
  button3.hide();
}

