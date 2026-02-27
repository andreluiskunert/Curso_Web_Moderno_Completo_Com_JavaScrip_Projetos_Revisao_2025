const modoDev = process.env.NODE_ENV !== 'production'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry: './src/principal.js',

  output: {
    filename: 'principal.js',
    path: __dirname + '/public',
  },

  optimization: {
    minimize: !modoDev,
    minimizer: [
      new TerserPlugin({ parallel: true }),
      new CssMinimizerPlugin(),
    ],
  },
      new TerserPlugin({
        parallel: true,
        terserOptions: {
            ecma: 6,
        },
    }),

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'estilo.css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
}