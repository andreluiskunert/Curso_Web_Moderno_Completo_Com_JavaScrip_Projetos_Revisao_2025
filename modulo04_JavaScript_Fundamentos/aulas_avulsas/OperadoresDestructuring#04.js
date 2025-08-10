console.log("Operadores Destructuring #04: ")
console.log("Explica sobre assuntos...")
// ---------
function rand([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}
console.log(rand([50, 40]))
console.log(rand([45, 955]))
console.log(rand([955]))
console.log(rand([1000]))
console.log(rand([, 39]))
console.log(rand([]))
/*
console.log(rand())
function rand([min = 0, max = 1000]) {
             ^

TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
    at rand (/home/desenvolvedor/Cod3r/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/modulo04_JavaScript_Fundamentos/aulas_avulsas/OperadoresDestructuring#04.js:4:14)
    at Object.<anonymous> (/home/desenvolvedor/Cod3r/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/modulo04_JavaScript_Fundamentos/aulas_avulsas/OperadoresDestructuring#04.js:15:13)
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


console.log("The End")