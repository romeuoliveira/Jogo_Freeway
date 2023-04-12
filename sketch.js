// codigo funcao principal do jogo


function setup() {
  createCanvas(600, 450);
  somDaTrilha.loop();
}


function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  movimentoLateralDoAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  placar();
  placarRecorde();
  acumulaPontos();
  marcaPonto();

} 


 
