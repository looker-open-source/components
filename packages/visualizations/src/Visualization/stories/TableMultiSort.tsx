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
import React from 'react'
import { mockTableConfig } from '@looker/visualizations-adapters'
import { Visualization } from '../'

export default function TableMultiSort() {
  return (
    <Visualization
      config={{ ...mockTableConfig, series: [{ cell_visualization: true }] }}
      data={[
        {
          'order.year': '2012',
          'user.state': 'Oregon',
          'order.count': 200,
        },
        {
          'order.year': '2013',
          'user.state': 'Oregon',
          'order.count': 300,
        },
        {
          'order.year': '2014',
          'user.state': 'Oregon',
          'order.count': 150,
        },
        {
          'order.year': '2012',
          'user.state': 'California',
          'order.count': 400,
        },
        {
          'order.year': '2013',
          'user.state': 'California',
          'order.count': 250,
        },
        {
          'order.year': '2014',
          'user.state': 'California',
          'order.count': 600,
        },
        {
          'order.year': '2012',
          'user.state': 'Washington',
          'order.count': 99,
        },
        {
          'order.year': '2013',
          'user.state': 'Washington',
          'order.count': 500,
        },
        {
          'order.year': '2014',
          'user.state': 'Washington',
          'order.count': 250,
        },
      ]}
      fields={{
        measures: [
          {
            is_numeric: true,
            label: 'Order count',
            label_short: 'Orders',
            name: 'order.count',
            sortable: true,
            sorted: { desc: false, sort_index: 1 },
            type: 'count_distinct',
            view: 'order',
            view_label: 'Orders',
            value_format: null,
          },
        ],
        dimensions: [
          {
            is_filter: false,
            is_fiscal: false,
            is_numeric: false,
            is_timeframe: true,
            label: 'Order Year',
            label_short: 'Year',
            name: 'order.year',
            sortable: true,
            sorted: { desc: false, sort_index: 0 },
            type: 'string',
            view: 'order',
            view_label: 'Order',
            value_format: null,
          },
          {
            is_filter: false,
            is_fiscal: false,
            is_numeric: false,
            is_timeframe: true,
            label: 'User State',
            label_short: 'State',
            name: 'user.state',
            sortable: true,
            sorted: { desc: true, sort_index: 2 },
            type: 'string',
            view: 'user',
            view_label: 'User',
            value_format: null,
          },
        ],
        pivots: [],
      }}
    />
  )
}
