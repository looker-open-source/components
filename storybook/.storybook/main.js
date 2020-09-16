const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-knobs/register'],

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
        },
        // // Optional
        // {
        //   loader: require.resolve('react-docgen-typescript-loader'),
        // },
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx')
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    return config
  },
}
