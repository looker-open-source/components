/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

const { RuleTester } = require('eslint');
const rule = require('.')['no-mixed-angularjs-hot-providers'];

new RuleTester({
  parser: require.resolve('@babel/eslint-parser'),
}).run('no-mixed-angular-js-hot-providers', rule, {
  valid: [
    {
      code: `
        const fn = () => {
            const [, test] = ['some', 'value']
        }
      `,
    },
  ],
  invalid: [],
});
