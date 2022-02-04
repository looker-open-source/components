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

import {
  AutoGraph,
  BarChart,
  BubbleChart,
  DonutLarge,
  FilterList,
  LineStyle,
  Looks6,
  Map,
  MultilineChart,
  PieChart,
  ShowChart,
  TableChart,
  Toc,
  WaterfallChart,
} from '@styled-icons/material'

import React from 'react'

export const options = [
  { label: 'Apples', value: '1' },
  { label: 'Bananas', value: '2' },
  { label: 'Oranges', value: '3' },
  { label: 'Pineapples', value: '4' },
  { label: 'Kiwis', value: '5' },
]
export const options2 = [
  { label: 'Apples2', value: '12' },
  { label: 'Bananas2', value: '22' },
  { label: 'Oranges2', value: '32' },
  { label: 'Pineapples2', value: '42' },
  { label: 'Kiwis2', value: '52' },
]
export const options3 = [
  { label: 'Apples3', value: '13' },
  { label: 'Bananas3', value: '23' },
  { label: 'Oranges3', value: '33' },
  { label: 'Pineapples3', value: '43' },
  { label: 'Kiwis3', value: '53' },
]
export const options4 = [
  { label: 'Apples4', value: '14' },
  { label: 'Bananas4', value: '24' },
  { label: 'Oranges4', value: '34' },
  { label: 'Pineapples4', value: '44' },
  { label: 'Kiwis4', value: '54' },
]
export const options5 = [
  { label: 'Apples5', value: '15' },
  { label: 'Bananas5', value: '25' },
  { label: 'Oranges5', value: '35' },
  { label: 'Pineapples5', value: '45' },
  { label: 'Kiwis5', value: '55' },
]

export const optionGroup = {
  label: 'CARS',
  options: [
    { description: 'Great resale value', label: 'Honda', value: 'honda' },
    { description: 'Most popular make', label: 'Toyota', value: 'toyota' },
  ],
}

export const optionsWithGroups = [
  { options },
  optionGroup,
  { options: options2 },
  { options: options3 },
  { options: options4 },
  { options: options5 },
]

export const cheeseOptions = [
  { label: 'Cheddar', value: 'cheddar' },
  { label: 'Gouda', value: 'gouda' },
  { label: 'Swiss', value: 'swiss' },
]

export const iconOptions = [
  { icon: <AutoGraph />, label: 'Area', value: 'area' },
  { label: 'ChartNoIcon', value: 'noicon' },
  { icon: <AutoGraph />, label: 'Bar', value: 'bar' },
  { icon: <AutoGraph />, label: 'Box Plot', value: 'boxplot' },
  { icon: <BarChart />, label: 'Column', value: 'column' },
  { icon: <MultilineChart />, label: 'Custom', value: 'custom' },
  { icon: <DonutLarge />, label: 'Donut', value: 'donut' },
  { icon: <FilterList />, label: 'Funnel', value: 'funnel' },
  { icon: <ShowChart />, label: 'Line', value: 'line' },
  { icon: <Map />, label: 'Map', value: 'map' },
  { icon: <PieChart />, label: 'Pie', value: 'pie' },
  { icon: <BubbleChart />, label: 'Scatter Plot', value: 'scatterplot' },
  { icon: <Toc />, label: 'Single Record', value: 'singlerecord' },
  { icon: <Looks6 />, label: 'Single Value', value: 'singlevalue' },
  { icon: <TableChart />, label: 'Table', value: 'table' },
  { icon: <AutoGraph />, label: 'Timeline', value: 'timeline' },
  { icon: <WaterfallChart />, label: 'Waterfall', value: 'waterfall' },
  { icon: <LineStyle />, label: 'Word Cloud', value: 'wordcloud' },
]
