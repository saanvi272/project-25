
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbinmaterial1,dustbinmaterial2,dustbinmaterial3;
var paper;
var paperimg,di;

function preload(){
	di=loadImage("dustbingreen.png");
}


function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground = new Ground(650,650,1300,10);

dustbinmaterial1 = new Dustbin(1100,630,160,20);
dustbinmaterial2 = new Dustbin(1020,550,20,100);
dustbinmaterial3 = new Dustbin(1180,550,20,100);

paper = new Paper(480,645,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(RADIUS);
  background("white");

  
  
 ground.display();
 dustbinmaterial1.display();
 dustbinmaterial2.display();
 dustbinmaterial3.display();
 image(di,1000,450,200,200);
 paper.display();
}
function keyPressed(){
if(keyCode===32){
Matter.Body.applyForce(paper.body, paper.body.position, {x:400,y:-400});
}
}

