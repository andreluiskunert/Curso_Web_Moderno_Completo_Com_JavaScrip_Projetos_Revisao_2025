console.log(' map#03  ' )
Array.prototype.map2 = function(callback) {
    const newArry = []
    for (let i = 0; i < this.length; i++){
        newArry.push(callback(this[i], i, this))
    }
    return newArry
}
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
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)
console.log('The End')