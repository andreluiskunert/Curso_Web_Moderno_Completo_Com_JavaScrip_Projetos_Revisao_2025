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
 async function executar() {
  await esperarPor(1500)
    console.log(' Asysnc/Await 1')
   await esperarPor(1500)
    console.log(' Asysnc/Await 2')
   await esperarPor(1500)
    console.log(' Asysnc/Await 3')


 }
 executar()