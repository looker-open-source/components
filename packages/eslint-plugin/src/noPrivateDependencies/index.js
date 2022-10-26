/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

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
            'Prevent public packages from depending on private packages.',
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
