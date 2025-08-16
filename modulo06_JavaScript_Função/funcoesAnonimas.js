console.log('-------> Funções Anonimas: <--------')
const soma = function (x, y) {
  return x + y
}
const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}
imprimirResultado(3, 5)
 imprimirResultado(5, 7, soma)
 imprimirResultado(9, 5, function(x, y){
    return x - y
 })
 imprimirResultado(9, 2, (x , y) => x * y)
 //----
 const pessoa = {
    falar: function(){
        console.log('Boa noite')
    }
 }
 pessoa.falar()
  console.log('The End')
