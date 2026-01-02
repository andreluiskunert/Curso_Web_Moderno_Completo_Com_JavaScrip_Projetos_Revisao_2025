// Quinta-feira, 01/01/2026
const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
    cb()
}
function fim(cb) {
    console.log('Por hoje é só pessoooaalll kkkk')
    return cb()
}

exports.default = parallel(padrao, fim)

