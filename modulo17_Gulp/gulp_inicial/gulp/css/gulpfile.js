const { parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ uglyComments: true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}
// Quarta-feira, 07/01/2026_De noite
function copiarHTML(){
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))}

exports.default = parallel(transformacaoCSS , copiarHTML) 
