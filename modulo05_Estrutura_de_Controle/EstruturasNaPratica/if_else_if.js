console.log("Estrutura if/else/if:  ")
console.log("Explica sobre assuntos...")
//---
Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}
//---
const imprimirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log('Quadro de honra...')
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado...')
    } else if(nota.entre(4, 6.99)){
        console.log('Recuperação...')
    } else if(nota.entre(0, 3.99)){
        console.log('Reprovado...')
    } else {
        console.log('Nota Inválida...')
    }
    // console.log('Fim')
}
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(7.9)
imprimirResultado(6.9)
imprimirResultado(5.99)
imprimirResultado(4.99)
imprimirResultado(3.99)
imprimirResultado(2.99)
imprimirResultado(1.99)
imprimirResultado(-1)
imprimirResultado(11)
console.log("The End")
