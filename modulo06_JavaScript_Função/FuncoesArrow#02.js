console.log('-------> Funções Arrow #02: <--------')
  function Pessoa(){
    this.idade = 0
    setInterval(()=>{
         this.idade++
      console.log("data de nascimento: ",this.idade,"º ;")
    } /*.bind(this)*/, 1000)
  }
    
  new Pessoa

  console.log('The End')
