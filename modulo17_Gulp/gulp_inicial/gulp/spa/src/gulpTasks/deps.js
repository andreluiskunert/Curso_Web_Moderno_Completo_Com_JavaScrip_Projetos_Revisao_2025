// Sexta-feira,09/01/2026
// 2ª lugar
// ---// ---
// Segunda-feira,12/01/2026_De noite
// 1ª Lugar
//  Explicar....
const gulp = require('gulp')
// Quarta-feira,14/01/2026_De noite
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depsCSS(){
return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss({ "uglyComments" : false }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}
function depsFonts(){
    return gulp.src('node_modules/font-awesome/fonts/*.*')
            .pipe(gulp.dest('build/assets/fonts'))
}
module.exports = {
    depsCSS,
    depsFonts
}