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
const { RuleTester } = require('eslint')
const rule = require('.').rules['no-private-dependencies']

jest.mock('@manypkg/get-packages', () => ({
  getPackagesSync: jest.fn(() => ({
    packages: [
      { packageJson: { name: 'a' } },
      { packageJson: { name: 'b', private: true } },
    ],
  })),
}))

const filename = '@looker/components/package.json'

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
})
