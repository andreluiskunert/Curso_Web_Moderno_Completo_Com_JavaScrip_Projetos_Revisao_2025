const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    // _Quarta-feira: 18/02/2026_De noite,
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader', // Adiciona o CSS ao DOM injetando a tag <style>
                     'css-loader', // Interpreta @import e url() como import/require() e resolve-os
                    ]
            }
        ]
    }

}