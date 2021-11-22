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

import React, { useContext } from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { ThemeContext } from 'styled-components'
import { render, screen } from '@testing-library/react'
import type {
  CArea,
  CLine,
  CPie,
  CCartesian,
  CAll,
  CSparkline,
  CScatter,
  RawApiConfigResponse,
  SupportedChartTypes,
} from '@looker/visualizations-adapters'
import {
  mockSdkConfigResponse,
  supportedChartTypes,
  QueryContext,
  mockQueryResult,
} from '@looker/visualizations-adapters'
import { Sparkline } from '@looker/visualizations-visx'
import { Visualization, defaultChartComponent } from './Visualization'

const CustomVis = () => {
  const theme = useContext(ThemeContext)
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

describe.skip('Visualization', () => {
  it('wraps itself in ComponentsProvider if rendered outside of theme context', () => {
    // use default rtl `render` instead of `renderWithTheme`
    render(
      <QueryContext.Provider value={mockQueryResult}>
        <Visualization />
      </QueryContext.Provider>
    )

    expect(screen.getByText('Rendered Without Error!')).toBeInTheDocument()
  })
  it('accepts config overrides and merges them with QueryContext values', () => {
    render(
      <QueryContext.Provider value={mockQueryResult}>
        <Visualization config={{ type: 'sparkline' }} />
      </QueryContext.Provider>
    )

    expect(Sparkline).toHaveBeenCalledTimes(1)
  })
})

/**
 * A test helper function which takes the return value from `viewChartByType`
 * and passes mock data through to validate how it is transformed.
 *
 * Returns config value from mocked component call.
 */

function buildConfigProp<T extends CAll>(
  configOverrides: Partial<T> & Partial<Omit<RawApiConfigResponse, 'type'>>
) {
  renderWithTheme(
    <QueryContext.Provider
      value={{
        ...mockQueryResult,
        config: { ...mockSdkConfigResponse, ...configOverrides },
      }}
    >
      <Visualization />
    </QueryContext.Provider>
  )

  const Component =
    defaultChartComponent[configOverrides.type as keyof SupportedChartTypes]
  return (Component as jest.Mock).mock.calls[0][0].config
}

type LineTestTuple = [
  string,
  Record<'type', keyof Pick<SupportedChartTypes, 'area' | 'line' | 'scatter'>>
]

type BarTestTuple = [
  string,
  Record<'type', keyof Pick<SupportedChartTypes, 'bar' | 'column'>>
]

type PieTestTuple = [string, Record<'type', SupportedChartTypes['pie']>]

type SingleValueTestTuple = [
  string,
  Record<'type', SupportedChartTypes['single_value']>
]

type SparklineTestTuple = [
  string,
  Record<'type', SupportedChartTypes['sparkline']>
]

type TableTestTuple = [string, Record<'type', SupportedChartTypes['table']>]

const lineTestConditions: LineTestTuple[] = [
  [
    '(Area Chart)',
    {
      type: 'area',
    },
  ],
  [
    '(Line Chart)',
    {
      type: 'line',
    },
  ],
  [
    '(Scatterplot Chart)',
    {
      type: 'scatter',
    },
  ],
]

const barTestConditions: BarTestTuple[] = [
  [
    '(Bar Chart)',
    {
      type: 'bar',
    },
  ],
  [
    '(Column Chart)',
    {
      type: 'column',
    },
  ],
]

const pieTestConditions: PieTestTuple[] = [
  [
    '(Pie Chart)',
    {
      type: 'pie',
    },
  ],
]

const sparklineTestConditions: SparklineTestTuple[] = [
  ['(Sparkline Chart)', { type: 'sparkline' }],
]

const tableTestConditions: TableTestTuple[] = [
  ['(Table Chart)', { type: 'table' }],
]

const singleValueTestConditions: SingleValueTestTuple[] = [
  ['(Single Value Chart)', { type: 'single_value' }],
]

describe('Derives default values from SDK response', () => {
  test.each([
    ...lineTestConditions,
    ...barTestConditions,
    ...pieTestConditions,
    ...singleValueTestConditions,
    ...sparklineTestConditions,
    ...tableTestConditions,
  ])('%s', (_, { type }) => {
    const config = buildConfigProp({ type })
    expect(config).toMatchSnapshot()
  })
})

describe('Disables legend when hide_legend SDK response is true', () => {
  test.each([
    ...lineTestConditions,
    ...barTestConditions,
    ...pieTestConditions,
  ])('%s', (_, { type }) => {
    const config = buildConfigProp<CCartesian | CPie>({
      hide_legend: true,
      type,
    })
    expect(config.legend).toEqual(false)
  })
})

describe('Accepts tooltip overrides', () => {
  test.each([
    ...lineTestConditions,
    ...barTestConditions,
    ...pieTestConditions,
  ])('%s', (_, { type }) => {
    const config = buildConfigProp<CCartesian | CPie>({ tooltips: false, type })
    expect(config.tooltips).toEqual(false)
  })
})

describe('Accepts render_null_value override', () => {
  test.each([...lineTestConditions, ...sparklineTestConditions])(
    '%s',
    (_, { type }) => {
      const config = buildConfigProp<CLine | CScatter | CSparkline | CArea>({
        render_null_values: false,
        type,
      })
      expect(config.render_null_values).toEqual(false)
    }
  )
})

describe('Accepts array series override', () => {
  test.each([
    ...lineTestConditions,
    ...barTestConditions,
    ...sparklineTestConditions,
  ])('%s', (_, { type }) => {
    const config = buildConfigProp<CCartesian>({
      series: [
        {
          color: '#ffffff',
        },
      ],
      type,
    } as CLine)
    expect(config.series[0]).toMatchSnapshot()
  })
})

describe('Accepts named series override', () => {
  test.each([
    ...lineTestConditions,
    ...barTestConditions,
    ...sparklineTestConditions,
  ])('%s', (_, { type }) => {
    const config = buildConfigProp<CCartesian>({
      series: {
        'orders.count': {
          color: '#000000',
          label: 'TEST LABEL!',
          visible: false,
        },
      },
      type,
    } as CLine)
    expect(config.series['orders.count']).toMatchSnapshot()
  })
})

describe('Accepts Line Width overrides', () => {
  test.each([
    [
      '(Area Chart)',
      {
        type: supportedChartTypes.area,
      },
    ],
    [
      '(Line Chart)',
      {
        type: supportedChartTypes.line,
      },
    ],
    ...sparklineTestConditions,
  ] as LineTestTuple[] | SparklineTestTuple[])('%s', (_, { type }) => {
    const config = buildConfigProp<CLine | CArea | CSparkline>({
      series: {
        'orders.count': {
          line_width: 100,
        },
      },
      type,
    })
    expect(config.series['orders.count'].line_width).toEqual(100)
  })
})

describe('Accepts y-axis override', () => {
  test.each([
    ...lineTestConditions,
    ...barTestConditions,
    ...sparklineTestConditions,
  ])('%s', (_, { type }) => {
    const config = buildConfigProp<CCartesian>({
      type,
      y_axis: [{ range: [-200, 10000] }],
    } as CLine)
    expect(config.y_axis).toMatchSnapshot()
  })
})

describe('Bar and Column', () => {
  describe('accepts positioning override', () => {
    test.each(barTestConditions)('%s', (_, { type }) => {
      const config = buildConfigProp({ positioning: 'stacked', type })
      expect(config.positioning).toEqual('stacked')
    })
  })
})

describe('Pie', () => {
  it('Accepts legend position overrides', () => {
    const config = buildConfigProp({
      legend: { value: 'label_percent' },
      type: 'pie',
    })

    expect(config.legend).toMatchInlineSnapshot(`
      Object {
        "position": "bottom",
        "type": "legend",
        "value": "label_percent",
      }
    `)
  })
})

describe('Scatterplot chart config', () => {
  it('Accepts series size_by overrides', () => {
    const config = buildConfigProp({
      series: [{ size_by: 'orders.count' }],
      type: 'scatter',
    })

    expect(config.series[0].size_by).toEqual('orders.count')
  })
})

describe('Table chart config', () => {
  it('accepts truncate_text overrides', () => {
    const config = buildConfigProp({ truncate_text: false, type: 'table' })

    expect(config.truncate_text).toEqual(false)
  })
  it('accepts series cell visualization overrides', () => {
    const config = buildConfigProp({
      series: {
        'orders.count': { cell_visualization: false, label: 'Table Label' },
      },
      type: 'table',
    })

    expect(config.series).toMatchSnapshot()
  })
})
