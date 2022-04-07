var aluno13, aluno13_img;

function preload(){
  aluno13_img = loadImage("./assets/images.png");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  aluno13 = createSprite(width/2, height/2);
  aluno13.addImage(aluno13_img);
}

function draw() {
  
  drawSprites();
}