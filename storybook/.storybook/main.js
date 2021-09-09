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
const excludeNodeModulesExcept = require('babel-loader-exclude-node-modules-except')

const defaultPreviewHead = `
 `

const config = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs/preset',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
  ],
  features: {
    postcss: false,
  },
  //   previewHead: (head) => `
  // ${head}
  // ${defaultPreviewHead}
  //   `,
  stories: [
    '../../docs/**/*.mdx',
    // '../../packages/**/*.story.tsx',
    // '../../packages/**/*.stories.tsx',
  ],
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.tsx?$/,
  //     use: [
  //       {
  //         loader: require.resolve('babel-loader'),
  //       },
  //     ],
  //   })
  //   config.module.rules.push({
  //     exclude: [
  //       excludeNodeModulesExcept([
  //         'react-hotkeys-hook', // ditto
  //       ]),
  //     ],
  //     loader: 'babel-loader',
  //     test: /\.js$/,
  //   })
  //   config.resolve.extensions.push('.ts', '.tsx')
  //   return config
  // },
}

/**
 * `react-docgen-typescript` is slow because it has to parse _everything_.
 *
 * `fast` builds (used by image-snapshots)  turn off docgen as well as all addons since
 * neither will be needed for snapshots and it significantly improves Storybook performance.
 */
const mode = process.env.storybookBuildMode

if (mode === 'fast') {
  config.typescript = { check: false, reactDocgen: false }
  config.addons = []
}

module.exports = config
