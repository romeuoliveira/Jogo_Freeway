//    codigo carro

  // Carros repetidos tem o mesmo y,
  // porém o x é maior para haver distância entre eles. 
    
let xCarros = [650, 850, 650, 820, 650, 650, 800, 650, 850,600,900];
let yCarros = [ 48, 48, 112, 112, 170, 239, 239, 298, 298, 360, 360];

let velocidadeCarros = [3.5, 3.5, 3, 3, 4.5, 2.8, 2.8, 3.5, 3.5, 2.8, 2.8 ];
let comprimentoCarro = 50;
let alturaCarro = 40;                              

function mostraCarro(){
  for ( let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i] , xCarros[i] , yCarros[i] , comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for ( let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}
  
  
function voltaPosicaoInicialDoCarro(){
  for ( let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i] )){
      xCarros[i] = 620;
 
    }
  }
}

function passouTodaATela ( xCarro ){
  return xCarro  < - 50;
}
























