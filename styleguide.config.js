const path = require('path')
const typescriptPropsParser = require('react-docgen-typescript').withDefaultConfig().parse

const styleguidistConfig = {
  propsParser: typescriptPropsParser,
  webpackConfig: {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss']
    },
    module: {
      rules: [
        {test: /\.(ts|tsx)$/, loader: require.resolve('ts-loader')},
        {
          test: /.scss$/,
          include: path.resolve(__dirname, '../'),
          use: [
            'style-loader',
            {
              loader: 'typings-for-css-modules-loader',
              options: {
                camelCase: true,
                modules: true,
                namedExport: true,
                importLoaders: true,
                // localIdentName: '[name]__[local]___[hash:base64:5]'
                localIdentName: 'lens--[local]'
              }
            },
            {
              loader: 'sass-loader',
              options: {
                modules: true,
                importLoaders: true,
                // localIdentName: '[name]__[local]___[hash:base64:5]'
                localIdentName: 'lens--[local]'
              }
            }
          ]
        }
      ]
    }
  }
}

module.exports = styleguidistConfig
