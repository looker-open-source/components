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
import { mockFields, mockData } from '@looker/visualizations-adapters'
import { screen } from '@testing-library/react'
import { SingleValue } from './SingleValue'

describe('SingleValue', () => {
  it('renders a single value', () => {
    renderWithTheme(
      <SingleValue
        config={{
          series: [
            { color: '#f13136', label: 'orders', value_format: '0,0.[00]' },
          ],
          type: 'single_value',
        }}
        data={mockData}
        fields={mockFields}
      />
    )
    expect(screen.getByText('87')).toBeVisible()
    expect(screen.getByText('orders')).toBeVisible()
  })
})
