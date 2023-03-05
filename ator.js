//  codigo ator
let xAtor = 125;
let yAtor = 415;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
   image(imagemDoAtor , xAtor, yAtor, 30, 30);
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
function verificaColisao(){
     //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
   for ( let i = 0; i < imagemCarros.length; i++){
     colisao = collideRectCircle ( xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
     if (colisao){
       atorVoltaPosicaoInicial();
       somDaColisao.play();
       if (pontosMaiosQueZero()){
          meusPontos -= 1; 
        }
      }
    }
  }

function atorVoltaPosicaoInicial(){
  yAtor = 415;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(28);
  fill(color(119,136,153));
  rect (160,8, 40, 25, 5);
  fill(color(0));
  stroke(0);
  text(meusPontos, 180, 30.5);
}

function marcaPontos(){
  if(yAtor < 30){
    meusPontos += 1;
    somDoPonto.play();
    atorVoltaPosicaoInicial();
  }
}

function pontosMaiosQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 415;
}





