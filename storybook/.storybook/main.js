/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

/* eslint-disable @typescript-eslint/no-var-requires */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const excludeNodeModulesExcept = require('babel-loader-exclude-node-modules-except')

module.exports = {
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        docs: true,
      },
    },
    '@storybook/addon-a11y',
  ],
  stories: ['../src/**/*.stories.tsx', '../../packages/**/*.story.tsx'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
        },
      ],
    })
    config.module.rules.push({
      exclude: [
        excludeNodeModulesExcept([
          'react-hotkeys-hook', // ditto
        ]),
      ],
      loader: 'babel-loader',
      test: /\.js$/,
    })
    config.resolve.extensions.push('.ts', '.tsx')
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    return config
  },
}
