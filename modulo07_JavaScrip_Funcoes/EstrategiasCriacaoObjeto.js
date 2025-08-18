console.log("Estratégias Criação Objeto:")
// usando a notação literal 
const obj1 = {}
console.log(obj1)
// Object JS:
console.log(typeof Object)
console.log(typeof new Object)
const obj2 = new Object
console.log(obj2)
// Funções Construtoras
function Produto(nome, preco,desc){
    this.nome = nome
    this.getPrecoDesconto = () =>{
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Notebook_Lenovo_T440p', 1799.00, 0.25)
const p2 = new Produto('Mouse_Lenovo', 59.00, 0.20)
const p3 = new Produto('Monitor LC_21.5º', 759.00, 0.25)
const p4 = new Produto('Monitor Delta_21.5º', 890.00, 0.25)
console.log(p1.getPrecoDesconto(), p2.getPrecoDesconto())
console.log(p1, p2, p3, p4)

// Funções Factory:
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 30)* (30 - faltas)
        }
    }
}
//
const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 4580, 1)
console.log(f1.getSalario(), f2.getSalario())
// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)
// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)
 console.log("The End")