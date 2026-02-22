import Pessoa from "./pessoa";
// const Pessoa = require('./pessoa') // CommonJS
const atendente = new Pessoa()
console.log(atendente.cumprimentar())   
// [Running] node "/home/desenvolvedor-full-stack/Home/Cursos_Udemy/Curso Web Moderno Completo com JavaScript + Projetos/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/modulo18_Webpack/src/pessoa.js"

// [Done] exited with code=0 in 0.162 seconds

// [Running] node "/home/desenvolvedor-full-stack/Home/Cursos_Udemy/Curso Web Moderno Completo com JavaScript + Projetos/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/modulo18_Webpack/src/pessoa.js"
// (node:20014) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///home/desenvolvedor-full-stack/Home/Cursos_Udemy/Curso%20Web%20Moderno%20Completo%20com%20JavaScript%20+%20Projetos/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/modulo18_Webpack/src/pessoa.js is not specified and it doesn't parse as CommonJS.
// Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
// To eliminate this warning, add "type": "module" to /home/desenvolvedor-full-stack/Home/Cursos_Udemy/Curso Web Moderno Completo com JavaScript + Projetos/Curso_Web_Moderno_Completo_Com_JavaScrip_Projetos_Revisao_2025/modulo18_Webpack/package.json.
// (Use `node --trace-warnings ...` to show where the warning was created) 
// obs.: O código acima é o resultado de um erro, pois o Node não reconhece a sintaxe de módulos ES6. Para resolver isso, é necessário adicionar "type": "module" no arquivo package.json ou usar a sintaxe CommonJS (require) em vez de import/export.
