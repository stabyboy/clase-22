const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var ground,ball;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
engine = Engine.create();
world = engine.world;

options = {
isStatic:true

}
ground = Bodies.rectangle(200,390,200,20,options)
World.add (world,ground)

ball_options = {
restitution:1
}

ball = Bodies.circle(200,100,20,ball_options)
World.add (world,ball)

}

function draw() {
  background(0,0,0);
  Engine.update(engine)
  rectMode (CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}