console.log('-------> "this" e a função Bind #02: <--------')
  function Pessoa(){
    this.idade =0
    const self = this
    setInterval(function(){
      self.idade++
      console.log("data de nascimento: ",self.idade,"º ;")
    } /*.bind(this)*/, 1000)
  }
  new Pessoa
  console.log('The End')
