// Quinta-feira, 01/01/2026
const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env."]
        }))
        .pipe(uglify())
        .on('error', err => console.log('Erro'))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
    return cb()
}
exports.default = series(padrao)


