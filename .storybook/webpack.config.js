const path = require('path')

module.exports = (storybookBaseConfig) => {

  // Handle SASS
  storybookBaseConfig.module.rules.push({
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
          localIdentName: 'lens--[local]'
        }
      },
      {
        loader: 'sass-loader',
        options: {
          modules: true,
          importLoaders: true,
          localIdentName: 'lens--[local]'
        }
      }
    ]
  })

  // Load Typescript and TSX parsing
  storybookBaseConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      require.resolve('ts-loader')
    ]
  })

  storybookBaseConfig.resolve.extensions.push('.ts', '.tsx', '.scss')
  return storybookBaseConfig
}
