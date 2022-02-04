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

import { getDataRange } from './getDataRange'
import { mockBarConfig, mockFields } from '../__mocks__'

describe('getDataRange', () => {
  const mockData = [
    { 'orders.count': 2, 'orders.average_total_amount_of_order_usd': 5 },
    { 'orders.count': 7, 'orders.average_total_amount_of_order_usd': 3 },
    { 'orders.count': -2, 'orders.average_total_amount_of_order_usd': -10 },
  ]

  it('picks min and max value from data array', () => {
    const [dataMin, dataMax] = getDataRange({
      config: mockBarConfig,
      fields: mockFields,
      data: mockData,
    })

    expect(dataMin).toEqual(-10)
    expect(dataMax).toEqual(7)
  })

  it('picks min and max accumulated value of each data group when positioning == stacked', () => {
    const [dataMin, dataMax] = getDataRange({
      config: { ...mockBarConfig, positioning: 'stacked' },
      fields: mockFields,
      data: mockData,
    })

    expect(dataMin).toEqual(-12)
    expect(dataMax).toEqual(10)
  })
})
