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
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        disableHostCheck: true
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
        loader: 'babel',
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
  resolve: {
    extensions: ['', '.coffee', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),
    new CopyWebpackPlugin([
      { from: 'stylesheets/lens', to: path.resolve(__dirname, 'dist/lens') }
    ]),
    new CleanWebpackPlugin(['dist'])
  ]
};
