console.log("Exemplos Básicos de Funções #02 : ")
console.log("Explica sobre assuntos...")
// ---------
// Armazenando uma função em uma variável:
const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma(2, 5)
// Armazenando uma função em arrow uma variável:
const soma = (a, b) =>{
    return a + b
}
console.log(soma(2, 3))
// retorno implicito:
const substracao = (a, b) => a - b
console.log(substracao(4, 1))
const imprimir2 = a => console.log(a)
imprimir2('Bora Codar com JavaScript')

console.log("The End")