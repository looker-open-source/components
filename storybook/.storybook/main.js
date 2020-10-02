/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

const main = require('@looker/storybook-config/src/main')

/**
 *
 *  @TODO - Implement Storybook "Composition" support
 *
 *  This will be a useful way to aid in publishing documentation per-package as
 *  well as allowing other projects to leverage documentation within their own
 *  Storybooks.
 *
 * const hostPrefix = 'http://components.looker.com/storybook/...'
 *
 * const packages = [
 *   {
 *     key: 'components',
 *     title: '@looker/components',
 *     port: 3301,
 *   },
 *   {
 *     key: 'components-providers',
 *     title: '@looker/components-providers',
 *     port: 3303,
 *   },
 *   {
 *     key: 'design-tokens',
 *     title: '@looker/design-tokens',
 *     port: 3302,
 *   },
 * ]
 *
 * const refs = {}
 * packages.forEach(({ key, title, port }) => {
 *   refs[key] = {
 *     title,
 *     url: `${hostPrefix}/${key}`,
 *   }
 * })
 *
 */

module.exports = {
  ...main,
  stories: ['../src/**/*.stories.tsx', '../../packages/**/*.story.tsx'],
}
