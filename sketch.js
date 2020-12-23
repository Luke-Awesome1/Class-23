//namespacing 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;

var engine,world;
var ground;
var box1, box2;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,200,50,50);
  box2 = new Box(215,100,50,80);
  ground = new Ground(200,height,width,20);
}

function draw() {
  background("lightblue");  
  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();
  
}
