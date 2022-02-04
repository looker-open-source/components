/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

const config = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  features: {
    postcss: false,
  },
  stories: [
    '../../../packages/**/*.stories.mdx',
    '../../../packages/**/*.stories.tsx',
  ],
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
