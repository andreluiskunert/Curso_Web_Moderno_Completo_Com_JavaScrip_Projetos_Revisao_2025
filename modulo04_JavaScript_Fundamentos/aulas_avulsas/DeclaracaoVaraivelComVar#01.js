console.log("Declaração de Variáveis com Var #01 : ")
console.log("Explica sobre assuntos...")
// ---------
// varios blocos de códigos
{ { { { { { { var sera = 'Será ?' } } } } } } }
console.log("Vai imprimir isso { { { { { { { var sera = 'Será ?' } } } } } } }: ", sera, "Imprimo")
// mais um exempo:
function teste() {
    var local = 123
    console.log("Só vai executar dentro do Escopo:" ,local, "numa Function") 
}
teste()
/* console.log(local) 

            ^

ReferenceError: local is not defined
    at Object.<anonymous> (/home/desenvolvedor/Cod3r/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/modulo04_JavaScript_Fundamentos/aulas_avulsas/DeclaracaoVaraivelComVar#01.js:12:13)
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
/* no browser Firefox
window.a
undefined
a =123
123
window.a
123
var a  = 'teste'
undefined
window.a
"teste"

*/
console.log("The End")