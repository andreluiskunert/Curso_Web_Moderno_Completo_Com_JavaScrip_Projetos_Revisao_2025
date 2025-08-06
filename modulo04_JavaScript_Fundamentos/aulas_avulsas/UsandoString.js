console.log("Usando Template Strings: ")
console.log("Explica sobre Uso de Template String...")
const nome = 'Diane'
const concatenacao = 'Bom Dia ' + nome + ' !'
const template = `
  Bom Dia  
  ${nome}!!!!
`
console.log(concatenacao, template)
//  Expressoes...
console.log(`1 + 1 = ${1 + 1}`)
const up = texto =>texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`)
console.log("The End")
