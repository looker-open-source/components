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
import { fireEvent, screen } from '@testing-library/react'
import { PageSize } from './PageSize'

const onChange = jest.fn()

afterEach(() => {
  onChange.mockClear()
})

describe('PageSize', () => {
  test('defaults', () => {
    renderWithTheme(<PageSize value={10} total={1000} onChange={onChange} />)

    const select = screen.getByDisplayValue('10')
    expect(screen.getByText('of 1000')).toBeInTheDocument()

    fireEvent.click(select)

    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('25')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()

    fireEvent.click(screen.getByText('50'))
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  test('custom options prop', () => {
    renderWithTheme(
      <PageSize
        value={20}
        total={1000}
        options={[20, 40, 60]}
        onChange={onChange}
      />
    )

    const select = screen.getByDisplayValue('20')
    expect(screen.getByText('of 1000')).toBeInTheDocument()

    fireEvent.click(select)

    expect(screen.getByText('20')).toBeInTheDocument()
    expect(screen.getByText('40')).toBeInTheDocument()
    expect(screen.getByText('60')).toBeInTheDocument()

    fireEvent.click(screen.getByText('40'))
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  test('does not load when smallest option >= total', () => {
    renderWithTheme(
      <PageSize
        value={100}
        total={5}
        options={[100, 200, 300]}
        onChange={jest.fn()}
      />
    )

    expect(screen.queryByText('Display')).not.toBeInTheDocument()
    expect(screen.queryByDisplayValue('100')).not.toBeInTheDocument()
    expect(screen.queryByText('of 5')).not.toBeInTheDocument()
  })

  test('alwaysVisible', () => {
    renderWithTheme(
      <PageSize
        value={100}
        total={5}
        options={[100, 200, 300]}
        onChange={jest.fn()}
        alwaysVisible
      />
    )

    const select = screen.getByDisplayValue('5')
    expect(select).toBeInTheDocument()
    expect(screen.getByText('of 5')).toBeInTheDocument()

    // This select should be auto-disabled since all options are greater than the total
    fireEvent.click(select)

    expect(screen.queryByText('100')).not.toBeInTheDocument()
    expect(screen.queryByText('200')).not.toBeInTheDocument()
    expect(screen.queryByText('300')).not.toBeInTheDocument()
  })
})
