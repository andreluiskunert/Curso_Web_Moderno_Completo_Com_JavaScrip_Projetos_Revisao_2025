console.log("Herança #O6:")
function Aula(nome,  videoID) {
    this.nome = nome
    this.videoID
}
const aula1  = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até Breve', 321)
console.log(aula1, aula2)
//simulando o new
function novo(f,...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}
const aula3  = new Aula('Bem vindo', 753)
const aula4 = new Aula('Até Breve', 357)
console.log(aula3, aula3)
 console.log("The End")