console.log("NOtação Ponto : ")
console.log("Explica sobre assuntos...")
// ---------
console.log(typeof  console )
console.log(Math.ceil(6.1))
//---
const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Carrinho' 
console.log(obj1.nome)
//---
function Obj(nome) {
    this.nome = nome
    this.exec = function(){
        console.log('Tempo de Infância...')
    }
}
const obj2 = new Obj('Buliga')
const obj3 = new Obj('Corda')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()


console.log("The End")