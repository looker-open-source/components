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
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@looker/recommended',
  ],
  ignorePatterns: ['lib/', '*.d.ts', '!.storybook'],
  overrides: [
    {
      extends: ['plugin:mdx/recommended'],
      files: ['**/*.mdx', '**/stories/**'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-no-undef': 'off',
      },
    },
    {
      files: [
        '*.spec.*',
        '*.stories.*',
        '**/stories/**',
        '*.js',
        '**/__mocks__/**',
        '**/fixtures/**',
        '**/locales/**',
      ],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
    {
      files: ['jest.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['**/*.json'],
      rules: {
        '@looker/no-private-dependencies': [
          'error',
          {
            exclude: [
              // So this config can lint for private packages.
              '@looker/eslint-plugin',
              // Required for running tests.
              '@looker/jest-config',
              // Actually public, but private: true locally.
              '@looker/sdk',
              // Required for running Storybook.
              '@looker/storybook',
              // Required for tests.
              '@looker/test-utils',
            ],
          },
        ],
        'no-unused-expressions': 'off',
        'sort-keys-fix/sort-keys-fix': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: [
    '@typescript-eslint',
    'i18next',
    'jest-dom',
    'lodash',
    'react-hooks',
    'sort-keys-fix',
    'testing-library',
    'unicorn',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
        ignoreRestSiblings: false,
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    'import/default': 'off',
    'import/named': 'off',
    'import/no-extraneous-dependencies': 'error',
    'import/order': 'error',
    indentation: 'off',
    'lodash/import-scope': ['error', 'method'],
    'no-console': 'warn',
    'no-nested-ternary': 'error',
    'no-redeclare': 'off', // prefer TS version of `no-redeclare` to support function overload syntax
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: [
              '@looker/icons/*',
              '@styled-icons/material/*',
              '@styled-icons/material-outlined/*',
              '@styled-icons/material-rounded/*',
            ],
          },
          {
            group: ['**/__mocks__/**'],
            message:
              '`__mocks__` directories are reserved for use by the Jest auto-mock mechanism. Place normal test-only assets in a `fixtures` directory instead.',
          },
        ],
      },
    ],
    'no-restricted-properties': [
      2,
      {
        message:
          'Specifying static properties such as defaultProps can break tree shaking. Use default parameter values instead. See http://es6-features.org/#DefaultParameterValues.',
        property: 'defaultProps',
      },
    ],
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'sort-keys': 'off',
    'sort-keys-fix/sort-keys-fix': 'error',

    // Work to enable these soon-ish
    'testing-library/no-node-access': 'off',

    'unicorn/no-useless-spread': 'error',
  },

  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
