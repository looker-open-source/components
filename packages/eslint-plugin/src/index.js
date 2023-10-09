/**
 * Copyright (c) 2022 Looker Data Sciences, Inc.
 * SPDX-License-Identifier: MIT
 */

const noPrivateDependencies = require('./noPrivateDependencies');
const noLiteralString = require('./noLiteralString');
const licenseHeader = require('./licenseHeader');
const publishConfig = require('./publishConfig');
const noMixedAngularJsHotProviders = require('./noMixedAngularJsHotProviders');

module.exports = {
  configs: {
    recommended: {
      extends: ['plugin:jsx-a11y/recommended', 'prettier'],
      plugins: ['disable'],
      processor: 'disable/disable',
      overrides: [
        ...noPrivateDependencies.overrides,
        ...noLiteralString.overrides,
        ...licenseHeader.overrides,
        ...publishConfig.overrides,
        {
          // We don't need to worry about accessibility in our test files.
          files: ['**/*.spec.*'],
          settings: {
            'disable/plugins': ['jsx-a11y'],
          },
        },
        // b/271150700
        {
          files: ['**/*.{js,jsx,ts,tsx}'],
          rules: {
            'jsx-a11y/anchor-has-content': 1,
            'jsx-a11y/anchor-is-valid': 1,
            'jsx-a11y/aria-role': 1,
            'jsx-a11y/click-events-have-key-events': 1,
            'jsx-a11y/html-has-lang': 1,
            'jsx-a11y/iframe-has-title': 1,
            'jsx-a11y/img-redundant-alt': 1,
            'jsx-a11y/label-has-associated-control': 1,
            'jsx-a11y/no-autofocus': 1,
            'jsx-a11y/no-noninteractive-element-interactions': 1,
            'jsx-a11y/no-noninteractive-tabindex': 1,
            'jsx-a11y/no-redundant-roles': 1,
            'jsx-a11y/no-static-element-interactions': 1,
            'jsx-a11y/role-has-required-aria-props': 1,
            'jsx-a11y/role-supports-aria-props': 1,
          },
        },
      ],
    },
  },
  rules: {
    ...licenseHeader.rules,
    ...noPrivateDependencies.rules,
    ...publishConfig.rules,
    ...noMixedAngularJsHotProviders,
  },
};
