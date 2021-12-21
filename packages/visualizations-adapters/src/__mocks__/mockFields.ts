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

import type { Fields } from '../types'

export const mockFields: Fields = {
  measures: [
    {
      is_numeric: true,
      label: 'Orders Count',
      label_short: 'Count',
      name: 'orders.count',
      sortable: true,
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
}
