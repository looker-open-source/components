# @looker/eslint-config-oss

This repository provides shared configuration for tooling used in Typescript/Javascript projects in development as part of the `@looker/components`

It provides configurations for:

- [ESLint](https://eslint.org/) (Javascript & Typescript linter)
- [Prettier](https://prettier.io/) (Javascript & Typescript code-formatter)

We've included support for [React](https://reactjs.org/) & [Styled Components](https://www.styled-components.com/) in our configurations as they're very commonly used in Looker Typescript projects.

## Installation

The default export contains all default Airbnb ESLint rules, including ECMAScript 6+, and the ones listed below. It requires some peerDependencies as well.

Install the package with

```sh
yarn add @looker/eslint-config-oss eslint -D
```

## Usage

### ESLint

Add the config to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": ["@looker/eslint-config-oss"]
  }
}
```

to your `eslint.config.js` (or `.eslintrc.js`):

```js
module.exports = {
  extends: ['@looker/eslint-config-oss'],
}
```

NOTE: Adding an `eslint.config.js` file will allow you to add your own rules to so that your package can add (or disable) additional lint rules as needed:

```js
module.exports = {
  extends: ['@looker/eslint-config-oss'],
  rules: {
    /* @TODO - To level-up our code quality we shouldn't ever use `any` */
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
```

### Prettier

Need to customize the prettier configuration? Add a `.prettierrc.json` to the root of your repository:

```json
{
  "$schema": "http://json.schemastore.org/prettierrc",
  "semi": false,
  "singleQuote": true
}
```

## LICENCE

[MIT](LICENCE)
