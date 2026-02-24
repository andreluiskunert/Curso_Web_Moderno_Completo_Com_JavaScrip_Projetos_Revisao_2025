import Pessoa from "./pessoa";
// const Pessoa = require('./pessoa') // CommonJS
import './assets/css/estilo.css' // Importa o arquivo CSS para que o Webpack possa processá-lo e incluí-lo no bundle final. 
const atendente = new Pessoa()
console.log(atendente.cumprimentar())   
