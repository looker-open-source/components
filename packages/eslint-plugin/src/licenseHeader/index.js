/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

const path = require('path')
const readPkgUp = require('read-pkg-up')
const deriveLintErrorCode = require('./deriveLintErrorCode')

module.exports = {
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      plugins: ['@looker'],
      rules: {
        '@looker/license-header': ['error', {}],
      },
    },
  ],
  rules: {
    'license-header': {
      meta: {
        docs: {
          description: 'Checks for a valid license header in public packages.',
          recommended: true,
        },
        fixable: 'code',
        messages: {
          copyright: 'No copyright statement detected in header comments.',
          spdxOrLicense: 'No SPDX identifier or full license text detected.',
          shortSrc: 'Files with < 100 LoC should use SPDX license header.',
          longSrc: 'Files with >= 100 LoC should use full text license header.',
        },
        type: 'problem',
      },
      create(context) {
        const { packageJson } = readPkgUp.sync({
          cwd: path.dirname(context.getFilename()),
        })

        const sourceCode = context.getSourceCode()

        return {
          Program: node => {
            if (packageJson.private) {
              return
            }

            const headerComments = sourceCode.getCommentsBefore(node)

            const sourceLineCount = sourceCode.getLocFromIndex(
              sourceCode.getText().length
            ).line

            const { lintErrors, currentLicenseHeaderNode, draftLicenseHeader } =
              deriveLintErrorCode({
                headerComments,
                sourceLineCount,
              })

            lintErrors.forEach(messageId => {
              context.report({
                node,
                messageId,
                fix: fixer => {
                  if (currentLicenseHeaderNode) {
                    // if partial header exists, replace existing header comment so as not
                    // to double up after fix
                    return fixer.replaceText(
                      currentLicenseHeaderNode,
                      draftLicenseHeader
                    )
                  } else {
                    return fixer.insertTextBefore(
                      sourceCode.getFirstToken(node),
                      draftLicenseHeader + '\n\n'
                    )
                  }
                },
              })
            })
          },
        }
      },
    },
  },
}
