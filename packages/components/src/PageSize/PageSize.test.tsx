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
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { PageSize } from './PageSize'

const onChange = jest.fn()

afterEach(() => {
  onChange.mockClear()
})

test('<PageSize/> with defaults', () => {
  renderWithTheme(<PageSize value={10} total={1000} onChange={onChange} />)

  const select = screen.getByDisplayValue('10')

  fireEvent.click(select)

  expect(screen.getByText('10')).toBeInTheDocument()
  expect(screen.getByText('25')).toBeInTheDocument()
  expect(screen.getByText('50')).toBeInTheDocument()
  expect(screen.getByText('100')).toBeInTheDocument()

  fireEvent.click(screen.getByText('50'))
  expect(onChange).toHaveBeenCalledTimes(1)
})

test('<PageSize/> with custom options prop', () => {
  renderWithTheme(
    <PageSize
      value={20}
      total={1000}
      options={[20, 40, 60]}
      onChange={onChange}
    />
  )

  const select = screen.getByDisplayValue('20')

  fireEvent.click(select)

  expect(screen.getByText('20')).toBeInTheDocument()
  expect(screen.getByText('40')).toBeInTheDocument()
  expect(screen.getByText('60')).toBeInTheDocument()

  fireEvent.click(screen.getByText('40'))
  expect(onChange).toHaveBeenCalledTimes(1)
})

test('<PageSize/> does not load when smallest option >= total', () => {
  renderWithTheme(
    <PageSize
      value={100}
      total={5}
      options={[100, 200, 300]}
      onChange={onChange}
    />
  )

  expect(screen.queryByText('Display')).not.toBeInTheDocument()
  expect(screen.queryByDisplayValue('100')).not.toBeInTheDocument()
  expect(screen.queryByText('of 5')).not.toBeInTheDocument()
})
