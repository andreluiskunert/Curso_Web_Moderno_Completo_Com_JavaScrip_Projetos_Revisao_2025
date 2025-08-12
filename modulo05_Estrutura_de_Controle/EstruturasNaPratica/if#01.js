console.log("Estrutura if#01:  ")
console.log("Explica sobre assuntos...")
//---
function soBoaNoticia(nota){
    if(nota >= 7 ) {
        console.log('Aprovado com ' + nota + ";")
    }
}
soBoaNoticia(8.1) // se passar falar
soBoaNoticia(6.1) // quieto se não a chinela vai comer
//----
function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É Verdade...' + valor + ";")
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(1)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 3])
seForVerdadeEuFalo({})



console.log("The End")
