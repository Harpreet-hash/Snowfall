class Snowflake {

  constructor(x,y) {
   var options={
       restitution:0.5,
       density:0.1,
       frictionAir:0.05
   }
   this.size=random(30,100)
   this.body=Bodies.circle(x,y,this.size,options);
   World.add(world,this.body)
   this.image=loadImage("snow5.webp")
  }

 display() {

  imageMode(CENTER)
  image(this.image,this.body.position.x,this.body.position.y,this.size,this.size)
   
 
    

 }

}

