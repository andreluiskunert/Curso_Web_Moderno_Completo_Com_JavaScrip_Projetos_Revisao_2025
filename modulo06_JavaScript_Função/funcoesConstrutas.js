console.log('-------> Funções Construtoras: <--------')
function carro(velocidadeMaxima = 2001, delta = 5){
   // atributo privado:
   let velocidadeAtual = 0
   //metodo publico
   this.acelerar = function (){
    if(velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta
    } else{
      velocidadeAtual = velocidadeMaxima
    }
   }
    //metodo publico
    this.getVelocidadeAtual = function (){
      return velocidadeAtual
    }
}
console.log('The End')
