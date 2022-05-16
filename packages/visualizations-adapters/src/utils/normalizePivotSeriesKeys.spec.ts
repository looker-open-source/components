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

import { normalizePivotSeriesKeys } from './normalizePivotSeriesKeys'

describe('normalizePivotSeriesKeys', () => {
  it('converts sdk formatted pivot keys to our supported pivot keys', () => {
    const series_colors = {
      'Yes - orders.count': '#FFFFFF',
    }
    const output = normalizePivotSeriesKeys(series_colors)

    expect(output).toEqual({ 'Yes - orders.count': '#FFFFFF' })
  })

  it('it converts Row Total keys to reference magic string', () => {
    const series_colors = {
      '$$$_row_total_$$$ - orders.count': '#FFFFFF',
    }
    const output = normalizePivotSeriesKeys(series_colors)
    expect(output).toEqual({ '$$$_row_total_$$$ - orders.count': '#FFFFFF' })
  })
})
