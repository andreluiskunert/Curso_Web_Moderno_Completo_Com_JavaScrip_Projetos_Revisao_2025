console.log("Contexto Node VS Browser:  ")
console.log("Explica sobre assuntos...")
/*

window.a
2025
this.a
2025
let b =357
undefined
window.b
undefined
let b = 357
Uncaught SyntaxError: redeclaration of let b
    <anonymous> debugger eval code:1
debugger eval code:1:1
Source map error: Error: URL constructor:  is not a valid URL.
Stack in the worker:resolveSourceMapURL@resource://devtools/client/shared/source-map-loader/utils/fetchSourceMap.js:56:22
getOriginalURLs@resource://devtools/client/shared/source-map-loader/source-map.js:73:24
workerHandler/</<@resource://devtools/client/shared/worker-utils.js:115:52
workerHandler/<@resource://devtools/client/shared/worker-utils.js:113:13

Resource URL: null
Source Map URL: null

​
this.b
undefined
b
357
this.f1()
//-----

let pessoa = {nome: 'Ana', falar: function(){return `Eu sou ${this.nome}`}}
undefined
pessoa.falar
function falar()

this.nom
undefined
this.nome
undefined


*/
let a = 3
global.b = 123
this.a
this.c =753
this.d = false
this.e = 'teste'
console.log(a)
console.log(global.b)
console.log(global.b)
console.log(this.c)
console.log( module.exports.c)
console.log( module.exports === this)
console.log( module.exports)
module.exports = { e: 753, f: false, g: 'teste'}
abc = 3
console.log(global.abc)

console.log("The End")
