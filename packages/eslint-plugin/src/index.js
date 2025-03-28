/**
 * Copyright (c) 2022 Looker Data Sciences, Inc.
 * SPDX-License-Identifier: MIT
 */

const noPrivateDependencies = require('./noPrivateDependencies');
const noLiteralString = require('./noLiteralString');
const licenseHeader = require('./licenseHeader');
const publishConfig = require('./publishConfig');
const noMixedAngularJsHotProviders = require('./noMixedAngularJsHotProviders');
const i18nFormat = require('./i18nFormat');

module.exports = {
  configs: {
    recommended: {
      extends: [
        'plugin:jsx-a11y/recommended',
        'plugin:workspaces/recommended',
        'prettier',
      ],
      plugins: ['disable'],
      processor: 'disable/disable',
      overrides: [
        ...noPrivateDependencies.overrides,
        ...noLiteralString.overrides,
        ...licenseHeader.overrides,
        ...publishConfig.overrides,
        ...i18nFormat.overrides,
        {
          // We don't need to worry about accessibility in our test files.
          files: ['**/*.spec.*'],
          settings: {
            'disable/plugins': ['jsx-a11y'],
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
    ...i18nFormat.rules,
  },
};
