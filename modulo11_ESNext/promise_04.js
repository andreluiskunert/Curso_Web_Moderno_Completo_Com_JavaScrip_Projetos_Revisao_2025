function gerarNuneroEntre(min, max, tempo) {
  if(min > max){  [max, min]= [min, max]

  }
  return new Promise(resolve =>{
    const fator = max - min + 1
    const aleatorio = parseInt( Math.random() * fator)  + min
    resolve(aleatorio)
  }, tempo)
}
function gerarVariosNumeros(){
    return Promise.all(
        [ 
            gerarNuneroEntre(1, 60, 1000),
            gerarNuneroEntre(1, 60, 500),
            gerarNuneroEntre(1, 60, 300)
        ]
    )
}
console.time('promise')
gerarVariosNumeros() 
.then(numeros => console.log(numeros))
.then(() =>{

    console.log('promise')
  console.timeEnd('promise')
}
  
)

