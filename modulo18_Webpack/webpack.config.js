const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    // _Quarta-feira: 18/02/2026_De noite,
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // Extrai o CSS em arquivos separados
                    // 'style-loader', // Adiciona o CSS ao DOM injetando a tag <style> Conflito com MiniCssExtractPlugin.loader
                     'css-loader', // Interpreta @import e url() como import/require() e resolve-os
                    ]
            }
        ]
    }

}