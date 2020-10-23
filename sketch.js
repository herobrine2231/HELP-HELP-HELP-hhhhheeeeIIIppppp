
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof,bob1,bob2,rope1;
var bobDiameter;
var bob3, bob4, bob5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobDiameter=10;
    roof = new Roof(400,200,500,10);
	bob1 = new Bob(500,500,30);
	bob2 = new Bob(460,500,30);
	bob3= new Bob( 420,500,30);
	bob4= new Bob(380,500,30);
	bob5= new Bob(340,500,30);
//rope1= new Rope(bob1.body,roof.body,-bobDiameter,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
 bob1.display();
//rope1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
  drawSprites();
 
}



