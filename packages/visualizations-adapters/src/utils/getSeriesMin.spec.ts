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
import { getSeriesMin } from './getSeriesMin'

describe('getSeriesMin', () => {
  it('gets minimum value from data array', () => {
    const data = [
      { series1: 0, series2: 10 },
      { series1: 3, series2: 7 },
    ]
    expect(getSeriesMin('series1', data)).toEqual(0)
    expect(getSeriesMin('series2', data)).toEqual(7)
  })
  it('it ignores missing or non-numeric values', () => {
    const data = [
      { series1: -50, series2: -20 },
      { series1: -3, series2: -7 },
      { series1: null, series2: 'negative seven hundred' },
    ]
    expect(getSeriesMin('series1', data)).toEqual(-50)
    expect(getSeriesMin('series2', data)).toEqual(-20)
  })
  it('returns zero when all data points are non-numeric', () => {
    const data = [
      { series1: 'today', series2: 'gold' },
      { series1: 'thirty five', series2: 'doogie houser' },
      { series1: null, series2: 'negative seven hundred' },
    ]
    expect(getSeriesMin('series1', data)).toEqual(0)
    expect(getSeriesMin('series2', data)).toEqual(0)
  })
})
