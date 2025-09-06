function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(() =>  resolve(), tempo)
    })
}
//  esperarPor(2000)
//  .then(() =>  console.log('Executando Promise....'))
//  .then(esperarPor)
//  .then(() =>  console.log('Executando Promise....'))
//  .then(esperarPor)
//  .then(() =>  console.log('Executando Promise....'))
//  .then(esperarPor)
 // Asysnc/Await
//  Asysnc/Await - 2ªparte
function retornarValor(){
    return new Promise(resolve =>{
        setTimeout(()=> resolve(10), 5000)
    })
}
 async function executar() {
    let valor  = await retornarValor()
  await esperarPor(1500)
    console.log(`Asysnc/Await:${valor}`)
   await esperarPor(1500)
    console.log(`Asysnc/Await:${valor + 1}`)
   await esperarPor(1500)
    console.log(`Asysnc/Await:${valor + 2}`)

    return valor + 3


 }
const v = executar()
console.log(v)
//
async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor)
}
executarDeVerdade()
