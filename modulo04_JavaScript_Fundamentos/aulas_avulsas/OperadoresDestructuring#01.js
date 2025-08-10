console.log("Operadores Destructuring #01 : ")
console.log("Explica sobre assuntos...")
// ---------
 const pessoa = {
    nome: 'André Luis',
    idade: 43,
    peso: 65.90,
    endereco:{
        rua:'Dom Pedro Primeiro',
        Numero: 117,
        bairro: 'Avorada',
        complemento: 'Casa dos fundos'
     } 
}
const { nome, idade} = pessoa
console.log(pessoa) 
console.log(nome, idade)
const { nome: n, idade: i } =pessoa
console.log(n, i)
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)
const {endereco: {rua, Numero, cep}} = pessoa
console.log(rua, Numero, cep)
// const {conta: {ag, Num}} = pessoa
// console.log(ag, Num)
// const {conta: {ag, Num}} = pessoa
//                ^

// TypeError: Cannot read properties of undefined (reading 'ag')
//     at Object.<anonymous> (/home/desenvolvedor/Cod3r/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/modulo04_JavaScript_Fundamentos/aulas_avulsas/OperadoresDestructuring#01.js:24:16)
//     at Module._compile (node:internal/modules/cjs/loader:1730:14)
//     at Object..js (node:internal/modules/cjs/loader:1895:10)
//     at Module.load (node:internal/modules/cjs/loader:1465:32)
//     at Function._load (node:internal/modules/cjs/loader:1282:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.17.0
console.log("The End")