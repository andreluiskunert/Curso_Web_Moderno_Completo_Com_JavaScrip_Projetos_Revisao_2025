// const { use } = require('react')
// const webpack = require('webpack')
// module.exports = {
//     mode:  'production',
//     entry: './src/principal.js',
//     // Sabado,17/01/2026_de noite
//     output: {
//         filename: 'principal.js',
//         path: __dirname + '/public'
//     },
//     module:{
//         rules: [{
//             //  Domingo_18/01/2026_de noite
//             test:/\.css$/,
//             use: [
//                 'style-loader', // Adicionar CSS a DOM injetando a tag <style>
//                 'css-loader' // interpreta @import, url()...
//                 ]

//         }]
//     }
// }
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/principal.js',
  output: {
    filename: 'principal.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
