
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var bin1;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,height-20,width,50);
	paper1 = new Paper(100,360,50);
	bin1 = new Dustbins(width-200,height-50);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  
  background("skyblue");

 ground.display();
 paper1.display();
 bin1.display();
}

function keyPressed()
{
	if(keyCode == UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x : 500, y : -500});
	}


}

