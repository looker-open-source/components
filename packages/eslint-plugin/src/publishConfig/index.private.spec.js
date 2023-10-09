/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

const { RuleTester } = require('eslint');
const rule = require('.').rules['publish-config'];

jest.mock('read-pkg-up', () => ({
  sync: jest.fn(() => ({
    packageJson: {
      private: true,
    },
  })),
}));

const filename = '@looker/components/src/index.js';

new RuleTester({
  parser: require.resolve('jsonc-eslint-parser'),
}).run('publish-config', rule, {
  valid: [
    {
      filename,
      code: `{}`,
    },
  ],
  invalid: [],
});
