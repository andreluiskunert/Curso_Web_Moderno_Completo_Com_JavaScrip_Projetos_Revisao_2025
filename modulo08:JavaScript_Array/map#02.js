console.log(' Map#02 ' )
const carrinho = [
    '{"nome":"Borracha", "preco": 3.45 }',
    '{"nome":"Caderno", "preco": 13.45 }',
    '{"nome":"Kit de Lapis", "preco": 41.22 }',
    '{"nome":"Caneta", "preco": 7.45 }'

]
// Retornar um Array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 
//
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
console.log('The End')