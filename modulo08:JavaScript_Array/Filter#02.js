console.log(' Filter #02   ' )
Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0;i < this.length; i++){
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}
const produtos = [
    {nome: 'Notebook', preco:1799.00, fragil: true},
    {nome: 'Mouse Lenovo', preco:50.00, fragil: true},
    {nome: 'Tela LCT_DELTA', preco:750.00, fragil: true},
    {nome: 'Tela LCT_LG', preco:550.00, fragil: true},
    {nome: ' Braço de suporte pra Tela LCT', preco:150.00, fragil: false}
]
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
console.log(produtos.filter2(caro).filter2(fragil))
console.log('The End')