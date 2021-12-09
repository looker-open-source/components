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

import { renderWithTheme } from '@looker/components-test-utils'
import { render, screen } from '@testing-library/react'
import type { FC } from 'react'
import React, { useContext } from 'react'
import {
  QueryContext,
  mockQueryResult,
  mockSdkConfigResponse,
} from '@looker/visualizations-adapters'
import type { QueryFormatterProps } from './QueryFormatter'
import { QueryFormatter } from './QueryFormatter'
import { ThemeContext } from 'styled-components'

afterEach(() => {
  jest.clearAllMocks()
})

/* eslint-disable @typescript-eslint/no-explicit-any */

describe('QueryFormatter component', () => {
  const QueryFormatterInContext: FC<QueryFormatterProps> = props => (
    <QueryContext.Provider
      value={{
        ...mockQueryResult,
        config: mockSdkConfigResponse,
      }}
    >
      <QueryFormatter {...props} />
    </QueryContext.Provider>
  )

  it('passes config object to child component', () => {
    const configLogger = jest.fn()
    const CustomVis: FC<any> = ({ config }) => {
      configLogger(config)
      return null
    }
    renderWithTheme(
      <QueryFormatterInContext>
        <CustomVis />
      </QueryFormatterInContext>
    )
    expect(configLogger.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          Object {
            "legend": Object {
              "position": "bottom",
            },
            "render_null_values": false,
            "series": Object {
              "orders.average_total_amount_of_order_usd": Object {
                "color": "#70BEFA",
                "label": "Average Order Price",
                "line_width": 3,
                "shape": "circle",
                "style": "outline",
                "value_format": "0",
                "visible": false,
              },
              "orders.count": Object {
                "color": "#FA8072",
                "label": "Total Orders",
                "line_width": 3,
                "shape": "diamond",
                "style": "outline",
                "value_format": "0",
                "visible": true,
              },
            },
            "tooltips": true,
            "type": "line",
            "x_axis": Array [
              Object {
                "gridlines": false,
                "label": "Orders Created Date",
                "reversed": false,
                "values": true,
              },
            ],
            "y_axis": Array [
              Object {
                "gridlines": true,
                "label": "Axis name (1)",
                "range": Array [
                  "auto",
                  "auto",
                ],
                "values": true,
              },
            ],
          },
        ],
      ]
    `)
  })

  it('passes tabular formatted data to child by default', () => {
    const dataLogger = jest.fn()
    const CustomVis: FC<any> = ({ data }) => {
      dataLogger(data)
      return null
    }
    renderWithTheme(
      <QueryFormatterInContext>
        <CustomVis />
      </QueryFormatterInContext>
    )
    expect(dataLogger.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          Array [
            Object {
              "orders.count": 3087,
              "users.count": 1088,
              "users.gender": "f",
              "users.state": "California",
            },
            Object {
              "orders.count": 2515,
              "users.count": 1069,
              "users.gender": "m",
              "users.state": "California",
            },
          ],
        ],
      ]
    `)
  })

  it('passes fields object to child component', () => {
    const fieldsLogger = jest.fn()
    const CustomVis: FC<any> = ({ fields }) => {
      fieldsLogger(fields)
      return null
    }
    renderWithTheme(
      <QueryFormatterInContext>
        <CustomVis />
      </QueryFormatterInContext>
    )
    expect(fieldsLogger.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          Object {
            "dimensions": Array [
              Object {
                "is_filter": false,
                "is_fiscal": false,
                "is_numeric": false,
                "is_timeframe": true,
                "label": "Orders Created Date",
                "label_short": "Created Date",
                "name": "orders.created_date",
                "sortable": true,
                "type": "date_date",
                "value_format": null,
                "view": "orders",
                "view_label": "Orders",
              },
            ],
            "measures": Array [
              Object {
                "is_numeric": true,
                "label": "Orders Count",
                "label_short": "Count",
                "name": "orders.count",
                "sortable": true,
                "value_format": null,
                "view": "orders",
                "view_label": "Orders",
              },
              Object {
                "is_numeric": true,
                "label": "Orders Average Total Amount of Order USD",
                "label_short": "Average Total Amount of Order USD",
                "name": "orders.average_total_amount_of_order_usd",
                "sortable": true,
                "value_format": "$#,##0.00",
                "view": "orders",
                "view_label": "Orders",
              },
            ],
          },
        ],
      ]
    `)
  })

  it('passes custom user provided props to child component', () => {
    const propsLogger = jest.fn()
    const CustomVis: FC<any> = ({ customProp, customerData }) => {
      propsLogger({ customProp, customerData })
      return null
    }
    renderWithTheme(
      <QueryFormatterInContext>
        <CustomVis customProp={true} customerData="12345" />
      </QueryFormatterInContext>
    )
    expect(propsLogger.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          Object {
            "customProp": true,
            "customerData": "12345",
          },
        ],
      ]
    `)
  })
  it('wraps itself in ComponentsProvider if rendered outside of theme context', () => {
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

    // use default rtl `render` instead of `renderWithTheme`
    render(
      <QueryFormatter>
        <CustomVis />
      </QueryFormatter>
    )

    expect(screen.getByText('Rendered Without Error!')).toBeInTheDocument()
  })
})
