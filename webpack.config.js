var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: ['./javascripts/main.js'],
    vendor: './javascripts/vendor.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    outputPath: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    // host: 'localhost', // TODO: set up to work with prod env
    // port: 3000, // TODO: set up to work with prod env
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // TODO: set up to work with prod env
        pathRewrite: {'^/api' : ''},
        secure: false
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.coffee$/,
        loader: 'coffee'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        loader: 'style!css!sass'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),
    new CopyWebpackPlugin([
      { from: 'stylesheets/lens', to: path.resolve(__dirname, 'dist/lens') },
      { from: './../vendor/bourbon', to: path.resolve(__dirname, 'dist/lens/vendor/bourbon') }
    ]),
    new CleanWebpackPlugin(['dist'])
  ]
};
