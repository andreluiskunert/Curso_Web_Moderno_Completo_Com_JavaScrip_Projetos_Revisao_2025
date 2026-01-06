const {series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
// amanhã de noite_Segunda-feira, 05/01/2026
function transformacaoTS(){
    return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('build'))
}
exports.default = series(transformacaoTS)