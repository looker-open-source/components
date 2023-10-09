/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

const { RuleTester } = require('eslint');
const rule = require('.').rules['license-header'];
const licenseTextSPDX = require('./licenseTextSPDX');
const licenseTextFull = require('./licenseTextFull');

jest.mock('read-pkg-up', () => ({
  sync: jest.fn(() => ({
    packageJson: {
      private: false,
    },
  })),
}));

const generateCodeLines = lineCount => {
  return Array.apply(null, Array(lineCount))
    .map((_, i) => `var value${i} = ${i};`)
    .join('\n');
};

const longSourceCode = generateCodeLines(101);
const shortSourceCode = generateCodeLines(10);

new RuleTester().run('license-header', rule, {
  valid: [
    {
      code: `
        /**
         * Copyright (c) 2022 Looker Data Sciences, Inc.
         * SPDX-License-Identifier: MIT
         */
        var testVal = 'hello';
      `,
    },
  ],
  invalid: [
    {
      code: `// Copyright (c) 2022 Looker Data Sciences, Inc.
        var testVal = 'hello';`,
      errors: [{ messageId: 'spdxOrLicense' }],
      output: `${licenseTextSPDX}
        var testVal = 'hello';`,
    },
    {
      code: `// SPDX-License-Identifier: MIT
        var testVal = 'hello';`,
      errors: [{ messageId: 'copyright' }],
      output: `${licenseTextSPDX}
        var testVal = 'hello';`,
    },
    {
      code: `// License headers are required for public packages.
        var testVal = 'hello';`,
      errors: [{ messageId: 'copyright' }, { messageId: 'spdxOrLicense' }],
      output: `// License headers are required for public packages.
        ${licenseTextSPDX}

var testVal = 'hello';`,
    },
    // Add the full license header when the code is longer than 100 lines
    {
      code: longSourceCode,
      errors: [{ messageId: 'copyright' }, { messageId: 'spdxOrLicense' }],
      output: licenseTextFull + '\n\n' + longSourceCode,
    },
    // Add the SPDX license header when the code is less than 100 lines
    {
      code: shortSourceCode,
      errors: [{ messageId: 'copyright' }, { messageId: 'spdxOrLicense' }],
      output: licenseTextSPDX + '\n\n' + shortSourceCode,
    },
    // Convert SPDX to full license header when code is more than 100 lines
    {
      code: licenseTextSPDX + longSourceCode,
      errors: [{ messageId: 'longSrc' }],
      output: licenseTextFull + longSourceCode,
    },
    // Convert full length license header SPDX when code is less than 100 lines
    {
      code: licenseTextFull + shortSourceCode,
      errors: [{ messageId: 'shortSrc' }],
      output: licenseTextSPDX + shortSourceCode,
    },
  ],
});
