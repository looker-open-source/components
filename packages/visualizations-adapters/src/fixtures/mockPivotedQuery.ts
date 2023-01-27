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

import type { SDKRecord, Fields, Pivots } from '../types'

export const mockPivotedQuery: {
  data: SDKRecord[]
  fields: Fields
  pivots: Pivots
  totals: Record<string, number>
} = {
  data: [
    {
      'products.brand': 'Calvin Klein',
      '2016-02 - orders.count': 1,
      '2016-03 - orders.count': 3,
      '2016-04 - orders.count': 2,
      '2016-05 - orders.count': 4,
      '2016-06 - orders.count': 1,
      '2016-07 - orders.count': 7,
      '2016-08 - orders.count': 2,
      '2016-09 - orders.count': 2,
      '2016-10 - orders.count': 5,
      '2016-11 - orders.count': 2,
      '2016-12 - orders.count': 5,
      '2017-01 - orders.count': 8,
      '2017-02 - orders.count': 9,
      '2017-03 - orders.count': 7,
      '2017-04 - orders.count': 18,
      '2017-05 - orders.count': 5,
      '2017-06 - orders.count': 11,
      '2017-07 - orders.count': 24,
      '2017-08 - orders.count': 18,
      '2017-09 - orders.count': 14,
      '2017-10 - orders.count': 16,
      '2017-11 - orders.count': 12,
      '2017-12 - orders.count': 20,
      '2018-01 - orders.count': 17,
      '2018-02 - orders.count': 19,
      '2018-03 - orders.count': 25,
      '2018-04 - orders.count': 24,
      '2018-05 - orders.count': 26,
      '2018-06 - orders.count': 26,
      '2018-07 - orders.count': 29,
      '2018-08 - orders.count': 25,
      '2018-09 - orders.count': 20,
      '2018-10 - orders.count': 27,
      '2018-11 - orders.count': 30,
      '2018-12 - orders.count': 25,
      '2019-01 - orders.count': 34,
      '2019-02 - orders.count': 29,
      '2019-03 - orders.count': 33,
      '2019-04 - orders.count': 36,
      '2019-05 - orders.count': 16,
      '2019-06 - orders.count': 47,
      '2019-07 - orders.count': 30,
      '2019-08 - orders.count': 35,
      '2019-09 - orders.count': 39,
      '2019-10 - orders.count': 38,
      '2019-11 - orders.count': 38,
      '2019-12 - orders.count': 17,
      'orders.created_month___null - orders.count': 0,
    },
    {
      'products.brand': 'Nautica',
      '2016-02 - orders.count': 1,
      '2016-03 - orders.count': 1,
      '2016-04 - orders.count': 1,
      '2016-05 - orders.count': 3,
      '2016-06 - orders.count': 3,
      '2016-07 - orders.count': 1,
      '2016-08 - orders.count': 1,
      '2016-09 - orders.count': null,
      '2016-10 - orders.count': 1,
      '2016-11 - orders.count': 4,
      '2016-12 - orders.count': 3,
      '2017-01 - orders.count': 6,
      '2017-02 - orders.count': 3,
      '2017-03 - orders.count': 3,
      '2017-04 - orders.count': 3,
      '2017-05 - orders.count': 6,
      '2017-06 - orders.count': 9,
      '2017-07 - orders.count': 11,
      '2017-08 - orders.count': 10,
      '2017-09 - orders.count': 9,
      '2017-10 - orders.count': 9,
      '2017-11 - orders.count': 12,
      '2017-12 - orders.count': 12,
      '2018-01 - orders.count': 15,
      '2018-02 - orders.count': 16,
      '2018-03 - orders.count': 14,
      '2018-04 - orders.count': 15,
      '2018-05 - orders.count': 17,
      '2018-06 - orders.count': 17,
      '2018-07 - orders.count': 17,
      '2018-08 - orders.count': 11,
      '2018-09 - orders.count': 16,
      '2018-10 - orders.count': 14,
      '2018-11 - orders.count': 10,
      '2018-12 - orders.count': 20,
      '2019-01 - orders.count': 25,
      '2019-02 - orders.count': 16,
      '2019-03 - orders.count': 18,
      '2019-04 - orders.count': 17,
      '2019-05 - orders.count': 19,
      '2019-06 - orders.count': 15,
      '2019-07 - orders.count': 12,
      '2019-08 - orders.count': 14,
      '2019-09 - orders.count': 18,
      '2019-10 - orders.count': 12,
      '2019-11 - orders.count': 21,
      '2019-12 - orders.count': 15,
      'orders.created_month___null - orders.count': 0,
    },
    {
      'products.brand': 'Volcom',
      '2016-02 - orders.count': 1,
      '2016-03 - orders.count': 1,
      '2016-04 - orders.count': 2,
      '2016-05 - orders.count': 1,
      '2016-06 - orders.count': 2,
      '2016-07 - orders.count': null,
      '2016-08 - orders.count': 3,
      '2016-09 - orders.count': 2,
      '2016-10 - orders.count': 3,
      '2016-11 - orders.count': 5,
      '2016-12 - orders.count': 5,
      '2017-01 - orders.count': 5,
      '2017-02 - orders.count': 2,
      '2017-03 - orders.count': 4,
      '2017-04 - orders.count': 9,
      '2017-05 - orders.count': 8,
      '2017-06 - orders.count': 6,
      '2017-07 - orders.count': 8,
      '2017-08 - orders.count': 11,
      '2017-09 - orders.count': 8,
      '2017-10 - orders.count': 13,
      '2017-11 - orders.count': 10,
      '2017-12 - orders.count': 17,
      '2018-01 - orders.count': 12,
      '2018-02 - orders.count': 12,
      '2018-03 - orders.count': 15,
      '2018-04 - orders.count': 17,
      '2018-05 - orders.count': 9,
      '2018-06 - orders.count': 15,
      '2018-07 - orders.count': 17,
      '2018-08 - orders.count': 11,
      '2018-09 - orders.count': 13,
      '2018-10 - orders.count': 12,
      '2018-11 - orders.count': 6,
      '2018-12 - orders.count': 22,
      '2019-01 - orders.count': 15,
      '2019-02 - orders.count': 14,
      '2019-03 - orders.count': 19,
      '2019-04 - orders.count': 18,
      '2019-05 - orders.count': 15,
      '2019-06 - orders.count': 17,
      '2019-07 - orders.count': 15,
      '2019-08 - orders.count': 15,
      '2019-09 - orders.count': 10,
      '2019-10 - orders.count': 13,
      '2019-11 - orders.count': 19,
      '2019-12 - orders.count': 11,
      'orders.created_month___null - orders.count': 0,
    },
    {
      'products.brand': 'adidas',
      '2016-02 - orders.count': null,
      '2016-03 - orders.count': null,
      '2016-04 - orders.count': 1,
      '2016-05 - orders.count': null,
      '2016-06 - orders.count': 1,
      '2016-07 - orders.count': null,
      '2016-08 - orders.count': null,
      '2016-09 - orders.count': 1,
      '2016-10 - orders.count': null,
      '2016-11 - orders.count': null,
      '2016-12 - orders.count': null,
      '2017-01 - orders.count': null,
      '2017-02 - orders.count': null,
      '2017-03 - orders.count': 1,
      '2017-04 - orders.count': 1,
      '2017-05 - orders.count': 1,
      '2017-06 - orders.count': 2,
      '2017-07 - orders.count': 2,
      '2017-08 - orders.count': 2,
      '2017-09 - orders.count': 2,
      '2017-10 - orders.count': 1,
      '2017-11 - orders.count': 4,
      '2017-12 - orders.count': 7,
      '2018-01 - orders.count': 4,
      '2018-02 - orders.count': 4,
      '2018-03 - orders.count': 1,
      '2018-04 - orders.count': 8,
      '2018-05 - orders.count': 10,
      '2018-06 - orders.count': null,
      '2018-07 - orders.count': 2,
      '2018-08 - orders.count': 4,
      '2018-09 - orders.count': 2,
      '2018-10 - orders.count': 6,
      '2018-11 - orders.count': 7,
      '2018-12 - orders.count': 4,
      '2019-01 - orders.count': 9,
      '2019-02 - orders.count': 6,
      '2019-03 - orders.count': 5,
      '2019-04 - orders.count': 5,
      '2019-05 - orders.count': 4,
      '2019-06 - orders.count': 3,
      '2019-07 - orders.count': 3,
      '2019-08 - orders.count': 6,
      '2019-09 - orders.count': 7,
      '2019-10 - orders.count': 9,
      '2019-11 - orders.count': 12,
      '2019-12 - orders.count': 1,
      'orders.created_month___null - orders.count': 0,
    },
    {
      'products.brand': 'Nike',
      '2016-02 - orders.count': null,
      '2016-03 - orders.count': 1,
      '2016-04 - orders.count': null,
      '2016-05 - orders.count': 1,
      '2016-06 - orders.count': 1,
      '2016-07 - orders.count': 1,
      '2016-08 - orders.count': null,
      '2016-09 - orders.count': null,
      '2016-10 - orders.count': null,
      '2016-11 - orders.count': null,
      '2016-12 - orders.count': 2,
      '2017-01 - orders.count': 1,
      '2017-02 - orders.count': 1,
      '2017-03 - orders.count': 3,
      '2017-04 - orders.count': null,
      '2017-05 - orders.count': 2,
      '2017-06 - orders.count': 1,
      '2017-07 - orders.count': 1,
      '2017-08 - orders.count': 1,
      '2017-09 - orders.count': 1,
      '2017-10 - orders.count': 1,
      '2017-11 - orders.count': 3,
      '2017-12 - orders.count': 4,
      '2018-01 - orders.count': 3,
      '2018-02 - orders.count': null,
      '2018-03 - orders.count': null,
      '2018-04 - orders.count': 3,
      '2018-05 - orders.count': 3,
      '2018-06 - orders.count': 5,
      '2018-07 - orders.count': 2,
      '2018-08 - orders.count': 3,
      '2018-09 - orders.count': 6,
      '2018-10 - orders.count': 3,
      '2018-11 - orders.count': 6,
      '2018-12 - orders.count': 5,
      '2019-01 - orders.count': 6,
      '2019-02 - orders.count': 5,
      '2019-03 - orders.count': 3,
      '2019-04 - orders.count': 4,
      '2019-05 - orders.count': 5,
      '2019-06 - orders.count': 2,
      '2019-07 - orders.count': 7,
      '2019-08 - orders.count': 7,
      '2019-09 - orders.count': 5,
      '2019-10 - orders.count': 5,
      '2019-11 - orders.count': 3,
      '2019-12 - orders.count': 5,
      'orders.created_month___null - orders.count': null,
    },
  ],
  fields: {
    measures: [
      {
        name: '2016-02 - orders.count',
        label: 'Orders Count',
        pivot_key: '2016-02',
      },
      {
        name: '2016-03 - orders.count',
        label: 'Orders Count',
        pivot_key: '2016-03',
      },
      {
        name: '2016-04 - orders.count',
        label: 'Orders Count',
        pivot_key: '2016-04',
      },
      {
        name: '2016-05 - orders.count',
        label: 'Orders Count',
        pivot_key: '2016-05',
      },
      {
        name: '2016-06 - orders.count',
        label: 'Orders Count',
        pivot_key: '2016-06',
      },
      {
        name: '2016-07 - orders.count',
        label: 'Orders Count',
        pivot_key: '2016-07',
      },
      {
        name: '2016-08 - orders.count',
        label: 'Orders Count',
        pivot_key: '2016-08',
      },
      {
        name: '2016-09 - orders.count',
        label: 'Orders Count',
        pivot_key: '2016-09',
      },
      {
        name: '2016-10 - orders.count',
        label: 'Orders Count',
        pivot_key: '2016-10',
      },
      {
        name: '2016-11 - orders.count',
        label: 'Orders Count',
        pivot_key: '2016-11',
      },
      {
        name: '2016-12 - orders.count',
        label: 'Orders Count',
        pivot_key: '2016-12',
      },
      {
        name: '2017-01 - orders.count',
        label: 'Orders Count',
        pivot_key: '2017-01',
      },
      {
        name: '2017-02 - orders.count',
        label: 'Orders Count',
        pivot_key: '2017-02',
      },
      {
        name: '2017-03 - orders.count',
        label: 'Orders Count',
        pivot_key: '2017-03',
      },
      {
        name: '2017-04 - orders.count',
        label: 'Orders Count',
        pivot_key: '2017-04',
      },
      {
        name: '2017-05 - orders.count',
        label: 'Orders Count',
        pivot_key: '2017-05',
      },
      {
        name: '2017-06 - orders.count',
        label: 'Orders Count',
        pivot_key: '2017-06',
      },
      {
        name: '2017-07 - orders.count',
        label: 'Orders Count',
        pivot_key: '2017-07',
      },
      {
        name: '2017-08 - orders.count',
        label: 'Orders Count',
        pivot_key: '2017-08',
      },
      {
        name: '2017-09 - orders.count',
        label: 'Orders Count',
        pivot_key: '2017-09',
      },
      {
        name: '2017-10 - orders.count',
        label: 'Orders Count',
        pivot_key: '2017-10',
      },
      {
        name: '2017-11 - orders.count',
        label: 'Orders Count',
        pivot_key: '2017-11',
      },
      {
        name: '2017-12 - orders.count',
        label: 'Orders Count',
        pivot_key: '2017-12',
      },
      {
        name: '2018-01 - orders.count',
        label: 'Orders Count',
        pivot_key: '2018-01',
      },
      {
        name: '2018-02 - orders.count',
        label: 'Orders Count',
        pivot_key: '2018-02',
      },
      {
        name: '2018-03 - orders.count',
        label: 'Orders Count',
        pivot_key: '2018-03',
      },
      {
        name: '2018-04 - orders.count',
        label: 'Orders Count',
        pivot_key: '2018-04',
      },
      {
        name: '2018-05 - orders.count',
        label: 'Orders Count',
        pivot_key: '2018-05',
      },
      {
        name: '2018-06 - orders.count',
        label: 'Orders Count',
        pivot_key: '2018-06',
      },
      {
        name: '2018-07 - orders.count',
        label: 'Orders Count',
        pivot_key: '2018-07',
      },
      {
        name: '2018-08 - orders.count',
        label: 'Orders Count',
        pivot_key: '2018-08',
      },
      {
        name: '2018-09 - orders.count',
        label: 'Orders Count',
        pivot_key: '2018-09',
      },
      {
        name: '2018-10 - orders.count',
        label: 'Orders Count',
        pivot_key: '2018-10',
      },
      {
        name: '2018-11 - orders.count',
        label: 'Orders Count',
        pivot_key: '2018-11',
      },
      {
        name: '2018-12 - orders.count',
        label: 'Orders Count',
        pivot_key: '2018-12',
      },
      {
        name: '2019-01 - orders.count',
        label: 'Orders Count',
        pivot_key: '2019-01',
      },
      {
        name: '2019-02 - orders.count',
        label: 'Orders Count',
        pivot_key: '2019-02',
      },
      {
        name: '2019-03 - orders.count',
        label: 'Orders Count',
        pivot_key: '2019-03',
      },
      {
        name: '2019-04 - orders.count',
        label: 'Orders Count',
        pivot_key: '2019-04',
      },
      {
        name: '2019-05 - orders.count',
        label: 'Orders Count',
        pivot_key: '2019-05',
      },
      {
        name: '2019-06 - orders.count',
        label: 'Orders Count',
        pivot_key: '2019-06',
      },
      {
        name: '2019-07 - orders.count',
        label: 'Orders Count',
        pivot_key: '2019-07',
      },
      {
        name: '2019-08 - orders.count',
        label: 'Orders Count',
        pivot_key: '2019-08',
      },
      {
        name: '2019-09 - orders.count',
        label: 'Orders Count',
        pivot_key: '2019-09',
      },
      {
        name: '2019-10 - orders.count',
        label: 'Orders Count',
        pivot_key: '2019-10',
      },
      {
        name: '2019-11 - orders.count',
        label: 'Orders Count',
        pivot_key: '2019-11',
      },
      {
        name: '2019-12 - orders.count',
        label: 'Orders Count',
        pivot_key: '2019-12',
      },
      {
        name: 'orders.created_month___null - orders.count',
        label: 'Orders Count',
        pivot_key: 'orders.created_month___null',
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
      },
    ],
    pivots: [
      {
        is_filter: false,
        is_numeric: false,
        label: 'Orders Created Month',
        label_short: 'Created Month',
        name: 'orders.created_month',
        sortable: true,
        type: 'date_month',
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
      key: '2016-02',
      data: {
        'orders.created_month': '2016-02',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2016-02</a>",
      },
    },
    {
      key: '2016-03',
      data: {
        'orders.created_month': '2016-03',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2016-03</a>",
      },
    },
    {
      key: '2016-04',
      data: {
        'orders.created_month': '2016-04',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2016-04</a>",
      },
    },
    {
      key: '2016-05',
      data: {
        'orders.created_month': '2016-05',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2016-05</a>",
      },
    },
    {
      key: '2016-06',
      data: {
        'orders.created_month': '2016-06',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2016-06</a>",
      },
    },
    {
      key: '2016-07',
      data: {
        'orders.created_month': '2016-07',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2016-07</a>",
      },
    },
    {
      key: '2016-08',
      data: {
        'orders.created_month': '2016-08',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2016-08</a>",
      },
    },
    {
      key: '2016-09',
      data: {
        'orders.created_month': '2016-09',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2016-09</a>",
      },
    },
    {
      key: '2016-10',
      data: {
        'orders.created_month': '2016-10',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2016-10</a>",
      },
    },
    {
      key: '2016-11',
      data: {
        'orders.created_month': '2016-11',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2016-11</a>",
      },
    },
    {
      key: '2016-12',
      data: {
        'orders.created_month': '2016-12',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2016-12</a>",
      },
    },
    {
      key: '2017-01',
      data: {
        'orders.created_month': '2017-01',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2017-01</a>",
      },
    },
    {
      key: '2017-02',
      data: {
        'orders.created_month': '2017-02',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2017-02</a>",
      },
    },
    {
      key: '2017-03',
      data: {
        'orders.created_month': '2017-03',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2017-03</a>",
      },
    },
    {
      key: '2017-04',
      data: {
        'orders.created_month': '2017-04',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2017-04</a>",
      },
    },
    {
      key: '2017-05',
      data: {
        'orders.created_month': '2017-05',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2017-05</a>",
      },
    },
    {
      key: '2017-06',
      data: {
        'orders.created_month': '2017-06',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2017-06</a>",
      },
    },
    {
      key: '2017-07',
      data: {
        'orders.created_month': '2017-07',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2017-07</a>",
      },
    },
    {
      key: '2017-08',
      data: {
        'orders.created_month': '2017-08',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2017-08</a>",
      },
    },
    {
      key: '2017-09',
      data: {
        'orders.created_month': '2017-09',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2017-09</a>",
      },
    },
    {
      key: '2017-10',
      data: {
        'orders.created_month': '2017-10',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2017-10</a>",
      },
    },
    {
      key: '2017-11',
      data: {
        'orders.created_month': '2017-11',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2017-11</a>",
      },
    },
    {
      key: '2017-12',
      data: {
        'orders.created_month': '2017-12',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2017-12</a>",
      },
    },
    {
      key: '2018-01',
      data: {
        'orders.created_month': '2018-01',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2018-01</a>",
      },
    },
    {
      key: '2018-02',
      data: {
        'orders.created_month': '2018-02',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2018-02</a>",
      },
    },
    {
      key: '2018-03',
      data: {
        'orders.created_month': '2018-03',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2018-03</a>",
      },
    },
    {
      key: '2018-04',
      data: {
        'orders.created_month': '2018-04',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2018-04</a>",
      },
    },
    {
      key: '2018-05',
      data: {
        'orders.created_month': '2018-05',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2018-05</a>",
      },
    },
    {
      key: '2018-06',
      data: {
        'orders.created_month': '2018-06',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2018-06</a>",
      },
    },
    {
      key: '2018-07',
      data: {
        'orders.created_month': '2018-07',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2018-07</a>",
      },
    },
    {
      key: '2018-08',
      data: {
        'orders.created_month': '2018-08',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2018-08</a>",
      },
    },
    {
      key: '2018-09',
      data: {
        'orders.created_month': '2018-09',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2018-09</a>",
      },
    },
    {
      key: '2018-10',
      data: {
        'orders.created_month': '2018-10',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2018-10</a>",
      },
    },
    {
      key: '2018-11',
      data: {
        'orders.created_month': '2018-11',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2018-11</a>",
      },
    },
    {
      key: '2018-12',
      data: {
        'orders.created_month': '2018-12',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2018-12</a>",
      },
    },
    {
      key: '2019-01',
      data: {
        'orders.created_month': '2019-01',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2019-01</a>",
      },
    },
    {
      key: '2019-02',
      data: {
        'orders.created_month': '2019-02',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2019-02</a>",
      },
    },
    {
      key: '2019-03',
      data: {
        'orders.created_month': '2019-03',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2019-03</a>",
      },
    },
    {
      key: '2019-04',
      data: {
        'orders.created_month': '2019-04',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2019-04</a>",
      },
    },
    {
      key: '2019-05',
      data: {
        'orders.created_month': '2019-05',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2019-05</a>",
      },
    },
    {
      key: '2019-06',
      data: {
        'orders.created_month': '2019-06',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2019-06</a>",
      },
    },
    {
      key: '2019-07',
      data: {
        'orders.created_month': '2019-07',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2019-07</a>",
      },
    },
    {
      key: '2019-08',
      data: {
        'orders.created_month': '2019-08',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2019-08</a>",
      },
    },
    {
      key: '2019-09',
      data: {
        'orders.created_month': '2019-09',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2019-09</a>",
      },
    },
    {
      key: '2019-10',
      data: {
        'orders.created_month': '2019-10',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2019-10</a>",
      },
    },
    {
      key: '2019-11',
      data: {
        'orders.created_month': '2019-11',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2019-11</a>",
      },
    },
    {
      key: '2019-12',
      data: {
        'orders.created_month': '2019-12',
      },
      is_total: false,
      labels: {
        'orders.created_month':
          "<a href='#drillmenu' class='cell-clickable-content' target='_self'>2019-12</a>",
      },
    },
    {
      key: 'orders.created_month___null',
      data: {
        'orders.created_month': null,
      },
      is_total: false,
      labels: {
        'orders.created_month': '',
      },
    },
  ],
  totals: {
    '2016-02 - orders.count': 3,
    '2016-03 - orders.count': 6,
    '2016-04 - orders.count': 6,
    '2016-05 - orders.count': 8,
    '2016-06 - orders.count': 8,
    '2016-07 - orders.count': 9,
    '2016-08 - orders.count': 6,
    '2016-09 - orders.count': 5,
    '2016-10 - orders.count': 9,
    '2016-11 - orders.count': 11,
    '2016-12 - orders.count': 15,
    '2017-01 - orders.count': 20,
    '2017-02 - orders.count': 15,
    '2017-03 - orders.count': 18,
    '2017-04 - orders.count': 30,
    '2017-05 - orders.count': 21,
    '2017-06 - orders.count': 29,
    '2017-07 - orders.count': 45,
    '2017-08 - orders.count': 41,
    '2017-09 - orders.count': 34,
    '2017-10 - orders.count': 40,
    '2017-11 - orders.count': 41,
    '2017-12 - orders.count': 59,
    '2018-01 - orders.count': 51,
    '2018-02 - orders.count': 50,
    '2018-03 - orders.count': 54,
    '2018-04 - orders.count': 67,
    '2018-05 - orders.count': 63,
    '2018-06 - orders.count': 60,
    '2018-07 - orders.count': 66,
    '2018-08 - orders.count': 54,
    '2018-09 - orders.count': 57,
    '2018-10 - orders.count': 60,
    '2018-11 - orders.count': 59,
    '2018-12 - orders.count': 74,
    '2019-01 - orders.count': 86,
    '2019-02 - orders.count': 70,
    '2019-03 - orders.count': 77,
    '2019-04 - orders.count': 79,
    '2019-05 - orders.count': 59,
    '2019-06 - orders.count': 83,
    '2019-07 - orders.count': 66,
    '2019-08 - orders.count': 74,
    '2019-09 - orders.count': 77,
    '2019-10 - orders.count': 76,
    '2019-11 - orders.count': 89,
    '2019-12 - orders.count': 48,
    'orders.created_month___null - orders.count': 0,
  },
}
