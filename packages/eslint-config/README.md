# @looker/eslint-config

## looker-open-source Typescript / Javascript Configuration

This repository provides shared configuration for tooling used in Typescript/Javascript projects in development as part of the `@looker/components`

It provides configurations for:

- [ESLint](https://eslint.org/) (Javascript & Typescript linter)
- [Stylelint](https://stylelint.io/) (CSS linter)
- [Prettier](https://prettier.io/) (Javascript & Typescript code-formatter)

We've included support for [React](https://reactjs.org/) & [Styled Components](https://www.styled-components.com/) in our configurations as they're very commonly used in Looker Typescript projects.

## Installation

The default export contains all default Airbnb ESLint rules, including
ECMAScript 6+, and the ones listed below. It requires some peerDependencies as
well.

Install the package with

```sh
yarn add @looker/eslint-config eslint -D
```

## Usage

### ESLint

Add the config to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": ["@looker/eslint-config"]
  }
}
```

to your `eslint.config.js` (or `.eslintrc.js`):

```js
module.exports = {
  extends: ['@looker/eslint-config', '@looker/eslint-config/license-header'],
}
```

NOTE: Adding an `eslint.config.js` file will allow you to add your own rules to so that your package can add (or disable) additional lint rules as needed:

```js
module.exports = {
  extends: ['@looker/eslint-config'],
  rules: {
    /* @TODO - To level-up our code quality we shouldn't ever use `any` */
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
```

#### Enforce License Header

If you need to have a consistent license header applied to your files you can include support for by extending `@looker/eslint-config/license-header` and including the content of the license in your repo in `config/license-header.js`

## LICENCE

[MIT](LICENCE)
