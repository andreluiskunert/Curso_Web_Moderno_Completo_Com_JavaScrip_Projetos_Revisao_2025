console.log("Evitando Modificações :")
// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'qualquer', preco:1.99, tag:'promoção'
})
console.log('Exensivel:', Object.isExtensible(produto))
produto.nome = 'Borracha',
produto.descricao = 'Borracha escolar banca'
delete produto.tag 
console.log(produto)
// Object.seal
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 43
console.log(pessoa)
// Object.freeze = Selado + valores constantes 
console.log("The End")