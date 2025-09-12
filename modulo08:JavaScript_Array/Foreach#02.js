console.log(' foreach#02:  ' )
Array.prototype.forEach2= function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['André Luis ', 'Pedro Carlos', 'Rock Pedroso']
aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1} ${nome}`)
   console.log(Array) 
})
console.log('The End')