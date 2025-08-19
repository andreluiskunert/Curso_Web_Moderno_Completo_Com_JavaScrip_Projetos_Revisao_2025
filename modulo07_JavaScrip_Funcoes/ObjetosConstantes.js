console.log("Objetos Constantes :")
// pessoa -> 123 -> {...}
const pessoa = {nome: 'André Luis'}
pessoa.nome = 'Ana'
console.log(pessoa)
// pessoa -> 456 -> {...} 
/* pessoa = { nome: 'Paulo'}
console.log(pessoa)
pessoa = { nome: 'Paulo'}
       ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (/home/desenvolvedor/Cod3r/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/modulo07_JavaScrip_Funcoes/ObjetosConstantes.js:7:8)
    at Module._compile (node:internal/modules/cjs/loader:1730:14)
    at Object..js (node:internal/modules/cjs/loader:1895:10)
    at Module.load (node:internal/modules/cjs/loader:1465:32)
    at Function._load (node:internal/modules/cjs/loader:1282:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49

Node.js v22.17.0

*/
Object.freeze(pessoa) // engogela o Objetivo
pessoa.nome = 'Marcos'
pessoa.end = 'Rua Paulo'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)
//
const pessoaConstante = Object.freeze({nome: 'John'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)

 console.log("The End")