console.log("Par Nome / Valor : ")
console.log("Explica sobre assuntos...")
// ---------
const saudacao = 'OI Linda' // contexto léxico 1
function exec() {
    const saudacao = 'minha sobrinha' // contexto léxico 
    return saudacao
}
// Objetos são gurpos aninhados de pares nome/valor
const cliente = {
    nome: 'André Luis',
    idade: 43,
    peso: 65.90,
    endereco:{
        rua:'Dom Pedro Primeiro',
        Numero: 117,
        bairro: 'Avorada',
        complemento: 'Casa dos fundos'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log("The End")