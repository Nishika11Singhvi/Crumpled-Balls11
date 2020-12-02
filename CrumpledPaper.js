class Paper
{
   constructor(x,y,r){
       var options={
           isStatic: false,
           restitution: 0.3,
           density: 1,
           friction: 0.5
       }
       this.r=r;
       this.image = loadImage("Images/paper.png");
       this.body=Bodies.circle(x,y,r,options);
       World.add(world,this.body);

   }
   display(){
       var pos=this.body.position;
       push();
       translate(pos.x,pos.y);
       imageMode(CENTER);
       fill(255);
       image(this.image,0,0,this.r,this.r);
       pop();
   }
   


}