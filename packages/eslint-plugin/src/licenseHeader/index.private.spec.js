/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

const { RuleTester } = require('eslint');
const rule = require('.').rules['license-header'];

jest.mock('read-pkg-up', () => ({
  sync: jest.fn(() => ({
    packageJson: {
      private: true,
    },
  })),
}));

const filename = '@looker/components/src/index.js';

new RuleTester().run('license-header', rule, {
  valid: [
    {
      filename,
      code: `// No license header is required for private packages.`,
    },
  ],
  invalid: [],
});
