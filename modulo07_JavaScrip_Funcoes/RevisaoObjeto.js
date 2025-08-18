console.log("Revisão sobre Objeto:")
// Coleção Dinâmica de Pares chave/valor
const produto = new Object
produto.nome = 'Notebook '
produto['marca do produto'] = 'Lenovo T440p'
produto.preco = 1799.00
console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)
//---
const carro ={
    modelo: 'F1000_MotorHome',
    valor: 89000,
    propreitario:{
        nome:'André Luis',
        idade:49,
        endereco:{
            logradouro: 'Qualquer Lúgar...',
            numero:777
        }
    },
    condutor:[{
        nome: 'Eu',
        idade:43
    },{
        nome:'EU',
        idade:43
    }], 
    calcularValorSeguro: function(){
 //---
    }
}
carro.propreitario.endereco.numero = 1000
carro['propreitario']['endereco']['logradouro'] = 'Viver em qualquer'
console.log(carro)
// delete carro.condutor
console.log(carro)
delete carro.propreitario.endereco
console.log(carro)
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutor)
console.log(carro.condutor.length)

 console.log("The End")