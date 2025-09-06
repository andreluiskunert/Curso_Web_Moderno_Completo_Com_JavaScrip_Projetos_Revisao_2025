
function gerarNuneroEntre(min, max) {
  if(min > max){
    [max, min]= [min, max]

  }
  return new Promise((resolve, reject)  =>{
    const fator = max - min + 1
    const aleatorio = parseInt( Math.random() * fator)  + min
    if(numerosProibidos.includes(aleatorio)) {
        reject('Número Repetido')
    } else {
         resolve(aleatorio)
    }
   
  })
}
function gerarMegaSena(qtdeNumero) {
    try {
         const numeros = []
   for(let _ of Array(10).fill()) {
    gerarNuneroEntre(1, 60, numeros)
   }
   return numeros
    } catch(e){
        if(tentativas > 10) {
            throw "Que Chato!!! Perdeu Name"
        }
        gerarMegaSena(qtdeNumero, tentativas + 1)
    }
   
} 
// gerarNuneroEntre(1, 5, [1, 2, 4])
//  .then(console.log)
//  .catch(console.log)
gerarMegaSena(15)
.then(console.log)
.catch(console.log)