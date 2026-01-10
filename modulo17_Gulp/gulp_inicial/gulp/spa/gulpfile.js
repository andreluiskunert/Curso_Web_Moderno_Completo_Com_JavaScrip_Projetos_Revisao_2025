// Sexta-feira,09/01/2026
// 4ª lugar
const {series, parallel } = require('gulp')
const gulp = require('gulp')
const { appHTML,  appCSS, appJS, appIMG } = require('./gulpTasks/app')
const { depsCSS, depSFonts} = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')

module.exports.default = series (
    parallel(
        series(appHTML,  appCSS, appJS, appIMG),
        series(depsCSS, depSFonts )
    ),
    servidor,
    monitorarArquivos
)