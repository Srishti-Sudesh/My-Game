class Ball {
    constructor(x,y,r){
       var options = {
            isStatic : false,
            restitution : 0.2,
            //density : 1

        }

        this.body = Bodies.circle(x,y,r,options);
        World.add(world, this.body);
    }


    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        strokeWeight(4);
        fill("violet")
        stroke("purple");
        ellipseMode(CENTER);
        ellipse(0,0,this.r*2,this.r*2);
        pop();
     }
    


}