/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

const path = require('path');
const readPkgUp = require('read-pkg-up');

const defaultPublishConfigJSON = `
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org"
  },`;

module.exports = {
  overrides: [
    {
      files: ['**/package.json'],
      plugins: ['@looker'],
      rules: {
        '@looker/publish-config': ['error', {}],
      },
    },
  ],
  rules: {
    'publish-config': {
      meta: {
        docs: {
          description: 'Ensures correct publishConfig settings.',
          recommended: true,
        },
        fixable: 'code',
        messages: {
          missingConfig:
            'package.json: `publishConfig` setting required for public packages.',
        },
        type: 'problem',
      },
      create(context) {
        const { packageJson } = readPkgUp.sync({
          cwd: path.dirname(context.getFilename()),
        });

        const sourceCode = context.getSourceCode();

        return {
          Program: node => {
            if (packageJson.private) {
              return;
            }

            const tokens = sourceCode.getTokens(node);

            const jsonKeys = tokens
              .filter((token, i) => {
                return token.type === 'String' && tokens[i + 1]?.value === ':';
              })
              .map(token => token.value);

            if (!jsonKeys.includes('"publishConfig"')) {
              const firstToken = sourceCode.getFirstToken(node);
              context.report({
                node,
                messageId: 'missingConfig',
                fix: fixer => {
                  return fixer.insertTextAfter(
                    firstToken,
                    defaultPublishConfigJSON
                  );
                },
              });
            }
          },
        };
      },
    },
  },
};
