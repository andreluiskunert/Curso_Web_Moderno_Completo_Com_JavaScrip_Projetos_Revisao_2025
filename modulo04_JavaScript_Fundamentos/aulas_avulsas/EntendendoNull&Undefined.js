console.log('Entendendo Null & Undefined.')
console.log("Comenta sobre o assunto...")
console.log("")
let valor //  não inicializada
console.log(valor)
/*console.log(valor2)
   ReferenceError: valor2 is not defined
  at Object.<anonymous> (/home/desenvolvedor/Cod3r/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/modulo04_JavaScript_Fundamentos/aulas_avulsas/EntendendoNull&Undefined.js:7:13)
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
valor = null // ausência da valor
console.log(valor)

/* 
  console.log(valor.toString())
TypeError: Cannot read properties of null (reading 'toString')
    at Object.<anonymous> (/home/desenvolvedor/Cod3r/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/modulo04_JavaScript_Fundamentos/aulas_avulsas/EntendendoNull&Undefined.js:21:19)
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
const produto = {}
console.log(produto.preco) // undefined
console.log(produto)
produto.preco = 3.50
console.log(produto)
produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)
produto.preco = null //sem preço
console.log(!!produto.preco)

console.log("The End")