console.log('-------> Funções Calback #01: <--------')
  const fabricantes = ["Mercedes", "Audi", "BMW"]
  function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
  }
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante =>  console.log(fabricantes))

console.log('The End')
