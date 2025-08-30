// let e const
{
    var a = 3
    let b = 5
    console.log(b)
}
console.log(a)

// console.log(b)
// ReferenceError: b is not defined
//     at Object.<anonymous> (/home/desenvolvedor/Cod3r/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/modulo11_ESNext/Revisao#01.js:7:13)
//     at Module._compile (node:internal/modules/cjs/loader:1730:14)
//     at Object..js (node:internal/modules/cjs/loader:1895:10)
//     at Module.load (node:internal/modules/cjs/loader:1465:32)
//     at Function._load (node:internal/modules/cjs/loader:1282:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49
// Node.js v22.17.0
//----
//  Template String:
 const produto = 'Notebook Lenovo T440p'
 console.log(`${produto} é  um ótimo custo beneficio`)
 // Destructuring
 const [l, e, ...tras] = "Cod3r"
 console.log(l, e, tras)
 const [x,, y] = [1, 2, 3]
 console.log(x, y)
  const [c, d] = [1, 2, 3]
 console.log(x, y)
 const {idade: i, nome} = {nome: 'Ana', idade: 18}
 console.log(i, nome)
