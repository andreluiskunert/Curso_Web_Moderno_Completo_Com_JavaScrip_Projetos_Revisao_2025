console.log("Usando Var em Loop #02 : ")
console.log("Explica sobre assuntos...")
// ---------
const funcs = [] 
for (var i = 0; i < 10; i++){
funcs.push(function(){
   console.log( i,"ª")
})
}
funcs[2] ()
funcs [8] ()
console.log("The End")