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

import { uiBlends } from '../blendPoints'
import { colors } from '../colors'
import { mixScaledColors } from './mixScaledColors'

const { background, text } = colors

describe('mixScaledColors', () => {
  test('default', () => {
    expect(mixScaledColors(uiBlends[3], text, background)).toEqual('#b5b7b9')
  })

  test('dark mode', () => {
    expect(mixScaledColors(uiBlends[3], background, text)).toEqual('#a3a6a8')
  })

  test('low but not super low luminance', () => {
    expect(mixScaledColors(uiBlends[0], '#fff', '#555')).toEqual('#5d5d5d')
  })
})
