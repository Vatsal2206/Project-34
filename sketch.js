
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var string1,string2,string3,string4;
var bob1,bob2,bob3,bob4;
var handle1,handle2,handle3,handle4;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(310,500);
	bob2 = new Bob(370,500)
	bob3 = new Bob(430,500)
  bob4 = new Bob(490,500)
  
  string1 = new String(bob1.body, {x:310, y :300 })
  string2 = new String(bob2.body, {x:370, y :300 })
  string3 = new String(bob3.body, {x:430, y :300 })
  string4 = new String(bob4.body, {x:490, y :300 })
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

 
  //text("Drag the ")

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();

  fill("red");
  textSize(20);
  text("1",bob1.body.position.x - 5,bob1.body.position.y + 20)
  text("2",bob2.body.position.x - 5,bob2.body.position.y + 20)
  text("3",bob3.body.position.x - 5,bob3.body.position.y + 20)
  text("4",bob4.body.position.x - 5,bob4.body.position.y + 20)

  fill(250, 5, 238)
  textSize(30)
  text("Drag the 1st bob and release it towards the 2nd bob to start.",1,50)
 
}

function mouseDragged(){

		Matter.Body.setPosition(bob1.body,{x:mouseX , y:mouseY})
	
}

