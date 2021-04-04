const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    
getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

   
 if(backgroundImg)
        background(backgroundImg);
        noStroke();
        textSize(35);
        fill("white");
        text("Score " +score,width-300,50);

    Engine.update(engine);
    sunrise1.display();
    sunrise2.display();
    sunrise3.display();
    sunrise4.display();
    sunrise5.score();
    sunrise6.display();

    sunset7.display();
    sunset8.display();
    sunset9.display();
    sunset10.score();
    sunset10.display();
    sunset11.display();
    sunset12.display();

   



}

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json(); 
    var dateTime = responseJSON.datetime; 
    var hour = dateTime.slice(11,13);
     console.log(hour); 

     if(hour>=06 && hour<=19){
       bg="sunrise1.png" ; 
     }else if (hour>=06 && hour<08){
        bg="sunrise2.png"
    }else if (hour>=23 && hour===0){
        bg="sunrise10.png"
     }else if (hour===0 && hour<=03){
         bg="sunset11.png"
     }else if {
      bg="sunset12.png"   
     }
     
} 
     
      



