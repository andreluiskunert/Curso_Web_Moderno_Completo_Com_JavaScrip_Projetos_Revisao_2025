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
        // Error: Cannot find module 'gulp-concat'
        // Require stack:
        // - /home/desenvolvedor/Cod3r/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/modulo17_Gulp/gulp_inicial/gulp/javascript/gulpfile.js
        // - /home/desenvolvedor/.nvm/versions/node/v22.17.0/lib/node_modules/gulp-cli/lib/shared/require-or-import.js
        // - /home/desenvolvedor/.nvm/versions/node/v22.17.0/lib/node_modules/gulp-cli/lib/versioned/^5.0.0/index.js
        // - /home/desenvolvedor/.nvm/versions/node/v22.17.0/lib/node_modules/gulp-cli/index.js
        // - /home/desenvolvedor/.nvm/versions/node/v22.17.0/lib/node_modules/gulp-cli/bin/gulp.js
        //     at Function._resolveFilename (node:internal/modules/cjs/loader:1401:15)
        //     at defaultResolveImpl (node:internal/modules/cjs/loader:1057:19)
        //     at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1062:22)
        //     at Function._load (node:internal/modules/cjs/loader:1211:37)
        //     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
        //     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
        //     at Module.require (node:internal/modules/cjs/loader:1487:12)
        //     at require (node:internal/modules/helpers:135:16)
        //     at Object.<anonymous> (/home/desenvolvedor/Cod3r/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/modulo17_Gulp/gulp_inicial/gulp/javascript/gulpfile.js:4:16)
        //     at Module._compile (node:internal/modules/cjs/loader:1730:14) {
        //   code: 'MODULE_NOT_FOUND',
        //   requireStack: [
        //     '/home/desenvolvedor/Cod3r/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/modulo17_Gulp/gulp_inicial/gulp/javascript/gulpfile.js',
        //     '/home/desenvolvedor/.nvm/versions/node/v22.17.0/lib/node_modules/gulp-cli/lib/shared/require-or-import.js',
        //     '/home/desenvolvedor/.nvm/versions/node/v22.17.0/lib/node_modules/gulp-cli/lib/versioned/^5.0.0/index.js',
        //     '/home/desenvolvedor/.nvm/versions/node/v22.17.0/lib/node_modules/gulp-cli/index.js',
        //     '/home/desenvolvedor/.nvm/versions/node/v22.17.0/lib/node_modules/gulp-cli/bin/gulp.js'
        //   ]
        // obs.: buscar solução de noite...
        // }
        .pipe(gulp.dest('build'))
    return cb()
}
exports.default = series(padrao)


