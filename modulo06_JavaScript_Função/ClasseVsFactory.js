console.log('-------> Classes VS Factory : <--------')
class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('André Luis')
p1.falar()

const criarPessoa = nome =>{
    return {
        falar : () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('André Luis')
p2.falar()
 
console.log('The End')
