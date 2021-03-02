class Target{
    constructor(x,y){
        var options = {
            isStatic : true,
        }
        this.body = Bodies.circle(x,y,40,options);
        this.col = 255
        World.add(world,this.body);
        }
 
    changeColor(){
            if(frameCount%5===0){
                this.col = color(random(255),random(255),random(255));
            }
        }
    
    display(){
       var pos = this.body.position;
       push();
       translate(pos.x,pos.y);
       rotate(this.body.angle);
       stroke("white");
       fill(this.col)
       ellipseMode(CENTER);
       ellipse(0,0,70,70);
       pop();
    }
}