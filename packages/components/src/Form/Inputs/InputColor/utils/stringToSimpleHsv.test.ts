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

import { stringToSimpleHsv } from './stringToSimpleHsv'

describe('stringToSimpleHsv', () => {
  describe('red', () => {
    test('converts hex to hsv', () => {
      const { h, s, v } = stringToSimpleHsv('#FF0000')
      expect(h).toBe(0)
      expect(s).toBe(1)
      expect(v).toBe(1)
    })

    test('converts color name to hsv', () => {
      const { h, s, v } = stringToSimpleHsv('red')
      expect(h).toBe(0)
      expect(s).toBe(1)
      expect(v).toBe(1)
    })
  })

  /**
   * We have a specific test suite for black, white and grey
   * because d3-hsv, which we use for string to hsv conversions,
   * will return NaN for h and s values when a given color is
   * hueless and saturationless. We need these values to not be NaN
   * when calculating handle position for the hue slider and saturation preview.
   */
  describe('hueless and saturationless colors', () => {
    test('returns object with h = 0 and s = 0 when using "black"', () => {
      const { h, s, v } = stringToSimpleHsv('black')
      expect(h).toBe(0)
      expect(s).toBe(0)
      expect(v).toBe(0)
    })

    test('returns object with h = 0 when using "white"', () => {
      const { h, s, v } = stringToSimpleHsv('white')
      expect(h).toBe(0)
      expect(s).toBe(0)
      expect(v).toBe(1)
    })

    test('returns object with h = 0 when using "grey"', () => {
      const { h, s, v } = stringToSimpleHsv('grey')
      expect(h).toBe(0)
      expect(s).toBe(0)
      expect(v).toBe(0.5019607843137255)
    })
  })
})
