// operador ...rest(juntar)/spread(esplhar)
//usar rest com parâmetro de função

// usar spread com objeto
const funcionario = {nome: 'Maria', salario:1800.99}
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com arrz
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal, grupoA)