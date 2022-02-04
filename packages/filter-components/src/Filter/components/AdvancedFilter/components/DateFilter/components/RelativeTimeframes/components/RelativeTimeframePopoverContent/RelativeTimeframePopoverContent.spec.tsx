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
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import React from 'react'
import { RelativeTimeframePopoverContent } from './RelativeTimeframePopoverContent'

describe('RelativeTimeframePopoverContent', () => {
  const realDateNow = Date.now.bind(global.Date)

  beforeEach(() => {
    global.Date.now = jest.fn(() => 1479427200000)
  })

  afterEach(() => {
    global.Date.now = realDateNow
  })

  it('renders a RelativeTimeframePopoverContent with custom timeframe', () => {
    renderWithTheme(
      <RelativeTimeframePopoverContent
        value={{ from: new Date(2018, 1, 1), to: new Date(2018, 12, 31) }}
        onCustomChange={jest.fn()}
        onPresetChange={jest.fn()}
        onNav={jest.fn()}
      />
    )
    const inputs = screen.getAllByRole('textbox')
    expect(inputs[0]).toHaveValue('2018/02/01')
    expect(inputs[1]).toHaveValue('2019/01/31')
  })
})
