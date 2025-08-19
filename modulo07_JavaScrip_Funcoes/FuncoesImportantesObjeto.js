console.log("Funções Importantes de Objeto :")
const pessoa = {
    nome: 'André Luis',
    idade: 43,
    profissao: 'Dev Full Stack',
    peso: 75.0
}
 console.log(pessoa)
 console.log(Object.keys(pessoa))
 console.log(Object.values(pessoa))
 console.log(Object.entries(pessoa))
//  
Object.entries(pessoa).forEach(([chave, valor])=>{
    console.log(`${chave}: ${valor}`)
})
Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '02/06/1982'
  }
)
pessoa.dataNascimento = '02/06/2023' // renasci pra viver sozinho
console.log("Data de Nascimento: ",pessoa.dataNascimento)
console.log(Object.keys(pessoa))
// Objest.assign (ECMAScript 2015)
const dest = { a:1 }
const o1 = {b:2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
Object.freeze(obj)
obj.c = 357
console.log(obj)

console.log("The End")