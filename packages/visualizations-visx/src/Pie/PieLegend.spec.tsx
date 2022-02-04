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
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { PieLegend } from './PieLegend'
import { scaleOrdinal } from '@visx/scale'

const globalGetBoundingClientRect = Element.prototype.getBoundingClientRect

beforeEach(() => {
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  Element.prototype.getBoundingClientRect = jest.fn(() => {
    return {
      bottom: 0,
      height: 300,
      left: 0,
      right: 0,
      toJSON: jest.fn(),
      top: 0,
      width: 0,
      x: 0,
      y: 0,
    }
  })
})

afterEach(() => {
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  Element.prototype.getBoundingClientRect = globalGetBoundingClientRect
})

describe('PieLegend', () => {
  const mockData = {
    'New York': 32,
    'Los Angeles': 20,
    Chicago: 17,
    Houston: 15,
    Philadelphia: 8,
    'San Diego': 4,
    'San Antonio': 4,
  }

  const mockScale = scaleOrdinal<string, string>({
    domain: Object.keys(mockData),
    range: Object.values(mockData).map(() => '#fa8072'),
  })

  it('paginates legend when height is smaller than content', () => {
    renderWithTheme(
      <PieLegend
        legendConfig={{
          type: 'legend',
          position: 'right',
          value: 'label_percent',
        }}
        scale={mockScale}
        data={mockData}
        measureTotal={100}
        width={150}
        height={150}
      />
    )

    // load "page 1"
    expect(screen.getByText('New York – 32.00%')).toBeInTheDocument()
    expect(screen.getByLabelText('Legend page 1 of 3')).toBeInTheDocument()
    expect(screen.getByText('Previous page').closest('button')).toBeDisabled()

    // scroll to  "page 2"
    fireEvent.click(screen.getByText('Next page'))
    expect(screen.getByLabelText('Legend page 2 of 3')).toBeInTheDocument()

    // scroll to  "page 3"
    fireEvent.click(screen.getByText('Next page'))
    expect(screen.getByLabelText('Legend page 3 of 3')).toBeInTheDocument()
    expect(screen.getByText('Next page').closest('button')).toBeDisabled()
  })
})
