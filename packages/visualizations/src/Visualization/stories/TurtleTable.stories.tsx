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
import type { Story } from '@storybook/react'
import { Sparkline } from '@looker/visualizations-visx'
import { Table } from '@looker/visualizations-table'
import { Visualization } from '../Visualization'
import type {
  Fields,
  TableProps,
  CTable,
  CommonCartesianProperties,
  SDKRecord,
  Pivots,
} from '@looker/visualizations-adapters'
import { mockPivotedQuery } from '@looker/visualizations-adapters'

export default {
  component: Visualization,
  title: 'Visualizations/Stories/TurtleTable',
}

type StoryTemplateProps = Omit<TableProps, 'config' | 'fields' | 'data'> & {
  config: Omit<CTable, 'type'>
}

export type TurtleProps = {
  width: number
  height: number
  margin?: { top: number; right: number; bottom: number; left: number }
  levels?: number
  fields: Fields
  data: SDKRecord[]
  config: CommonCartesianProperties
  pivots: Pivots
}

// we assign this value to a constant to ensure that fields and data
// objects remain in sync.
const NESTED_DATA_KEY = 'orderCount'
const ROW_HEIGHT = 75

const nestSparklines = (data: SDKRecord[]) => {
  return data.reduce<SDKRecord[]>((acc, d) => {
    // the first entry is the dimension (brand name), and the rest of the rows are the
    // quarterly sales information we want to pass to the Sparkline.
    const [parentDimension, ...measurePairs] = Object.entries(d)

    // `nonPivotedData` represents a single data row.
    // e.g. [{entry: 1, orderCount: 10}, {entry: 2, orderCount: 15}, ...etc]
    const nonPivotedData: SDKRecord[] = measurePairs.map(([_, value], i) => {
      return { entry: i, [NESTED_DATA_KEY]: value }
    })

    // now for each row in the table we render a Sparkline using the `nonPivotedData`
    // that we built above.
    // E.G. [{products.brand: 'adidas', orderCount: <Sparkline />}]
    return [
      ...acc,
      {
        [parentDimension[0]]: parentDimension[1],
        [NESTED_DATA_KEY]: () => (
          <Sparkline
            height={ROW_HEIGHT}
            data={nonPivotedData}
            fields={{
              measures: [{ name: NESTED_DATA_KEY }],
              dimensions: [],
            }}
          />
        ),
      },
    ]
  }, [])
}

const TurtleTableComponent = ({
  fields,
  data,
  config,
  pivots,
  height,
}: TurtleProps) => {
  const nestedData = nestSparklines(data)

  return (
    <Table
      height={height}
      fields={{
        measures: [{ name: NESTED_DATA_KEY, label: 'Orders Count By Quarter' }],
        dimensions: fields.dimensions,
        pivots: [],
      }}
      config={config}
      data={nestedData}
      pivots={pivots}
      defaultRowHeight={ROW_HEIGHT}
    />
  )
}

const Template: Story<StoryTemplateProps> = () => {
  return (
    <Visualization
      {...mockPivotedQuery}
      height={600}
      /* add custom vis type */
      chartTypeMap={{
        turtle_table: TurtleTableComponent,
      }}
      config={{ type: 'turtle_table' }}
    />
  )
}

export const TurtleTable = Template.bind({})
