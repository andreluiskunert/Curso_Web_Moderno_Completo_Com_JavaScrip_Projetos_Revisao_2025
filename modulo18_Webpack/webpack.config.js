const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    // segunda-feira, 23/02/2026
    output: {
        filename: 'principal.js',
        path: __dirname + '/public',
    },
    module:{
        rules: [
            {
                test: /\.css$/, // Expressão regular para identificar arquivos CSS
                use: [
                    'style-loader',// 'style-loader' para injetar o CSS no DOM e
                     'css-loader'// Loaders para processar arquivos CSS
                     ] 
            }
        ]
        
    }

}
