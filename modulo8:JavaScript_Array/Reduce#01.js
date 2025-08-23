console.log(' Reduce #01   ' )
 const alunos =[
     {nome: 'Ana', nota: 7.8, bolsista: true},
     {nome: 'Anatonio', nota: 9.8, bolsista: true},
     {nome: 'Ana Paula ', nota: 8.8, bolsista: true},
     {nome: 'Antunes ', nota: 6.8, bolsista: true},
 ]
 console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, autal){
    console.log(acumulador, autal)
    return acumulador + autal
}, 0)
console.log(resultado)
console.log('The End')