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
import { hexToRgba } from './hexToRgba'

describe('hexToRgba', () => {
  test('converts hex code to rgba equivalent', () => {
    expect(hexToRgba('#ffffff', 1)).toEqual('rgba(255, 255, 255, 1)')
    expect(hexToRgba('#000000', 0.1)).toEqual('rgba(0, 0, 0, 0.1)')
  })
  test('handles 3-digit hex colors without the preceeding # symbol', () => {
    expect(hexToRgba('fff', 0.5)).toEqual('rgba(255, 255, 255, 0.5)')
  })
  test('throws error when invalid arguments are supplied', () => {
    expect(() => {
      hexToRgba('not-a-hex-code', 1)
    }).toThrow()
    expect(() => {
      hexToRgba('FFFFFF', 1000)
    }).toThrow()
  })
})
