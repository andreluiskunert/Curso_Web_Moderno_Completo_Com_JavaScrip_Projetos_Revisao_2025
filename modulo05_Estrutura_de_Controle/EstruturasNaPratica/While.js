console.log("Estrutura While:  ")
console.log("Explica sobre assuntos...")
//---
function getInteiroAleatoriaEntre(min, max){
    const valor = Math.random() * (max - min) + max
    return Math.floor(valor)
}
let opcao = 0
while (opcao != -1){
    opcao = getInteiroAleatoriaEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
}
console.log('Até a próxima!')
console.log("The End")
