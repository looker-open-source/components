const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const PATHS = {
  app: path.join(__dirname, 'src/index.tsx'),
}

module.exports = {
  devServer: {
    index: 'index.html',
  },
  entry: {
    app: PATHS.app,
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/template.html' })],
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.tsx?$/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
