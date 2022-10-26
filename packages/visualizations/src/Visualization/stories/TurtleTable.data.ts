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

import type { SDKRecord, Fields, Pivots } from '@looker/visualizations-adapters'

export const mockTurtlesProps: {
  data: SDKRecord[]
  fields: Fields
  pivots: Pivots
} = {
  data: [
    {
      'products.brand': 'Calvin Klein',
      '2016-01 - orders.count': 4,
      '2016-04 - orders.count': 7,
      '2016-07 - orders.count': 11,
      '2016-10 - orders.count': 12,
      '2017-01 - orders.count': 24,
      '2017-04 - orders.count': 34,
      '2017-07 - orders.count': 56,
      '2017-10 - orders.count': 48,
      '2018-01 - orders.count': 61,
      '2018-04 - orders.count': 76,
      '2018-07 - orders.count': 74,
      '2018-10 - orders.count': 82,
      '2019-01 - orders.count': 96,
      '2019-04 - orders.count': 99,
      '2019-07 - orders.count': 104,
      '2019-10 - orders.count': 93,
    },
    {
      'products.brand': 'Carhartt',
      '2016-01 - orders.count': 2,
      '2016-04 - orders.count': 6,
      '2016-07 - orders.count': 4,
      '2016-10 - orders.count': 14,
      '2017-01 - orders.count': 20,
      '2017-04 - orders.count': 25,
      '2017-07 - orders.count': 31,
      '2017-10 - orders.count': 43,
      '2018-01 - orders.count': 50,
      '2018-04 - orders.count': 55,
      '2018-07 - orders.count': 58,
      '2018-10 - orders.count': 70,
      '2019-01 - orders.count': 71,
      '2019-04 - orders.count': 77,
      '2019-07 - orders.count': 85,
      '2019-10 - orders.count': 65,
    },
    {
      'products.brand': 'Nautica',
      '2016-01 - orders.count': 2,
      '2016-04 - orders.count': 7,
      '2016-07 - orders.count': 2,
      '2016-10 - orders.count': 8,
      '2017-01 - orders.count': 12,
      '2017-04 - orders.count': 18,
      '2017-07 - orders.count': 30,
      '2017-10 - orders.count': 33,
      '2018-01 - orders.count': 45,
      '2018-04 - orders.count': 49,
      '2018-07 - orders.count': 44,
      '2018-10 - orders.count': 44,
      '2019-01 - orders.count': 59,
      '2019-04 - orders.count': 51,
      '2019-07 - orders.count': 44,
      '2019-10 - orders.count': 48,
    },
    {
      'products.brand': 'Nike',
      '2016-01 - orders.count': 1,
      '2016-04 - orders.count': 2,
      '2016-07 - orders.count': 1,
      '2016-10 - orders.count': 2,
      '2017-01 - orders.count': 5,
      '2017-04 - orders.count': 3,
      '2017-07 - orders.count': 3,
      '2017-10 - orders.count': 8,
      '2018-01 - orders.count': 3,
      '2018-04 - orders.count': 11,
      '2018-07 - orders.count': 11,
      '2018-10 - orders.count': 14,
      '2019-01 - orders.count': 14,
      '2019-04 - orders.count': 11,
      '2019-07 - orders.count': 19,
      '2019-10 - orders.count': 13,
      'orders.created_quarter___null - orders.count': null,
    },
    {
      'products.brand': 'Volcom',
      '2016-01 - orders.count': 2,
      '2016-04 - orders.count': 5,
      '2016-07 - orders.count': 5,
      '2016-10 - orders.count': 13,
      '2017-01 - orders.count': 11,
      '2017-04 - orders.count': 23,
      '2017-07 - orders.count': 27,
      '2017-10 - orders.count': 40,
      '2018-01 - orders.count': 39,
      '2018-04 - orders.count': 41,
      '2018-07 - orders.count': 41,
      '2018-10 - orders.count': 40,
      '2019-01 - orders.count': 48,
      '2019-04 - orders.count': 50,
      '2019-07 - orders.count': 40,
      '2019-10 - orders.count': 43,
    },
    {
      'products.brand': 'adidas',
      '2016-01 - orders.count': null,
      '2016-04 - orders.count': 2,
      '2016-07 - orders.count': 1,
      '2016-10 - orders.count': null,
      '2017-01 - orders.count': 1,
      '2017-04 - orders.count': 4,
      '2017-07 - orders.count': 6,
      '2017-10 - orders.count': 12,
      '2018-01 - orders.count': 9,
      '2018-04 - orders.count': 18,
      '2018-07 - orders.count': 8,
      '2018-10 - orders.count': 17,
      '2019-01 - orders.count': 20,
      '2019-04 - orders.count': 12,
      '2019-07 - orders.count': 16,
      '2019-10 - orders.count': 22,
    },
  ],
  fields: {
    measures: [
      {
        name: '2016-01 - orders.count',
        label: 'Order Count',
        pivot_key: '2016-01',
      },
      {
        name: '2016-04 - orders.count',
        label: 'Order Count',
        pivot_key: '2016-04',
      },
      {
        name: '2016-07 - orders.count',
        label: 'Order Count',
        pivot_key: '2016-07',
      },
      {
        name: '2016-10 - orders.count',
        label: 'Order Count',
        pivot_key: '2016-10',
      },
      {
        name: '2017-01 - orders.count',
        label: 'Order Count',
        pivot_key: '2017-01',
      },
      {
        name: '2017-04 - orders.count',
        label: 'Order Count',
        pivot_key: '2017-04',
      },
      {
        name: '2017-07 - orders.count',
        label: 'Order Count',
        pivot_key: '2017-07',
      },
      {
        name: '2017-10 - orders.count',
        label: 'Order Count',
        pivot_key: '2017-10',
      },
      {
        name: '2018-01 - orders.count',
        label: 'Order Count',
        pivot_key: '2018-01',
      },
      {
        name: '2018-04 - orders.count',
        label: 'Order Count',
        pivot_key: '2018-04',
      },
      {
        name: '2018-07 - orders.count',
        label: 'Order Count',
        pivot_key: '2018-07',
      },
      {
        name: '2018-10 - orders.count',
        label: 'Order Count',
        pivot_key: '2018-10',
      },
      {
        name: '2019-01 - orders.count',
        label: 'Order Count',
        pivot_key: '2019-01',
      },
      {
        name: '2019-04 - orders.count',
        label: 'Order Count',
        pivot_key: '2019-04',
      },
      {
        name: '2019-07 - orders.count',
        label: 'Order Count',
        pivot_key: '2019-07',
      },
      {
        name: '2019-10 - orders.count',
        label: 'Order Count',
        pivot_key: '2019-10',
      },
    ],
    dimensions: [
      {
        is_filter: false,
        is_numeric: false,
        label: 'Products Brand',
        label_short: 'Brand',
        name: 'products.brand',
        sortable: true,
        type: 'string',
        value_format: null,
        view: 'products',
        view_label: 'Products',
        is_fiscal: false,
        is_timeframe: false,
        sorted: {
          sort_index: 0,
          desc: false,
        },
      },
    ],
    pivots: [
      {
        is_filter: false,
        is_numeric: false,
        label: 'Orders Created Quarter',
        label_short: 'Created Quarter',
        name: 'orders.created_quarter',
        sortable: true,
        type: 'date_quarter',
        value_format: null,
        view: 'orders',
        view_label: 'Orders',
        is_fiscal: false,
        is_timeframe: true,
        sorted: {
          sort_index: 1,
          desc: false,
        },
      },
    ],
  },
  pivots: [
    {
      key: '2016-01',
      data: { 'orders.created_quarter': '2016-01' },
      is_total: false,
      labels: { 'orders.created_quarter': '2016-01' },
      label: '2016-01',
    },
    {
      key: '2016-04',
      data: { 'orders.created_quarter': '2016-04' },
      is_total: false,
      labels: { 'orders.created_quarter': '2016-04' },
      label: '2016-04',
    },
    {
      key: '2016-07',
      data: { 'orders.created_quarter': '2016-07' },
      is_total: false,
      labels: { 'orders.created_quarter': '2016-07' },
      label: '2016-07',
    },
    {
      key: '2016-10',
      data: { 'orders.created_quarter': '2016-10' },
      is_total: false,
      labels: { 'orders.created_quarter': '2016-10' },
      label: '2016-10',
    },
    {
      key: '2017-01',
      data: { 'orders.created_quarter': '2017-01' },
      is_total: false,
      labels: { 'orders.created_quarter': '2017-01' },
      label: '2017-01',
    },
    {
      key: '2017-04',
      data: { 'orders.created_quarter': '2017-04' },
      is_total: false,
      labels: { 'orders.created_quarter': '2017-04' },
      label: '2017-04',
    },
    {
      key: '2017-07',
      data: { 'orders.created_quarter': '2017-07' },
      is_total: false,
      labels: { 'orders.created_quarter': '2017-07' },
      label: '2017-07',
    },
    {
      key: '2017-10',
      data: { 'orders.created_quarter': '2017-10' },
      is_total: false,
      labels: { 'orders.created_quarter': '2017-10' },
      label: '2017-10',
    },
    {
      key: '2018-01',
      data: { 'orders.created_quarter': '2018-01' },
      is_total: false,
      labels: { 'orders.created_quarter': '2018-01' },
      label: '2018-01',
    },
    {
      key: '2018-04',
      data: { 'orders.created_quarter': '2018-04' },
      is_total: false,
      labels: { 'orders.created_quarter': '2018-04' },
      label: '2018-04',
    },
    {
      key: '2018-07',
      data: { 'orders.created_quarter': '2018-07' },
      is_total: false,
      labels: { 'orders.created_quarter': '2018-07' },
      label: '2018-07',
    },
    {
      key: '2018-10',
      data: { 'orders.created_quarter': '2018-10' },
      is_total: false,
      labels: { 'orders.created_quarter': '2018-10' },
      label: '2018-10',
    },
    {
      key: '2019-01',
      data: { 'orders.created_quarter': '2019-01' },
      is_total: false,
      labels: { 'orders.created_quarter': '2019-01' },
      label: '2019-01',
    },
    {
      key: '2019-04',
      data: { 'orders.created_quarter': '2019-04' },
      is_total: false,
      labels: { 'orders.created_quarter': '2019-04' },
      label: '2019-04',
    },
    {
      key: '2019-07',
      data: { 'orders.created_quarter': '2019-07' },
      is_total: false,
      labels: { 'orders.created_quarter': '2019-07' },
      label: '2019-07',
    },
    {
      key: '2019-10',
      data: { 'orders.created_quarter': '2019-10' },
      is_total: false,
      labels: { 'orders.created_quarter': '2019-10' },
      label: '2019-10',
    },
  ],
}
