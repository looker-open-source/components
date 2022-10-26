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

import type { Fields } from '../types'

export const mockFields: Fields = {
  measures: [
    {
      is_numeric: true,
      label: 'Orders Count',
      label_short: 'Count',
      name: 'orders.count',
      sortable: true,
      sorted: { desc: true, sort_index: 0 },
      type: 'count_distinct',
      view: 'orders',
      view_label: 'Orders',
      value_format: null,
    },
    {
      is_numeric: true,
      label: 'Orders Average Total Amount of Order USD',
      label_short: 'Average Total Amount of Order USD',
      name: 'orders.average_total_amount_of_order_usd',
      sortable: true,
      type: 'average',
      view: 'orders',
      view_label: 'Orders',
      value_format: '$#,##0.00',
    },
  ],
  dimensions: [
    {
      is_filter: false,
      is_fiscal: false,
      is_numeric: false,
      is_timeframe: true,
      label: 'Orders Created Date',
      label_short: 'Created Date',
      name: 'orders.created_date',
      sortable: true,
      type: 'date_date',
      view: 'orders',
      view_label: 'Orders',
      value_format: null,
    },
    {
      is_filter: false,
      is_fiscal: false,
      is_numeric: false,
      is_timeframe: true,
      label: 'Users State',
      label_short: 'State',
      name: 'users.state',
      sortable: true,
      type: 'string',
      view: 'users',
      view_label: 'Users',
      value_format: null,
    },
  ],
  pivots: [],
}

export const mockFieldsRowTotals: Fields = {
  measures: [
    {
      is_numeric: true,
      label: 'History Count',
      label_short: '2022-08',
      name: '2022-08 - history.count',
      sortable: true,
      type: 'count',
      value_format: null,
      view: 'history',
      view_label: 'History',
      sorted: {
        sort_index: 0,
        desc: true,
        pivot_index: 0,
      },
      pivoted_label: 'History Count: 2022-08',
    },
    {
      is_numeric: true,
      label: 'History Count',
      label_short: '2022-09',
      name: '2022-09 - history.count',
      sortable: true,
      type: 'count',
      value_format: null,
      view: 'history',
      view_label: 'History',
      sorted: {
        sort_index: 0,
        desc: true,
        pivot_index: 0,
      },
      pivoted_label: 'History Count: 2022-09',
    },
    {
      is_numeric: true,
      label: 'History Count',
      label_short: '2022-10',
      name: '2022-10 - history.count',
      sortable: true,
      type: 'count',
      value_format: null,
      view: 'history',
      view_label: 'History',
      sorted: {
        sort_index: 0,
        desc: true,
        pivot_index: 0,
      },
      pivoted_label: 'History Count: 2022-10',
    },
    {
      is_numeric: true,
      label: 'History Count',
      label_short: 'Row Total',
      name: '$$$_row_total_$$$ - history.count',
      sortable: true,
      type: 'count',
      value_format: null,
      view: 'history',
      view_label: 'History',
      sorted: {
        sort_index: 0,
        desc: true,
        pivot_index: 0,
      },
      pivoted_label: 'History Count: Row Total',
    },
  ],
  dimensions: [
    {
      is_filter: false,
      is_numeric: false,
      label: 'Dashboard Title',
      label_short: 'Title',
      name: 'dashboard.title',
      sortable: true,
      type: 'string',
      value_format: null,
      view: 'dashboard',
      view_label: 'Dashboard',
      is_fiscal: false,
      is_timeframe: false,
    },
  ],
  pivots: [
    {
      is_numeric: false,
      label: 'History Completed Month',
      label_short: 'Completed Month',
      name: 'history.completed_month',
      sortable: true,
      type: 'date_month',
      value_format: null,
      view: 'history',
      view_label: 'History',
      is_fiscal: false,
      is_filter: false,
      is_timeframe: true,
      sorted: {
        sort_index: 1,
        desc: false,
      },
    },
  ],
}

export const mockPivotedFields: Fields = {
  measures: [
    {
      is_numeric: true,
      label: 'Orders Count',
      label_short: 'F',
      name: 'f - orders.count',
      sortable: true,
      type: 'count',
      value_format: null,
      view: 'orders',
      view_label: 'Orders',
      sorted: {
        sort_index: 0,
        desc: true,
        pivot_index: 0,
      },
      pivot_key: 'f',
      pivoted_label: 'Orders Count: F',
    },
    {
      is_numeric: true,
      label: 'Orders Count',
      label_short: 'M',
      name: 'm - orders.count',
      sortable: true,
      type: 'count',
      value_format: null,
      view: 'orders',
      view_label: 'Orders',
      sorted: {
        sort_index: 0,
        desc: true,
        pivot_index: 0,
      },
      pivot_key: 'm',
      pivoted_label: 'Orders Count: M',
    },
    {
      is_numeric: true,
      label: 'Orders Count',
      label_short: 'Male',
      name: 'male - orders.count',
      sortable: true,
      type: 'count',
      value_format: null,
      view: 'orders',
      view_label: 'Orders',
      sorted: {
        sort_index: 0,
        desc: true,
        pivot_index: 0,
      },
      pivot_key: 'male',
      pivoted_label: 'Orders Count: Male',
    },
  ],
  dimensions: [
    {
      is_numeric: false,
      label: 'Users City',
      label_short: 'City',
      name: 'users.city',
      sortable: true,
      type: 'string',
      value_format: null,
      view: 'users',
      view_label: 'Users',
      is_filter: false,
      is_fiscal: false,
      is_timeframe: false,
    },
  ],
  pivots: [
    {
      is_filter: false,
      is_numeric: false,
      label: 'Users Gender',
      label_short: 'Gender',
      name: 'users.gender',
      sortable: true,
      type: 'string',
      value_format: null,
      view: 'users',
      view_label: 'Users',
      is_fiscal: false,
      is_timeframe: false,
      sorted: {
        sort_index: 1,
        desc: false,
      },
    },
  ],
}
