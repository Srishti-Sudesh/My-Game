class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.col = 255
      World.add(world, this.body);
    }

    changeColor(){
      if(frameCount%5===0){
          this.col = color(random(255),random(255),random(255));
      }
  }

    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.col);
      stroke("white");
      strokeWeight(2);
      rect(pos.x, pos.y, this.width, this.height);
    }
  }
