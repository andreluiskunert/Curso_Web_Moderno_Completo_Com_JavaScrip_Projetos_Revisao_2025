// ES8: Object.values/Object
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))
// Melhorais na Notação 
const nome = 'Carla,'
const pessoa = {
    nome,
    ola: function(){
        return 'Boa noite,Programador'
    }
}
console.log(pessoa.nome, pessoa.ola())
// class
class Animal {}
class Cachoro extends Animal{
    falar() {
        return 'Au au! olhar galera as canelas dos motogas'
    }
}
console.log(new Cachoro().falar())