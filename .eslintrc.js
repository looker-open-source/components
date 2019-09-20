const { resolve } = require('path')
const { readdirSync, lstatSync } = require('fs')

const PACKAGE_DIR = 'packages/' // this could be replaced utilizing the globs in package.json's "workpackges" or from the lerna.json config

// get files in packages
const noExtraneousOverrides = readdirSync(resolve(__dirname, PACKAGE_DIR))
  // filter for non-hidden dirs to get a list of packages
  .filter(
    entry =>
      entry.substr(0, 1) !== '.' &&
      lstatSync(resolve(__dirname, PACKAGE_DIR, entry)).isDirectory()
  )
  // map to override rules pointing to local and root package.json for rule
  .map(entry => ({
    files: [`${PACKAGE_DIR}${entry}/**/*`],
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          optionalDependencies: false,
          peerDependencies: false,
          packageDir: [__dirname, resolve(__dirname, PACKAGE_DIR, entry)],
        },
      ],
    },
  }))

module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-extraneous-dependencies': 'error',
    'import/order': 'error',
    'no-console': 'warn',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'sort-keys': 'error',

    'import/named': 'off',
    /*

     * 68 instances of `[StyledComponent |*] not found in 'styled-components'  import/named`
     *  Appears to be related to: https://github.com/benmosher/eslint-plugin-import/issues/1174
     * */

    /* To level-up our code quality we should pobably should address all of these later */
    'react/display-name': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
  },
  overrides: [...noExtraneousOverrides],
}
