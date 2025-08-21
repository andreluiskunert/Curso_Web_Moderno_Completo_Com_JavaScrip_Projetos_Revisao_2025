console.log('Classe #01:')
class lancamento{
    constructor(nome ='Genérico', valor = 0){
        this.nome = nome
        this.valor = valor

    }
}
class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }sumario(){
      let valorConsolidado = 0
      this.lancamentos.forEach(l =>{
        valorConsolidado += l.valor
      })
      return valorConsolidado
   }
}
const salario = new lancamento('Salario', 45000)
const contaDeluz = new lancamento('Luz', -220)
const contas = new CicloFinanceiro(8, 2028)
contas.addLancamentos(salario, contaDeluz)
console.log(contas.sumario())
console.log('The ')