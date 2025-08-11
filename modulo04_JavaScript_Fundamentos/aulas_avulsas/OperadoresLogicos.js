console.log("Operadores Logicos:  ")
console.log("Explica sobre assuntos...")
/*
tabelas verdades
v e v -> v
v e f -> f
f e ? -> f
---------
v ou ? -> v
f ou v -> v
f ou f -> f
-------
v xor v -> f
v xor f -> v
v xor v -> f
----
!v -> f
!f -> v
*/
console.log("...")
function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2
  const comprarTV50º =  trabalho1 && trabalho2
//   const comprarTV32º = !!(trabalho1 ^ trabalho2) // bitwise xor
const comprarTV32º = trabalho1 != trabalho2
const manterSaudavel = !comprarSorvete // Operador unário
 return {comprarSorvete, comprarTV50º, comprarTV32º, manterSaudavel}
} 
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))


console.log("The End")
