console.log(' Reduce #02   ' )
 const alunos =[
     {nome: 'Ana', nota: 7.8, bolsista: true},
     {nome: 'Anatonio', nota: 9.8, bolsista: true},
     {nome: 'Ana Paula ', nota: 8.8, bolsista: false},
     {nome: 'Antunes ', nota: 6.8, bolsista: false},
 ]
 // deasafio 1: todos os alunos bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
// desafio 2: Algum aluno é bolsistas
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
console.log('The End')