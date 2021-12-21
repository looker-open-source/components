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

import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { Table } from './'
import { mockQueryContextValues } from '@looker/visualizations-adapters'

describe('Table', () => {
  it('renders Table', () => {
    renderWithTheme(
      <Table
        {...mockQueryContextValues}
        config={{
          ...mockQueryContextValues.config,
          series: {
            'orders.count': {
              cell_visualization: true,
            },
          },
          type: 'table',
        }}
      />
    )

    // verify that table headers are being populated from Fields metadata
    expect(screen.getAllByText('Orders')[0].tagName).toEqual('TH')
    // verify that table content is being populated from data
    expect(screen.getAllByText('California')[0].tagName).toEqual('TD')
    // TODO: restore these checks when Table is caught up with config changes
    // const cellVis = screen.getAllByTestId('cell-visualization')
    // expect(cellVis[0].getAttribute('width')).toMatchInlineSnapshot(`"0.75"`)
    // expect(cellVis[1].getAttribute('width')).toMatchInlineSnapshot(
    //   `"0.6110301263362488"`
    // )
  })
})
