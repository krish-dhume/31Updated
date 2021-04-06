const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var ground;
var divisionheight=300;
var division=[];
var particles=[];
var plinkos=[];
var score=0;

function setup() {
  createCanvas(800,700);
  
  engine = Engine.create();
    world = engine.world;
    

  ground=new Ground(600,height,1200,20);
  for(var k=0;k<=width;k=k+60){
  division.push(new Division(k,height-divisionheight/2,10,divisionheight));

}





for (var j = 75; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,75));
}

for (var j = 50; j <=width-10; j=j+50) 
{

   plinkos.push(new Plinko(j,175));
}

 for (var j = 75; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,275));
}

 for (var j = 50; j <=width-10; j=j+50) 
{

   plinkos.push(new Plinko(j,375));
}



}
function draw() {
  background(0,0,0); 
 Engine.update(engine);
textSize(24);
fill("white")
text("Score:"+score,100,50)

 for(var k=0;k<division.length;k++){
division[k].display();
 }
 if(frameCount%60===0){
   particles.push(new Particle(random(width/2-100,width/2+100),10,10))
   score=score+1;
 }
 for(var j=0;j<plinkos.length;j++){
  plinkos[j].display();
   }
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }

  ground.display();
}





     
