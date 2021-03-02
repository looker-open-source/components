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

import { colors } from '../colors'
import { blendColorTransparency } from './blendColorTransparency'

const { text } = colors

describe('blendColorTransparency', () => {
  test('text - 2', () => {
    expect(blendColorTransparency(text, 2)).toEqual('rgba(38,45,51,0.12)')
  })

  test('named color - 4', () => {
    expect(blendColorTransparency('purple', 2)).toEqual('rgba(128,0,128,0.12)')
  })

  test('rgb color - 5', () => {
    expect(blendColorTransparency('rgb(0,20,50)', 2)).toEqual(
      'rgba(0,20,50,0.12)'
    )
  })
})
