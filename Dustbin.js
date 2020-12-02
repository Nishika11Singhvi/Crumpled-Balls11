class Dustbins
{
    constructor(x,y){
        this.width=150;
        this.height=150;
        this.t=20;
        this.image = loadImage("Images/dustbingreen.png");
        this.bb=Bodies.rectangle(x,y,this.width,this.t,{isStatic:true});
        this.lb=Bodies.rectangle(x-this.width/2,y-this.height/2,this.t,this.height,{isStatic:true});
        this.rb=Bodies.rectangle(x+this.width/2,y-this.height/2,this.t,this.height,{isStatic:true});
        World.add(world,this.bb);
        World.add(world,this.lb);
        World.add(world,this.rb);
    }
    display(){
       var bp=this.bb.position;
        var lp=this.lb.position;
        var rp=this.rb.position;
        push()
        translate(bp.x,bp.y+10);

        imageMode(CENTER);
        image(this.image, 0,-this.height/2,this.width,this.height);
        //rect(lp.x,lp.y,this.t,this.height);
       // rect(rp.x,rp.y,this.t,this.height);
       pop();
    }
}