
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paperObj;
var dustbinObj;
var groundObj;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
  world = engine.world;
  
  dustbinObj = new Dustbin(1200, 650);
  paperObj = new Paper(200, 450, 70);
  groundObj = new   Ground(width/2 , 670 , width, 20);

  var render = Render.create({
    elememnt: document.body,
    engine: engine,
    options: {
      width: 1600,
      height: 700,
      wireframes: false
    }
  })
  Engine.run(engine);
  
  Render.run(render)
}


function draw() {
  background(255);
   rectMode(CENTER);
  dustbinObj.display();
  paperObj.display();
  groundObj.display();

  drawSprites();
 
}

function keyPressed() {
   if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:130,y:-145});
     }
     }
