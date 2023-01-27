/**
 * Copyright (c) 2022 Looker Data Sciences, Inc.
 * SPDX-License-Identifier: MIT
 */

const path = require('path')
const { getPackagesSync } = require('@manypkg/get-packages')

module.exports = {
  overrides: [
    {
      files: ['**/package.json'],
      parser: 'jsonc-eslint-parser',
      plugins: ['@looker'],
      rules: {
        '@looker/no-private-dependencies': ['error', {}],
      },
    },
  ],
  rules: {
    'no-private-dependencies': {
      create(context) {
        const [options] = context.options
        const filename = context.getFilename()

        if (path.basename(filename) !== 'package.json') {
          return {}
        }

        const json = require(filename)

        if (json.private) {
          return {}
        }

        const { packages } = getPackagesSync(process.cwd())

        return {
          'JSONProperty[key.value=/ependencies$/] JSONProperty'(node) {
            const dependency = node.key.value

            for (const { packageJson } of packages) {
              if (options.exclude.includes(dependency)) {
                continue
              }
              if (dependency === packageJson.name && packageJson.private) {
                context.report({
                  data: { dependency, dependent: json.name },
                  messageId: 'invalidPackage',
                  node,
                })
              }
            }
          },
        }
      },
      meta: {
        docs: {
          description:
            'Prevents public packages from depending on private packages.',
          recommended: true,
        },
        messages: {
          invalidPackage:
            'Public package {{ dependent }} cannot depend on private package {{ dependency }}.',
        },
        schema: [
          {
            additionalProperties: false,
            properties: {
              exclude: {
                default: [],
                type: 'array',
              },
            },
            type: 'object',
          },
        ],
        type: 'problem',
      },
    },
  },
}
