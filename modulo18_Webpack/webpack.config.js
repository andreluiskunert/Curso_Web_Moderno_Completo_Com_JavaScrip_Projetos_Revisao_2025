const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    // segunda-feira, 23/02/2026
    output: {
        filename: 'principal.js',
        path: __dirname + '/public',
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module:{
        rules: [
            {
                test: /\.css$/, // Expressão regular para identificar arquivos CSS
                use: [
                     MiniCssExtractPlugin.loader, // Use o loader do MiniCssExtractPlugin para extrair o CSS em um arquivo separado
                    // 'style-loader',// 'style-loader' para injetar o CSS no DOM e
                     'css-loader'// Loaders para processar arquivos CSS
                     ] 
            }
        ]
        
    }

}
