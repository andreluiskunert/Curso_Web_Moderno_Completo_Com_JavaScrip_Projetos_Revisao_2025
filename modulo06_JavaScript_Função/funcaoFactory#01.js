console.log('-------> Funcção Factory #01 : <--------')
// Factory Simples:
function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva',
        idade: 23
    }
}
console.log(criarPessoa())
console.log('The End')
