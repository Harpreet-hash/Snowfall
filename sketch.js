var snow1;
var engine, world;

var snow=[];

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

function preload() {
 snow1 = loadImage("snow2.jpg")
}

function setup() 
{
  createCanvas(1000,600);
  engine=Engine.create();
  world=engine.world;


}

function draw() 
{
  Engine.update(engine);
  background(snow1); 
   
  
}