const path = require('path')

module.exports = (storybookBaseConfig) => {

  // Handle SASS
  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, '../')
  })

  // Load Typescript and TSX parsing
  storybookBaseConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('ts-loader')
  })

  storybookBaseConfig.resolve.extensions.push('.ts', '.tsx')
  return storybookBaseConfig
}
