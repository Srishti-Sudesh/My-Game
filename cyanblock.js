class Cyan{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
			restitution : 0,
            friction : 1,
            density : 1.2
        }

    this.body = Bodies.rectangle(x,y,width,height,options)    
    World.add(world,this.body);
    }

    display(){
         if(this.body.speed<3){
          this.body.display;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(this.body.angle);
          rectMode(CENTER);
          fill("cyan");
          stroke("royalblue");
          strokeWeight(2);
          rect(0,0,this.width,this.height);
          pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visibility = this.Visibility - 5;
          tint(255,this.Visibility);
          pop();
        }
      }
    }