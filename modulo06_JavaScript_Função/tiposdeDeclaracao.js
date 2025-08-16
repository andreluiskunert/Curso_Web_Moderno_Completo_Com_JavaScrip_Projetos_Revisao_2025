console.log('-------> Tipos de Declaração: <--------')
// function declaration
console.log(soma(3, 4))
 /* console.log(sub(14, 7))
             ^
ReferenceError: Cannot access 'sub' before initialization
    at Object.<anonymous> (/home/desenvolvedor/Cod3r/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/modulo06_JavaScript_Função/tiposdeDeclaracao.js:4:13)
    at Module._compile (node:internal/modules/cjs/loader:1730:14)
    at Object..js (node:internal/modules/cjs/loader:1895:10)
    at Module.load (node:internal/modules/cjs/loader:1465:32)
    at Function._load (node:internal/modules/cjs/loader:1282:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49
Node.js v22.17.0

console.log(mult(7, 2))
            ^
ReferenceError: Cannot access 'mult' before initialization
    at Object.<anonymous> (/home/desenvolvedor/Cod3r/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/modulo06_JavaScript_Função/tiposdeDeclaracao.js:18:13)
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
function soma(x, y){
  return x + y
}
// function expression

  const sub = function (x, y){
    return x - y
  }
  console.log(sub(14, 7))
//  named function expression

 const mult = function mult(x, y){
  return x * y 
 }
 console.log(mult(7, 2))
console.log('The End')
