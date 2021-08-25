
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 bin=new dustbin(1200,650)
	 paper=new Paper(200,450,30)
	 ground=new Ground(400,690,800,20)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bin.display()
  paper.display()
  ground.display()
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper,body.position,{x:85,y:-85})
	}
}



