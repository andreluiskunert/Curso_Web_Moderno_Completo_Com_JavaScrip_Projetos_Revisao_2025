
console.log('Tipos Boolean')
console.log("Comenta sobre o assunto...")
console.log("JavaScript aceita True{verdadeiro} ou False{falso")
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
isAtivo = 1
console.log(!!isAtivo)
console.log('Os verdadeiros: ')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = 33))
// console.log(!!(isAtivo = 0))  false
console.log(!!(isAtivo = true))
console.log('Ø Os falso: ')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log('pra finalizar..')
console.log(!!('' || null || 0 || ' '))
let nome = 'André Luis'
console.log(nome || 'Desconhecido')
console.log("The End")