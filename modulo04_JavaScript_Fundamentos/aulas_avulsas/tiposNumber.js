console.log("Tipos: number")
console.log("Explica sobre Tipos Number ...")
console.log("Ex.:")
const peso1 =   1.0 //65.60 
const peso2 = Number('2.0') // 130.00
console.log(peso2, peso1)
console.log(Number.isInteger(peso1))
// 
const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2))
console.log(media.toString(2)) // converter pra binário
console.log(typeof media)
console.log("The End")