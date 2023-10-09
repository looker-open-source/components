/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

const { RuleTester } = require('eslint');
const rule = require('.').rules['publish-config'];

jest.mock('read-pkg-up', () => ({
  sync: jest.fn(() => ({
    packageJson: {
      private: false,
    },
  })),
}));

new RuleTester({
  parser: require.resolve('jsonc-eslint-parser'),
}).run('publish-config', rule, {
  valid: [
    {
      code: `
        {  
          "publishConfig": {
            "access": "public",
            "registry": "https://registry.npmjs.org"
          },
          "version": "1.0.0",
          "name": "@looker/eslint-plugin"
        }
      `,
    },
  ],
  invalid: [
    {
      code: `
{
  "version": "1.0.0",
  "name": "@looker/eslint-plugin"
}`,
      errors: [{ messageId: 'missingConfig' }],
      output: `
{
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org"
  },
  "version": "1.0.0",
  "name": "@looker/eslint-plugin"
}`,
    },
  ],
});
