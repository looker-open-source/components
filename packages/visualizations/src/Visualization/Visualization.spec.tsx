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
import { renderWithTheme } from '@looker/components-test-utils'
import { useTheme } from 'styled-components'
import { render, screen } from '@testing-library/react'
import {
  mockBarConfig,
  mockFields,
  mockData,
} from '@looker/visualizations-adapters'
import { Visualization, defaultChartTypeMap } from './Visualization'

const CustomVis = () => {
  const theme = useTheme()
  return (
    <>
      <p>Rendered Without Error!</p>
      <dl>
        <dt>Background Color:</dt>
        <dd>{theme.colors.background}</dd>
      </dl>
    </>
  )
}

jest.mock('@looker/visualizations-adapters', () => ({
  ...jest.requireActual('@looker/visualizations-adapters'),
  Unsupported: jest.fn().mockReturnValue(<CustomVis />),
}))

jest.mock('@looker/visualizations-table', () => ({
  ...jest.requireActual('@looker/visualizations-table'),
  Table: jest.fn().mockReturnValue(<CustomVis />),
}))

jest.mock('@looker/visualizations-visx', () => ({
  ...jest.requireActual('@looker/visualizations-visx'),
  Area: jest.fn().mockReturnValue(<CustomVis />),
  Bar: jest.fn().mockReturnValue(<CustomVis />),
  Column: jest.fn().mockReturnValue(<CustomVis />),
  Line: jest.fn().mockReturnValue(<CustomVis />),
  Pie: jest.fn().mockReturnValue(<CustomVis />),
  Sparkline: jest.fn().mockReturnValue(<CustomVis />),
  Scatter: jest.fn().mockReturnValue(<CustomVis />),
}))

jest.mock('@looker/visualizations-single-value', () => ({
  ...jest.requireActual('@looker/visualizations-single-value'),
  SingleValue: jest.fn().mockReturnValue(null),
}))

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Visualization', () => {
  it('wraps itself in ComponentsProvider if rendered outside of theme context', () => {
    // use default rtl `render` instead of `renderWithTheme`
    render(
      <Visualization
        data={mockData}
        fields={mockFields}
        config={mockBarConfig}
      />
    )

    expect(screen.getByText('Rendered Without Error!')).toBeInTheDocument()
  })
})

describe('Visualization renders chart component based on type', () => {
  type ChartRecord = typeof defaultChartTypeMap
  const visEntries = Object.entries(defaultChartTypeMap) as [
    keyof ChartRecord, // key union
    ChartRecord[keyof ChartRecord] // val union
  ][]

  test.each(visEntries)('render %i', (type, Component) => {
    renderWithTheme(
      <Visualization
        data={mockData}
        fields={mockFields}
        config={{ ...mockBarConfig, type }}
      />
    )
    expect(Component).toHaveBeenCalledTimes(1)
  })
})
