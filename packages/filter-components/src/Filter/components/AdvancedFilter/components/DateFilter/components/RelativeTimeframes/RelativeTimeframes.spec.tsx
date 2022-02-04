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
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import React from 'react'
import { RelativeTimeframes } from './RelativeTimeframes'

const originalClientWidth = Object.getOwnPropertyDescriptor(
  HTMLElement.prototype,
  'clientWidth'
)

beforeEach(() => {
  Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
    configurable: true,
    value: 800,
  })
})

afterEach(() => {
  if (originalClientWidth) {
    Object.defineProperty(
      HTMLElement.prototype,
      'clientWidth',
      originalClientWidth
    )
  }
})

describe('RelativeTimeframes', () => {
  it('should render RelativeTimeframes with custom timeframe', async () => {
    renderWithTheme(
      <RelativeTimeframes
        value={{ from: new Date(2016, 2, 1), to: new Date(2016, 3, 1) }}
        onChange={jest.fn()}
      />
    )
    const trigger = screen.getByRole('button')
    fireEvent.click(trigger)
    expect(screen.getByDisplayValue('2016/04/01')).toBeInTheDocument()

    // close popover
    fireEvent.click(document)
  })

  it('should render RelativeTimeframes in a dialog on mobile', async () => {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
      configurable: true,
      value: 400,
    })

    renderWithTheme(
      <RelativeTimeframes
        value={{ from: new Date(2016, 2, 1), to: new Date(2016, 3, 1) }}
        onChange={jest.fn()}
      />
    )
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByText('Choose a Timeframe')).toBeInTheDocument()

    // Close the Dialog
    fireEvent.click(screen.getByText('Close'))
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Choose a Timeframe')
    )
  })
})
