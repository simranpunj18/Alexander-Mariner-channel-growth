var hour;
var minute; 
var second;
var Alexander Mariner; 
var subscribe button; 
var channel growing; 




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  Alexander Mariner = createSprite(200,172,50,50);
  subscribe button = createSprite(100,353,50,50);
  channel growing = createSprite(300,64,50,50);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  Alexander Mariner = loadImage(Alexander Mariner_Img, "Alexander Mariner.jpg");
  subscribe button = loadImage(subscribe button_Img, "Subscribe.jpg");
  channel growing = loadImage(channel growing_Img, "subscrinergain.jpeg");

  Alexander Mariner.addAnimation(); 
  subscribe button.addAnimation(); 
  channel growing.addAnimation();


//Calculating time using predefined func from p5.js
hr = hour(); 
min = minute(); 
sc = second();
Alexander Mariner = Alexander Mariner();
Subscribe button = Subscribe button(); 
var channel growing = channel growing();

map(){
scAngle = map(sc, 0, 60, 0, 360);
stroke(255,0,0); 
strokeWeight(7); 
line(0,0,100,0);

//drawing subscribers on hand 
push();
rotate(scAngle); //rotate the subscribers based on angle calculated 
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();
}
}

