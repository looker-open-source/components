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
import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import type { FilterParamProps } from '../../../../../../types/filter_param_props'
import { YearMonth } from './YearMonth'

describe('YearMonth', () => {
  const onChangeMock = jest.fn()
  const mockProps = ({
    item: {
      id: '1',
      month: '1',
      year: '2017',
    },
    onChange: onChangeMock,
  } as unknown) as FilterParamProps

  beforeEach(() => {
    onChangeMock.mockReset()
  })

  it('should render the given year and month', () => {
    renderWithTheme(<YearMonth {...mockProps} />)
    expect(screen.getByText('January')).toBeVisible()
    expect(screen.getByDisplayValue('2017')).toBeVisible()
  })

  it('should invoke the onChange handler when the year changes', () => {
    renderWithTheme(<YearMonth {...mockProps} />)
    const input = screen.getByDisplayValue('2017')
    fireEvent.change(input, { target: { value: '2018' } })
    expect(onChangeMock).toHaveBeenCalledWith('1', { year: '2018' })
  })

  it('should invoke the onChange handler when the month changes', async () => {
    renderWithTheme(<YearMonth {...mockProps} />)
    const input = screen.getByDisplayValue('January')
    fireEvent.focus(input!)
    fireEvent.mouseDown(input!)
    const march = screen.getByText('March')
    fireEvent.click(march)
    expect(onChangeMock).toHaveBeenCalledWith('1', { month: '03' })
  })
})
