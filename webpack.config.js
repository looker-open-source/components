var HtmlWebpackPlugin, webpack;

webpack = require('webpack');

HtmlWebpackPlugin = require('html-webpack-plugin');

({
  devServer: {
    inline: true
  }
});

module.exports = {
  entry: {
    main: './src/javascripts/main.coffee'
  },
  output: {
    path: './src/javascripts/dist',
    filename: '[name].coffee'
  },
  module: {
    loaders: [
      {
        test: /\.coffee$/,
        loader: 'coffee'
      }, {
        test: /\.sass$/,
        loader: "style!css!sass"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ]
};
