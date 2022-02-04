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

import { getPrecision, precisionRound } from './precisionUtils'

describe('getPrecision', () => {
  test('Calculate precision', () => {
    expect(getPrecision(0.1)).toEqual(1)
    expect(getPrecision(0.001)).toEqual(3)
    expect(getPrecision(1)).toEqual(0)
    expect(getPrecision(100.1)).toEqual(1)
    expect(getPrecision(NaN)).toEqual(0)
    expect(getPrecision(Infinity)).toEqual(0)
  })
})

describe('precisionRound', () => {
  test('Round to a specified precision', () => {
    expect(precisionRound(0.1 + 0.2, 2)).toEqual(0.3)
    expect(precisionRound(1.123456, 2)).toEqual(1.12)
    expect(precisionRound(0.1 + 0.2, 0)).toEqual(0)
  })
})
