console.log("Tipos de Array")
console.log("Explica  sobre os Tipos de Array dentro do JS ...")
console.log("Ex.:")
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], ",", valores[3])
console.log(valores[4]) // undefined
valores[4] = 10.0
console.log("1ªparte:",valores)
console.log(valores.length)
valores.push({id:3}, false, null, 'teste')
console.log("2ªparte:",valores)
console.log(valores.pop())
delete valores[0]
console.log("3ªparte:",valores)
console.log("Tipo são:", typeof valores)
console.log("The End")