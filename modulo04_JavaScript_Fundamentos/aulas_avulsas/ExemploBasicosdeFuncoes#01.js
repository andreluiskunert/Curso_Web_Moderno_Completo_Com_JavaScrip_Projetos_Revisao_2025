console.log("Exemplos Básicos de Funções #01: ")
console.log("Explica sobre assuntos...")
// ---------
console.log('função sem retorno:')
function  imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(1, 2)
imprimirSoma(2, 3)
imprimirSoma(3, 4)
imprimirSoma(2) // NaN
imprimirSoma(2, 5, 3, 5, 6)
imprimirSoma() // NaN
//-----
console.log('Função com retorno:')
 function soma(a, b=1){
    return a + b
 }
 console.log(soma(7, 3))
 console.log(soma(3))

console.log("The End")