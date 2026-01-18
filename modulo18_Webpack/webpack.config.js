const webpack = require('webpack')
module.exports = {
    mode:  'production',
    entry: './src/principal.js',
    // Sabado,17/01/2026_de noite
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    module:{
        rules: [{
            
        }]
    }
}