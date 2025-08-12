console.log("Operadores Ternário:  ")
console.log("Explica sobre assuntos...")
//---
function tratarErroELancar() {
    throw new Error('Me perdoe pelo transtorno...nosso suporte já foi notificado...')
    // throw 10 
    // throw true
    // throw 'Mensagem'
    // throw {
    //     nome : erro.name,
    //     msg: erro.message,
    //     date: new Date
    // }
}
function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) {
        tratarErroELancar(e)
    }
    finally{
       console.log('Fim')
    }

}
const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)
console.log("The End")
