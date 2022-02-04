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

import { paddingDefaultsHelper } from './paddingDefaultsHelper'

describe('paddingDefaultsHelper', () => {
  test('p', () => {
    expect(
      paddingDefaultsHelper({ p: 'small' }, { p: 'medium' })
    ).toMatchInlineSnapshot(
      {},
      `
      Object {
        "p": "small",
      }
    `
    )
  })

  test('pl', () => {
    expect(
      paddingDefaultsHelper({ pl: 'small' }, { p: 'medium' })
    ).toMatchInlineSnapshot(
      {},
      `
      Object {
        "pl": "small",
        "pr": "medium",
        "py": "medium",
      }
    `
    )
  })

  test('py', () => {
    expect(
      paddingDefaultsHelper({ py: 'small' }, { px: 'medium' })
    ).toMatchInlineSnapshot(
      {},
      `
      Object {
        "px": "medium",
        "py": "small",
      }
    `
    )
  })

  test('pl vs px', () => {
    expect(
      paddingDefaultsHelper({ pl: 'small' }, { px: 'medium' })
    ).toMatchInlineSnapshot(
      {},
      `
      Object {
        "pl": "small",
        "pr": "medium",
      }
    `
    )
  })

  test('none', () => {
    expect(paddingDefaultsHelper({}, { p: 'medium' })).toMatchInlineSnapshot(
      {},
      `
      Object {
        "p": "medium",
      }
    `
    )
  })

  test('no defaults', () => {
    expect(
      paddingDefaultsHelper({ pl: 'medium', px: 'small' }, {})
    ).toMatchInlineSnapshot(
      {},
      `
      Object {
        "pl": "medium",
        "pr": "small",
      }
    `
    )
  })

  test('compass points', () => {
    expect(
      paddingDefaultsHelper(
        { pb: 'xsmall', pl: 'small', pr: 'medium', pt: 'large', px: 'xlarge' },
        { p: 'xxlarge' }
      )
    ).toMatchInlineSnapshot(
      {},
      `
      Object {
        "pb": "xsmall",
        "pl": "small",
        "pr": "medium",
        "pt": "large",
      }
    `
    )
  })
})
