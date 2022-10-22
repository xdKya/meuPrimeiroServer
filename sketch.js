var ball;
var position;
var database;

function setup() {
  createCanvas(500, 500);

  ball = createSprite(250, 250, 20, 20);
  ball.shapeColor = "black";
}

function draw() {
  background("white");

  //se eu apertar a tecla w
  if (keyDown("w")) {
    //a bola vai 5 pixels para cima
    ball.y -= 5;
  }
  //se eu apertar a tecla a
  if (keyDown("a")) {
    //a bola vai 5 pixels para a esquerda
    ball.x -= 5;
  }

  //se eu apertar a tecla d
  if (keyDown("d")) {
    //a bola vai 5 pixels para a direita
    ball.x += 5;
  }

  //se eu apertar a tecla s
  if (keyDown("s")) {
    //a bola vai 5 pixels para baixo
    ball.y += 5;
  }

  drawSprites();
}
