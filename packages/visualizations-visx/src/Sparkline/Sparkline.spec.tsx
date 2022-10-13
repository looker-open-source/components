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
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import {
  mockFields,
  mockData,
  mockDataWithNull,
} from '@looker/visualizations-adapters'
import { Sparkline } from './Sparkline'

describe('Sparkline Chart', () => {
  it('renders an svg based derived from two dimensional response', () => {
    renderWithTheme(
      <Sparkline
        config={{ type: 'sparkline' }}
        data={mockData}
        fields={mockFields}
      />
    )
    expect(screen.getByTestId('sparkline-chart')).toMatchInlineSnapshot(`
      <svg
        data-testid="sparkline-chart"
        height="500"
      >
        <path
          class="visx-linepath"
          d="M1.5,498.5L0,1.5L-1.5,96.26133333333331"
          fill="transparent"
          stroke="#6C43E0"
          stroke-linecap="round"
          stroke-width="3"
        />
      </svg>
    `)
  })
  it('accepts line width overrides', () => {
    renderWithTheme(
      <Sparkline
        config={{ series: [{ line_width: 5 }], type: 'sparkline' }}
        data={mockData}
        fields={mockFields}
      />
    )
    const linePath = screen.getByTestId('sparkline-chart').firstChild

    expect(linePath).toHaveAttribute('stroke-width', '5')
  })
  it('renders multiple svg paths when encountering a null data point', () => {
    renderWithTheme(
      <Sparkline
        config={{ type: 'sparkline' }}
        data={mockDataWithNull}
        fields={mockFields}
      />
    )

    expect(screen.getByTestId('sparkline-chart')).toMatchInlineSnapshot(`
      <svg
        data-testid="sparkline-chart"
        height="500"
      >
        <path
          class="visx-linepath"
          d="M1.5,1.5L0.75,498.5"
          fill="transparent"
          stroke="#6C43E0"
          stroke-linecap="round"
          stroke-width="3"
        />
        <path
          class="visx-linepath"
          d="M-0.75,1.5L-1.5,285.784"
          fill="transparent"
          stroke="#6C43E0"
          stroke-linecap="round"
          stroke-width="3"
        />
      </svg>
    `)
  })
})
