const gulp = require('gulp')
 const { series , parallet } = require('gulp') //pode se tipo
// const series = gulp.series // ou assim

const antes1 = cb =>{
     console.log('Ano 2024')
    return cb()
}
const hoje = cb =>{
    console.log('Ano 2025')
    return cb()
}
const depois = cb => {
    console.log('Ano 2026')
    return cb()
}
const BoraEstudar = cb => {
    console.log('Entrar e sai ano...')
    return cb()
}

function copiar(cb){
    console.log('Tarefa de copiar....')
    return cb()
}
module.exports.default = series(
   parallet(antes1,hoje,),
     depois,
   BoraEstudar,
)