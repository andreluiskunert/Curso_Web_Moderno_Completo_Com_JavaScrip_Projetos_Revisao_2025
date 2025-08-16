console.log('-------> Contexto Lexico : <--------')
const valor = 'Global'
function minhaFuncao(){
    console.log(valor)
}
function exec(){
    const valor = 'Local'
    minhaFuncao()
}
exec()
 
console.log('The End')
