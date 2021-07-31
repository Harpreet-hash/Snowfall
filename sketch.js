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

 
  console.log(snow)

}

function draw() 
{
  Engine.update(engine);
  background(snow1); 
   

  if(frameCount%20==0)
  {
    var snowFlake=new Snowflake(random(0,1000),random(-50,0))

    snow.push(snowFlake)
  }

for(var i=0;i<snow.length;i++){
  Matter.Body.applyForce(snow[i].body,snow[i].body.position,{x:random(-2,2),y:random(0,1)})
  snow[i].display();
  }
}
