//variáveis da bolinha
let xBall = 300;
let yBall = 200;
let diameter = 18;
let lightning = diameter / 2;

//variáveis da velocidade da bolinha
let velocityXBall = 6;
let velocityYBall = 6;

//variáveis da raquete
let xRacket = 5;
let yRacket = 150;
let racketLength = 10;
let racketHeight = 90;

function setup () { //fundo
  createCanvas(600, 400); //comprimento, altura
}

function draw () {
  background(0);//cor do fundo
  showBall();
  movesBall();
  checkEdgeCollision();
  showRacket();
  moveRacket();
  checkRacketCollision();
}

function showBall () {
  //o ponto (0,0) fica no canto superior esquerdo
  circle(xBall, yBall, diameter);//posição eixo x, y, diametro
}

function movesBall () {
  //movimentação da bolinha
  xBall += velocityXBall; 
  yBall += velocityYBall;
}

//verifica colisão borda
function checkEdgeCollision () {
 //a colisão da bolinha é reconhecida na borda da bolinha e não no seu ponto central (raio)
  if (xBall + lightning > width || xBall - lightning < 0) { //se a bolinha colide com a borda
    velocityXBall *= -1; //inverte a velocidade
  }
  
  if (yBall + lightning > height || yBall - lightning < 0){ //se a bolinha colide na altura máxima
    velocityYBall *= -1;
  }
}

function showRacket () {
  rect(xRacket, yRacket, racketLength, racketHeight);
}

//movimentação da raquete (para funcionar precisa clicar no quadrado do jogo - site p5.js)
function moveRacket () {
  if (keyIsDown (UP_ARROW)){
    yRacket -= 10;
  }
  if (keyIsDown (DOWN_ARROW)){
    yRacket += 10;
  }
}

//verifica a colisão da raquete com a bolinha
function checkRacketCollision () {
  //quando a raquete está na posição inicial 
  //quando a raquete está na parte superior da tela (em cima da bolinha)
  //quando a raquete está na parte inferior da tela (em baixo da bolinha)
  if (xBall - lightning < xRacket + racketLength && yBall - lightning < yRacket + racketHeight && yBall + lightning > yRacket) {
    velocityXBall *= -1;
  }
}