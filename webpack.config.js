var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

({
  devServer: {
    inline: true
  }
});

module.exports = {
  context: __dirname + "/src",
  entry: {
    main: './javascripts/main.js',
    vendor: './javascripts/vendor.js'
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
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
    })
  ]
};
