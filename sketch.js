var alien_1, alien_1_animations;
var marciano_1, marciano_1_animation;
var backgroundImg;

function preload(){
  alien_1_animations = loadAnimation("./assets/alien_1-removebg-preview.png",
   "./assets/alien_2-removebg-preview.png",
   "./assets/alien_3-removebg-preview.png",
   "./assets/alien_4-removebg-preview.png");
  marciano_1_animation = loadAnimation("./assets/Marciano_1-removebg-preview.png",
  "./assets/marciano_2-removebg-preview.png",
  "./assets/marciano_3-removebg-preview.png")
   backgroundImg = loadImage("./assets/background.png")
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  alien_1 = createSprite(width/2-150, height/2);
  alien_1.addAnimation("Alien", alien_1_animations);
  marciano_1 = createSprite(width/2+150, height/2);
  marciano_1.addAnimation("Marciano", marciano_1_animation);
  
}

function draw() {
  background("grey");
  image(backgroundImg,0,0,width,height);
  drawSprites();
}