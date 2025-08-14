console.log('------->Cidadão de Primeira Classe<--------')
// Função em JS é First-Class Object (Citizens)
// Higher-order function
// Criar de forma literal
function fun1(){ }
// Armazenar em um variável
const fun2= function(){}
// Armazenar em um arry
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](3, 2))
// Armazenar em um atributo de objeto
const obj ={}
obj.falar = function () {return 'Bom Dia'}
console.log(obj.falar())
// Passar função como parametros
function run(fun){
    fun()   
}
run(function () {console.log('Executando.....')})
// Uma função pode retornar/conter um função
function soma(a, b){
    return function(c) {
        console.log(a + b + c)
    }
}
soma(1, 3)(4)
const QuatroMais = soma(1, 3)
QuatroMais(4)
console.log('The End')