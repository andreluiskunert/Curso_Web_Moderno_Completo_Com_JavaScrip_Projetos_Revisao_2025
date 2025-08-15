console.log('-------> "this" e a função Bind #01: <--------')
  const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
  }
  pessoa.falar()
  const falar = pessoa.falar
  falar() // progamação funcional Vs Programação Orientado a Objeto{POO} <undefined>
//----
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
//---
// const falar2 = pessoa.falar
// falar2() progamação funcional Vs Programação Orientado a Objeto{POO} <undefined>
  console.log('The End')
