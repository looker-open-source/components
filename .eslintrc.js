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

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ignoreProps = require('./config/i18nIgnoredProps.js')

module.exports = {
  extends: ['@looker/eslint-config', '@looker/eslint-config/license-header'],
  overrides: [
    {
      files: ['www/**/*.ts', 'www/**/*.tsx'],
      rules: {},
    },
    {
      files: ['packages/*/src/**/*.tsx', 'packages/*/src/**/*.ts'],
      rules: {
        'i18next/no-literal-string': [
          2,
          {
            ignoreAttribute: ignoreProps,
            ignoreComponent: ['HyphenWrapper', 'Icon', 'WarningIcon'],
            markupOnly: true,
          },
        ],
      },
    },
    {
      files: [
        '*.test.*',
        '*.spec.*',
        '*.story.*',
        '*.js',
        '**/__mocks__/**',
        '**/stories/**',
        'packages/components-theme-editor/**',
        'packages/design-tokens/**',
        'packages/storybook-config/**',
        'www/**',
        'www/**',
      ],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'no-restricted-properties': [
      2,
      {
        message:
          'Specifying static properties such as defaultProps can break tree shaking. Use default parameter values instead. See http://es6-features.org/#DefaultParameterValues.',
        property: 'defaultProps',
      },
    ],
  },
}
