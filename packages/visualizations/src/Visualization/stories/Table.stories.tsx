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

import type { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { Visualization } from '../Visualization'
import type {
  Fields,
  TableProps,
  CTable,
} from '@looker/visualizations-adapters'
import {
  buildChartConfig,
  buildPivotFields,
  mockSdkFieldsResponse,
  mockSdkPivotedFieldsResponse,
  mockPivots,
  tabularResponse,
  tabularPivotResponse,
  mockSdkPivotDataResponse,
  mockSdkDataResponse,
  mockSdkConfigResponse,
  mockTableConfig,
  mockTotals,
} from '@looker/visualizations-adapters'
import { VIEWPORT_MAP } from '@looker/components'

export default {
  component: Visualization,
  title: 'Visualizations/Table',
}

type StoryTemplateProps = Omit<TableProps, 'config' | 'fields' | 'data'> & {
  config: Omit<CTable, 'type'>
}

const Template: Story<StoryTemplateProps> = ({
  config: configProp,
  ...restProps
}) => {
  const data = tabularResponse([...mockSdkDataResponse])

  const config = buildChartConfig({
    config: {
      ...mockSdkConfigResponse,
      ...configProp,
      type: 'table',
    },
    data,
    fields: mockSdkFieldsResponse as Fields,
  })

  return (
    <Visualization
      config={config}
      data={data}
      fields={mockSdkFieldsResponse as Fields}
      height={600}
      {...restProps}
      totals={mockTotals}
    />
  )
}

export const Table = Template.bind({})
Table.args = { config: { show_row_numbers: true, show_totals: true } }

export const Pivot = () => {
  const mockPivotFields = buildPivotFields({
    fields: mockSdkPivotedFieldsResponse as Fields,
    pivots: mockPivots,
  })

  const mockPivotData = tabularPivotResponse({
    data: [...mockSdkPivotDataResponse],
    fields: mockSdkPivotedFieldsResponse as Fields,
    pivots: mockPivots,
  })

  const config = buildChartConfig({
    config: { ...mockSdkConfigResponse, type: 'table' },
    data: mockPivotData,
    fields: mockPivotFields,
  })

  return (
    <Visualization
      config={config}
      data={mockPivotData}
      fields={mockPivotFields}
      pivots={mockPivots}
      height={600}
    />
  )
}
const LongTextTemplate: Story<CTable> = ({
  truncate_text,
  truncate_header,
}) => {
  return (
    <Visualization
      config={{ ...mockTableConfig, truncate_text, truncate_header }}
      data={[
        {
          'author.name': 'Henry David Thoreau',
          'author.bio':
            'Henry David Thoreau was an American naturalist, essayist, poet, and philosopher. A leading transcendentalist, he is best known for his book Walden, a reflection upon simple living in natural surroundings, and his essay "Civil Disobedience", an argument for disobedience to an unjust state.',
          'author.books_published': 2,
        },
        {
          'author.name': 'Margaret Atwood',
          'author.bio':
            "Margaret Eleanor Atwood (born November 18, 1939) is a Canadian poet, novelist, literary critic, essayist, teacher, environmental activist, and inventor. Since 1961, she has published 18 books of poetry, 18 novels, 11 books of non-fiction, nine collections of short fiction, eight children's books, and two graphic novels, and a number of small press editions of both poetry and fiction. Atwood has won numerous awards and honors for her writing, including two Booker Prizes, the Arthur C. Clarke Award, the Governor General's Award, the Franz Kafka Prize, Princess of Asturias Awards, and the National Book Critics and PEN Center USA Lifetime Achievement Awards",
          'author.books_published': 47,
        },
      ]}
      fields={{
        measures: [
          {
            is_numeric: true,
            label: 'Books Published',
            label_short: 'Books Published',
            name: 'author.books_published',
            sortable: true,
            sorted: { desc: true, sort_index: 0 },
            type: 'count_distinct',
            view: 'author',
            view_label: 'Author',
            value_format: null,
          },
        ],
        dimensions: [
          {
            is_filter: false,
            is_fiscal: false,
            is_numeric: false,
            is_timeframe: true,
            label: 'Author Name',
            label_short: 'Author Name',
            name: 'author.name',
            sortable: true,
            type: 'string',
            view: 'author',
            view_label: 'Author',
            value_format: null,
          },
          {
            is_filter: false,
            is_fiscal: false,
            is_numeric: false,
            is_timeframe: true,
            label: 'Author Biography',
            label_short: 'Author Biography',
            name: 'author.bio',
            sortable: true,
            type: 'string',
            view: 'author',
            view_label: 'Author',
            value_format: null,
          },
        ],
        pivots: [],
      }}
    />
  )
}

export const TruncatedText = LongTextTemplate.bind({})

TruncatedText.args = { truncate_text: true, truncate_header: true }

TruncatedText.parameters = {
  viewport: {
    defaultViewport: 'mobile',
    viewports: VIEWPORT_MAP,
  },
}

export const WrappedText = LongTextTemplate.bind({})

WrappedText.args = { truncate_text: false, truncate_header: false }

WrappedText.parameters = {
  viewport: {
    defaultViewport: 'mobile',
    viewports: VIEWPORT_MAP,
  },
}

export const MultiSort: Story<CTable> = () => {
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
