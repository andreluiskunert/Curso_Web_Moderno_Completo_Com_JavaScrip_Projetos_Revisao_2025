console.log(' :  ' )
const aprovados = ['André Luis ', 'Pedro Carlos', 'Rock Pedroso']
aprovados.forEach(function(nome, indice,array, x) {
    console.log(`${indice + 1} ${nome}`)
    console.log(x)
})
aprovados.forEach(nome => console.log(nome))
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
console.log('The End')