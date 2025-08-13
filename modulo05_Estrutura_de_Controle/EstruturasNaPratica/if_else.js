console.log("Estrutura if/else:  ")
console.log("Explica sobre assuntos...")
//---
const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado....')
    } else {
     console.log('Reprovado....')
    } 
}
imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado('levou bomba...')
console.log("The End")
