const {series} = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
function transformacaoCSS(){
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.console.logError))
        .pipe(uglifycss({"ugyComents":true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
    }
exports.default = series(transformacaoCSS)