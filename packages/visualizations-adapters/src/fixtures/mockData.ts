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

export const mockData = [
  {
    'orders.count': 87,
    'orders.average_total_amount_of_order_usd': 88,
    'orders.created_date': '2019-12-19',
    'users.state': 'Oregon',
  },
  {
    'orders.count': 3087,
    'orders.average_total_amount_of_order_usd': 1088,
    'orders.created_date': '2019-12-22',
    'users.state': 'California',
  },
  {
    'orders.count': 2515,
    'orders.average_total_amount_of_order_usd': 1069,
    'orders.created_date': '2019-12-23',
    'users.state': 'California',
  },
]

export const mockDataWithNull = [
  {
    'orders.count': 3087,
    'orders.average_total_amount_of_order_usd': 1088,
    'orders.created_date': '2019-12-22',
    'users.state': 'California',
  },
  {
    'orders.count': 2087,
    'orders.average_total_amount_of_order_usd': 88,
    'orders.created_date': '2019-12-22',
    'users.state': 'California',
  },
  {
    'orders.count': null,
    'orders.average_total_amount_of_order_usd': null,
    'orders.created_date': '2019-12-22',
    'users.state': 'California',
  },
  {
    'orders.count': 3087,
    'orders.average_total_amount_of_order_usd': 88,
    'orders.created_date': '2019-12-22',
    'users.state': 'California',
  },
  {
    'orders.count': 2515,
    'orders.average_total_amount_of_order_usd': 1069,
    'orders.created_date': '2019-12-22',
    'users.state': 'California',
  },
]

export const mockTotals = {
  'orders.average_total_amount_of_order_usd': 2245,
  'orders.count': 5689,
}

export const mockRawTotals = {
  'orders.average_total_amount_of_order_usd': { value: 2245 },
  'orders.count': { value: 5689 },
}

export const mockNestedRawTotals = {
  'history.count': {
    '2022-08': {
      value: null,
    },
    '2022-09': {
      value: 101,
    },
    '2022-10': {
      value: 45,
    },
    $$$_row_total_$$$: {
      value: 146,
    },
  },
}

export const mockNestedTotals = {
  '2022-08 - history.count': null,
  '2022-09 - history.count': 101,
  '2022-10 - history.count': 45,
  '$$$_row_total_$$$ - history.count': 146,
}

export const mockDataWithRowTotals = [
  {
    'dashboard.title': null,
    '2022-08 - history.count': null,
    '2022-09 - history.count': 89,
    '2022-10 - history.count': 39,
    '$$$_row_total_$$$ - history.count': 128,
  },
  {
    'dashboard.title': 'First Dashboard',
    '2022-08 - history.count': null,
    '2022-09 - history.count': 12,
    '2022-10 - history.count': null,
    '$$$_row_total_$$$ - history.count': 12,
  },
]

export const mockPivotedData = [
  {
    'users.city': 'New York',
    'f - orders.count': 838,
    'm - orders.count': 640,
    'male - orders.count': null,
  },
  {
    'users.city': 'Los Angeles',
    'f - orders.count': 386,
    'm - orders.count': 352,
    'male - orders.count': null,
  },
  {
    'users.city': 'Chicago',
    'f - orders.count': 229,
    'm - orders.count': 235,
    'male - orders.count': null,
  },
]
