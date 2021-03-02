
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var edges;
var balls, diam;
var red1, red2, red3, red4, red5, red6, red7;
var orange1, orange2, orange3, orange4, orange5, orange6;
var yellow1, yellow2, yellow3, yellow4, yellow5;
var lime1, lime2, lime3, lime4;
var ball, invisibleB;

function preload(){

}

function setup() {
	createCanvas(1200,550);
	edges = createEdgeSprites();

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(400,400,270,10);
  ground2 = new Ground(700,200,230,10);

  red5 = new Red(300,390,40,50);
	red1 = new Red(350,390,30,50);
	red2 = new Red(400,390,30,50);
	red3 = new Red(450,390,30,50);
	red4 = new Red(500,390,30,50);

	orange1 = new Orange(325,350,40,50);
	orange2 = new Orange(375,350,40,50);
	orange3 = new Orange(425,350,40,50);
	orange4 = new Orange(475,350,40,50);

	yellow1 = new Yellow(350,250,40,50);
	yellow2 = new Yellow(400,250,40,50);
	yellow3 = new Yellow(450,250,40,50);

	lime1 = new Lime(375,215,40,50);
	lime2 = new Lime(425,215,40,50);

  
	cyan1 = new Cyan(650,180,40,50);
	cyan2 = new Cyan(700,180,40,50);
  cyan3 = new Cyan(750,180,40,50);

  blue1 = new Blue(675,140,40,50);
  blue2 = new Blue(725,140,40,50);

  purple1 = new Purple(700,100,40,50);

	target = new Target(1000,250); 

	ball = new Ball(150,250,50);

	constraint = new Chain(ball.body,{x:150,y:250});

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  fill("orange")
  textSize(25);
  strokeWeight(3)
  stroke("yellow");
  text("Press SPACE to get another try!",30,50);

  fill("lightblue")
  textSize(25);
  strokeWeight(3)
  stroke("blue");
  text("Try to get to the colourful target!",800,510);

  if(ball.body.position.x >=900 && ball.body.position.x <= 1150 && 
    ball.body.position.y <= 350 && ball.body.position.y >= 200){
    fill("pink")
    textSize(55);
    strokeWeight(3)
    stroke("magenta");
    text("YOU WIN!",460,260);
    World.remove();
  }



  red1.display();
  red2.display();
  red3.display();
  red4.display();
  red5.display();

  orange1.display();
  orange2.display();
  orange3.display();
  orange4.display();

  yellow1.display();
  yellow2.display();
  yellow3.display();

  lime1.display();
  lime2.display();


  cyan1.display();
  cyan2.display();
  cyan3.display();

  blue1.display();
  blue2.display();

  purple1.display();

  target.display();
  ball.display();
  target.changeColor();
  constraint.display();

  ground.display();
  ground.changeColor();
  ground2.display();
  ground2.changeColor();
  drawSprites();

  //detectCollision(ball,ball);
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    constraint.fly();
}


  

function keyPressed(){
  if(keyCode===32){
    constraint.attach(ball.body);
  }
}
