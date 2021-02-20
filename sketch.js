
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1,Ball;


function setup() {
	createCanvas(830,640);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,2000,50)

	b1 = new Bin(700,600,200,20);
	b2 = new Bin(610,540,20,100);           
	b3 = new Bin(790,540,20,100);          
	

    var options={
		isStatic:false,
		restitution:0.5,
		friction:0.5,
		density:1.2
	}
	Ball=Bodies.circle(100,300,30,options);
	fill("yellow");

    World.add(world,Ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  b1.display();
  b2.display();
  b3.display();
  ground.display();
   
  ellipse(Ball.position.x,Ball.position.y,30);
  
  fill("limegreen");
  textFont("Jokerman")
  textSize(30);
  text("Crushed paper (vs) Bin",300,50);
  textFont("cursive")
  fill("blue");
  text("___________________",280,56);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	 
      Matter.Body.applyForce(Ball.body,Ball.body.position,{x:85,y:-85});
	 }
   }

