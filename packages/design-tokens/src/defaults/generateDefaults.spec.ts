/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import { generateDefaults } from './generateDefaults'
import { themeDefaults } from './index'

describe('generateDefaults', () => {
  test('none', () => {
    const defaults = generateDefaults(themeDefaults)

    expect(defaults.brandAnimation).toEqual(false)
    expect(defaults.density).toEqual(0)
  })

  test('empty', () => {
    const defaults = generateDefaults(themeDefaults, {})

    expect(defaults.brandAnimation).toEqual(themeDefaults.brandAnimation)
    expect(defaults.density).toEqual(themeDefaults.density)
  })

  test('overwrite', () => {
    const defaults = generateDefaults(themeDefaults, {
      brandAnimation: true,
      density: -1,
    })

    expect(defaults.brandAnimation).toEqual(true)
    expect(defaults.density).toEqual(-1)
  })
})
