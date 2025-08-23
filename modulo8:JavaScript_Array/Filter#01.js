console.log(' Filter #01   ' )
const produtos = [
    {nome: 'Notebook', preco:1799.00, fragil: true},
    {nome: 'Mouse Lenovo', preco:50.00, fragil: true},
    {nome: 'Tela LCT_DELTA', preco:750.00, fragil: true},
    {nome: 'Tela LCT_LG', preco:550.00, fragil: true},
    {nome: ' Braço de suporte pra Tela LCT', preco:150.00, fragil: false}
]
console.log(produtos.filter(function(p){
    return false
}))
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
console.log(produtos.filter(caro).filter(fragil))
console.log('The End')