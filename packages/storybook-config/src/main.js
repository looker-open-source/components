/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

const addonEssentials = {
  name: '@storybook/addon-essentials',
  options: {
    backgrounds: false,
  },
}

const config = {
  addons: [addonEssentials, '@storybook/addon-a11y'],
  stories: ['../**/*.story.tsx'],
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

const mode = process.env.storybookBuildMode

/**
 * `react-docgen-typescript` is slow because it has to parse _everything_.
 *
 * `fast` builds (used by image-snapshots)  turn off docgen as well as all addons since
 * neither will be needed for snapshots and it significantly improves Storybook performance.
 */

if (mode === 'fast') {
  config.typescript = { reactDocgen: false }
  config.addons = []
} else if (mode && mode.indexOf('develop') === 0) {
  /**
   *
   * TODO: Explore `webpack-react-docgen-typescript` + to load types from a pre-compiled build
   * of interface types. There may be complications due to our TS monorepo and the complexities
   * of properly loading types.
   *
   * It appears Storybook 6.2 may incorporate this kind of functionality so it may make
   * sense to wait for that.
   *
   * Background: https://github.com/storybookjs/storybook/issues/7942
   *
   */
  addonEssentials.options = {
    ...addonEssentials.options,
    docs: mode === 'develop-docs',
  }
}

/* eslint-disable-next-line no-console */
mode && console.log('Storybook build mode:', mode, '\n', config)

module.exports = config
