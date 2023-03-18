//  codigo ator
let xAtor = 125;
let yAtor = 419;
let colisao = false;
let meusPontos = 0;
let maxPontos = 'Max Score';
let maxScore = 0;

function mostraAtor(){
   image(imagemDoAtor , xAtor, yAtor, 29, 29);
  
    //rect (125,419, 30, 30) 
    //fill(color(0))
    //circle (125,419, 10);
    
    
    //ellipse(125,419, 30, 30)
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
    if (keyIsDown(DOWN_ARROW)){
      if(podeSeMover()){
        yAtor += 3;
    }    
  }
}

function movimentoLateralDoAtor(){
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -=3;
  }
}


function verificaColisao(){
     //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
   for ( let i = 0; i < imagemCarros.length; i++){
     colisao = collideRectCircle ( xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor,10 )
     if (colisao){
       atorVoltaPosicaoInicial();
       somDaColisao.play();
       if (pontosMaiorQueZero()){
          meusPontos -= 1; 
        }
      }
    }
  }

function atorVoltaPosicaoInicial(){
  yAtor = 420;
}
function marcaPonto(){
  if(yAtor < 15){
    meusPontos++;
    somDoPonto.play();
    atorVoltaPosicaoInicial();
  }
}
//placar pontos normal
function placar(){
  stroke(0);
  textAlign(CENTER);
  textSize(28);
  fill(color(119,136,153));
  rect (160,8, 40, 25, 5);
  fill(color(0));
  text(meusPontos, 180, 30.2);
}
 //placar acumulado sem colidir
 function placarRecorde(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255));
  rect (480,8, 110, 25, 5);
  fill(color(255,0,0));
  stroke(255);
  text( maxScore, 573, 29.2);

   //mostra maxScore
  textAlign(CENTER);
  textSize(14);
  text(maxPontos , 525, 26)

  }

function acumulaPontos(){
  if(yAtor < 20  && 
     maxScore == meusPontos){
        maxScore++;
  }
}  


function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 415;
}

