console.log("Estrutura Swich:  ")
console.log("Explica sobre assuntos...")
//---
const imprimirResultado = function (nota) {
    switch(Math.floor(nota)){
        case 10:    case 9:
            console.log('Quadro de Honra...')
            break
        case 8:  case 7:
            console.log('Aprovado..')
            break
          case 6:  case 5: case 4:
            console.log('Recuperação...')
            break
          case 3:  case 2: case 1: case 0:
            console.log('Reprovado...')
            break
            default:
                console.log('Nota Invaĺida...')
    } 
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
