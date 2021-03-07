var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var gameState = 'PLAY';
 
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var particle;
var line;
var divisions = [];
var count=0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   //if (gameState==='PLAY'){

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
    
//}
 


function draw() {
  background("#fc0377");
  textSize(30)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  fill("#01717d");
  
  text("Score : "+score,20,30);
  textFont('Jokerman')
  
  textSize(30)
  text(" 500 ", 5, 550);
  text(" 50 ", 90, 550);
  text(" 150 ", 160, 550);
  text(" 400 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 200 ", 400, 550);
  text(" 350 ", 480, 550);
  text(" 300 ", 560, 550);
  text(" 450 ", 640, 550);
  text(" 250 ", 720, 550);
  
  ground.display();
  

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /* if(frameCount%60===0){
     particles.push(new particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
   if (gameState==='PLAY'){
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle!=null){
     
    particle.display();
      
    if(particle.body.position.y>700){

      if(particle.body.position.x<80&&particle.body.position.x>0) {

        score=score+500;      
        particle = null;
        if(count >= 5){
          gameState = "END"; } 

      }

      else if(particle.body.position.x<160 && particle.body.position.x>80){

        score = score+50;
        particle = null;
        if(count>=5){ gameState = "END";}

      }

      else if(particle.body.position.x<240 && particle.body.position.x>160){

        score = score+150;
        particle = null;
        if(count>=5){ gameState = "END";}

      }

      else if(particle.body.position.x<320 && particle.body.position.x>240){

        score = score+400;
        particle = null;
        if(count>=5){ gameState = "END";}

      }

      else if(particle.body.position.x<400 && particle.body.position.x>320){

        score = score+100;
        particle = null;
        if(count>=5){ gameState = "END";}

      }

      else if(particle.body.position.x<480 && particle.body.position.x>400){

        score = score+200;
        particle = null;
        if(count>=5){ gameState = "END";}

      }

      else if(particle.body.position.x<560 && particle.body.position.x>480){

        score = score+350;
        particle = null;
        if(count>=5){ gameState = "END";}

      }

      else if(particle.body.position.x<640 && particle.body.position.x>560){

        score = score+300;
        particle = null;
        if(count>=5){ gameState = "END";}

      }

      else if(particle.body.position.x<720 && particle.body.position.x>640){

        score = score+450;
        particle = null;
        if(count>=5){ gameState = "END";}

      }
            
      else if(particle.body.position.x<800 && particle.body.position.x>720){

        score = score+25*9-0;
        particle = null;
        if(count>=5) {gameState = "END";}

      }      
            
    }
    
  }
}

  for(var i = 0; i < divisions.length; i++){
     
    divisions[i].display();

  }

  if(gameState === "END"){

    background("LavenderBlush");
    textFont('Papyrus')
    fill("RoyalBlue");
    textSize(100);
    text("Game Over", 140, 400);
    textSize(50);
    text('Score:'+score,275,460)
   
  }

}
function mousePressed(){
  if (gameState!=='END'){
    count++;
    particle= new Particle(mouseX,10,10,10);
  }
}