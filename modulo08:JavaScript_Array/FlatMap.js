console.log(' FlatMap')
const escola = [
    {
        nome: 'Turma M1',
        alunos:[{
            nome:'André Luis',
            nota: 9.8
        }]
    },{
        nome:'Luis Carlos',
            nota: 8.8
    },{
        nome: 'Turma M2',
        alunos: [{
             nome:'Jean Cardoso',
            nota: 9.5
        },{
            nome:'Lucas Camargo',
            nota: 9.0
        }]    
    }]
const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const nota1 = escola.map(getNotasDaTurma)
console.log(nota1)
console.log([].concat([9.8, 8.8], [9.5, 9.0]))
Array.prototype.flatMap =  function(callback) {
    return Array.prototype.concat.apply([], this.map(callback) )
}
const nota2 = escola.flatMap(getNotasDaTurma)
console.log(nota2)

console.log('The End')