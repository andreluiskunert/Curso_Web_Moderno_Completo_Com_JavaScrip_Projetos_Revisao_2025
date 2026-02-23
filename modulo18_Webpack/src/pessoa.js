import './modulos/moduloA' // Importa o módulo A, que por sua vez importa o módulo B. Isso demonstra a capacidade do Webpack de lidar com dependências entre módulos.

export default class Pessoa {
    cumprimentar() {
        return 'Boa noite!'
    }
}