console.log("Herança #O1:")
const ferrari = {
    modelo: 'F40',
    velMax: 357
}
const volvo = {
    modelo: 'V40',
    velMax: 456
}
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto___)
console.log(Object.prototype.__proto___ === null)

function MeuObjeto(){}
console.log(MeuObjeto)
console.log(typeof Object)
console.log(Object.prototype, MeuObjeto.prototype)






console.log("The End")