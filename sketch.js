const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    bird = new Bird(100,100);

    box1 = new Box(700,730,70,70);
    box2 = new Box(900,730,70,70);
    box3 = new Box(700,685,70,70);
    box4 = new Box(900,685,70,70);
    box5 = new Box(800,640,70,70);

    ground = new ground(600,height,1200,20)

    pig1 = new Pig(800,730);
    pig2 = new Pig(800,680);

    log1=new Log(800,720,280,PI);
    log2=new Log(800,670,280,PI);
    log3=new Log(750,620,150,-PI/4);
    log4=new Log(850,600,150,PI/4);

}
 
function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    ground.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird.display();
}
