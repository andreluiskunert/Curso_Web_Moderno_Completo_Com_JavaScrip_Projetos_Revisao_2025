console.log("Estrutura for/in:  ")
console.log("Explica sobre assuntos...")
//---
// Estrutura "FOR /IN":

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i in notas){
//   console.log(`nota = ${notas[i]}`)
     console.log(i, notas[i])
}
//---
console.log("Objeto")
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 34,
    peso: 64
}
for( atributo in pessoa) {
    console.log(`${atributo} = ${pessoa}`)
}
console.log("The End")
