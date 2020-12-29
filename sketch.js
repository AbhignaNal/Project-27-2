
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var engine, world, canvas;
var mConstraint;

function preload()
{
	
}

function setup() {
	canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	let canvasMouse = Mouse.create(canvas.elt);
	canvasMouse.pixelRatio = pixelDensity();

	let options = {
		mouse: canvasMouse
	}

	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);

	roof = new Roof(400, 175, 600, 30);

	bob1 = new Bob(200, 525, 100);
	bob2 = new Bob(300, 525, 100);
	bob3 = new Bob(400, 525, 100);
	bob4 = new Bob(500, 525, 100);
	bob5 = new Bob(600, 525, 100);

	rope1 = new Rope(bob1.body, {x: 200, y: 175});
	rope2 = new Rope(bob2.body, {x: 300, y: 175});
	rope3 = new Rope(bob3.body, {x: 400, y: 175});
	rope4 = new Rope(bob4.body, {x: 500, y: 175});
	rope5 = new Rope(bob5.body, {x: 600, y: 175});

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255, 255, 255);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
}

function bobUp(){
	Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY})
}



