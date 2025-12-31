const gulp = require('gulp')
const { series, parallel } = require('gulp') //pode se tipo
// const series = gulp.series // ou assim

const antes1 = cb => {
    console.log('Ano 2024')
    return cb()
}
const hoje = cb => {
    console.log('Ano 2025')
    return cb()
}
const depois = cb => {
    console.log('Ano 2026')
    return cb()
}
const BoraEstudar = cb => {
     console.log('Entrar e sai ano...')
    // quarta-feira,31/12/2025_De meio de 
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    // .pipe(imagePelaMetade())
    // .pipe(imageEmPretoEBranco())  
    // .pipe(transformacoaA())
    // .pipe(transformacoaB())
    // .pipe(transformacoaC())
    // .pipe(transformacoaD())
    .pipe(gulp.dest('pastaB'))
    .pipe(gulp.dest('pastaC'))

    return cb()
}

function copiar(cb) {
    console.log('Tarefa de copiar....')
    return cb()
}
module.exports.default = series(
    parallel(antes1, hoje,),
    depois,
    BoraEstudar,
)