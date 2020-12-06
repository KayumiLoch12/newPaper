
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball;
var box1;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1080, 700);
    
	engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,680, 10090,20);
  paperball = new PaperBall(40,60,20);
  box1 = new Basket(940,510,140,180);
  
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
  ground.display();
  paperball.display();
  box1.display();
  
  drawSprites();
 
}
function keyPressed() {
if (keyCode === UP_ARROW){
  Matter.Body.applyForce(paperball.body, paperball.body.position,{x:65, y:-65});
} 



}


