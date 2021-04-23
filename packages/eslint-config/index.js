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

module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:jest-dom/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: ['lib/', '*.d.ts', 'generated/', 'node_modules/'],
  overrides: [
    {
      extends: ['plugin:mdx/recommended'],
      files: ['**/*.mdx'],
      rules: {
        'mdx/no-unescaped-entities': 'off',
        'sort-keys': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: [
    '@typescript-eslint',
    'i18next',
    'jest-dom',
    'prettier',
    'react-hooks',
    'sort-keys-fix',
    'testing-library',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/default': 'off',
    'import/named': 'off',
    'import/no-extraneous-dependencies': 'error',
    'import/order': 'error',
    indentation: 'off',
    'no-console': 'warn',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            message:
              "Please import icons from '@styled-icons/material/SomeIcon'",
            name: '@styled-icons/material',
          },
          {
            message:
              "Please import icons from '@styled-icons/material-outlined/SomeIcon'",
            name: '@looker/material-outlined',
          },
          {
            message:
              "Please import icons from '@styled-icons/material-rounded/SomeIcon'",
            name: '@looker/material-rounded',
          },
        ],
      },
    ],
    'no-undef': 'off', // Not needed with TS around
    'no-use-before-define': 'off',
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'sort-keys': 'off',
    'sort-keys-fix/sort-keys-fix': 'error',
    // Work to enable these soon-ish
    'testing-library/no-node-access': 'off',
  },

  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
