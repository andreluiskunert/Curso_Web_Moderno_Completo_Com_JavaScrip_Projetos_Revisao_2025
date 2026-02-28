const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { use } = require('react');

const modoDev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry: './src/principal.js',

  output: {
    filename: 'principal.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },

  devtool: modoDev ? 'source-map' : false,

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          modoDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      }, 
      { test: /\.css$/, use: ['style-loader', 'css-loader'] ,
        use:  ['file-loader']
      }
    ]
  },

  plugins: [
    ...(modoDev ? [] : [new MiniCssExtractPlugin({ filename: 'estilo.css' })]),
  ],

  optimization: {
    minimize: !modoDev,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  
};