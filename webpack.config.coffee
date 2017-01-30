webpack  = require 'webpack'
HtmlWebpackPlugin = require 'html-webpack-plugin'
module.exports =
  entry:
    app: './src/javascripts/app.coffee'
    vendor: './src/javascripts/vendor.coffee'
  output:
    path: './src/javascripts/dist'
    filename: '[name].coffee'
  module: loaders: [
    {
      test: /\.coffee$/
      loader: 'coffee'
    }
    {
      test: /\.scss$/,
      loader: "style!css?sourceMap!sass?sourceMap"
    }
  ]
  plugins: [
    new HtmlWebpackPlugin(
      template: './src/index.html'
      inject: 'body')
    new (webpack.optimize.CommonsChunkPlugin)(name: 'vendor')
  ]
