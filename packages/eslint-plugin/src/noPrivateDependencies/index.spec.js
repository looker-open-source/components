/**
 * Copyright (c) 2022 Looker Data Sciences, Inc.
 * SPDX-License-Identifier: MIT
 */

const { RuleTester } = require('eslint');
const rule = require('.').rules['no-private-dependencies'];

jest.mock('@manypkg/get-packages', () => ({
  getPackagesSync: jest.fn(() => ({
    packages: [
      { packageJson: { name: 'a' } },
      { packageJson: { name: 'b', private: true } },
    ],
  })),
}));

const filename = '@looker/components/package.json';

new RuleTester({
  parser: require.resolve('jsonc-eslint-parser'),
}).run('no-private-dependencies', rule, {
  invalid: [
    {
      code: `{ "dependencies": { "b": "*" } }`,
      errors: [{ messageId: 'invalidPackage' }],
      filename,
      options: [{ exclude: [] }],
    },
  ],
  valid: [
    {
      code: `{ "dependencies": { "a": "*" } }`,
      filename,
      options: [{ exclude: [] }],
    },
    {
      code: `{ "dependencies": { "b": "*" } }`,
      filename,
      options: [{ exclude: ['b'] }],
    },
  ],
});
