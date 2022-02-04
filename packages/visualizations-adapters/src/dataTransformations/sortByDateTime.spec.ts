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

import { sortByDateTime } from './sortByDateTime'
import { mockFields } from '../__mocks__'

describe('sortByDateTime', () => {
  const mockData = [
    { 'orders.created_month': '2019-11', 'orders.count': 1 },
    { 'orders.created_month': '2018-10', 'orders.count': 20 },
    { 'orders.created_month': '2014-07', 'orders.count': 300 },
    { 'orders.created_month': '2017-09', 'orders.count': 4000 },
  ]
  const { measures, dimensions } = mockFields

  it('sorts data in chronological order', () => {
    const sortedData = sortByDateTime({
      data: mockData,
      fields: {
        measures,
        dimensions: [{ ...dimensions[0], name: 'orders.created_month' }],
      },
      config: { type: 'line' },
    })

    expect(sortedData.data).toMatchInlineSnapshot(`
      Array [
        Object {
          "orders.count": 300,
          "orders.created_month": "2014-07",
        },
        Object {
          "orders.count": 4000,
          "orders.created_month": "2017-09",
        },
        Object {
          "orders.count": 20,
          "orders.created_month": "2018-10",
        },
        Object {
          "orders.count": 1,
          "orders.created_month": "2019-11",
        },
      ]
    `)
  })
})
