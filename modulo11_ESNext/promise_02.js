setTimeout(function() {
    //1ª Callback
    setTimeout(function(){ 
        //2ª Callback
      console.log('Executando Callback...')   
      // 3ª Callback
      setTimeout(function(){
             console.log('Executando Callback...')   
      }, 2000)
    }, 2000)
}, 2000)
// mais um exemplo:
function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando Promise....')
            resolve()
        }, tempo)
    })
}
 esperarPor()
 .then(() => esperarPor())
 .then(esperarPor)