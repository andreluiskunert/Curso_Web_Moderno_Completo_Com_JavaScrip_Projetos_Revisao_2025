console.log("Operadores Destructuring #02 : ")
console.log("Explica sobre assuntos...")
// ---------
const [a]  = [10]
console.log(a)
const [n1, , n3, , n5, n7 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n7)
//----
const [ [, nota]] = [[, 8 ,8],[9, 6, 8 ]] // é muito difici
console.log(nota)
console.log("The End")
