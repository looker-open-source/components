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
import { Pagination } from './Pagination'

describe('Pagination', () => {
  test('No pagination when there are 1 or less pages', () => {
    renderWithTheme(
      <>
        <Pagination current={5} pages={1} onChange={jest.fn()} />
        <Pagination current={5} pages={0} onChange={jest.fn()} />
      </>
    )
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  test('alwaysVisible', () => {
    renderWithTheme(
      <Pagination current={5} pages={1} onChange={jest.fn()} alwaysVisible />
    )
    expect(screen.getAllByRole('button').length).toEqual(4)
  })

  test('All pagination buttons enabled when current > 1 and current < pages', () => {
    const onPageChange = jest.fn()

    renderWithTheme(
      <Pagination current={5} pages={10} onChange={onPageChange} />
    )
    fireEvent.click(screen.getByText('First page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByText('Previous page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(2)

    fireEvent.click(screen.getByText('Next page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(3)

    fireEvent.click(screen.getByText('Last page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(4)
  })

  test('First page and previous page buttons are disabled when current === 1', () => {
    const onPageChange = jest.fn()
    renderWithTheme(
      <Pagination current={1} pages={10} onChange={onPageChange} />
    )
    fireEvent.click(screen.getByText('First page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByText('Previous page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByText('Next page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByText('Last page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(2)
  })

  test('First page and previous page buttons are enabled when current === 2', () => {
    const onPageChange = jest.fn()

    renderWithTheme(
      <Pagination current={2} pages={10} onChange={onPageChange} />
    )
    fireEvent.click(screen.getByText('First page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByText('Previous page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(2)

    fireEvent.click(screen.getByText('Next page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(3)

    fireEvent.click(screen.getByText('Last page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(4)
  })

  test('Last page and next page buttons are enabled when current === (pages - 1)', () => {
    const onPageChange = jest.fn()

    renderWithTheme(
      <Pagination current={9} pages={10} onChange={onPageChange} />
    )
    fireEvent.click(screen.getByText('First page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByText('Previous page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(2)

    fireEvent.click(screen.getByText('Next page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(3)

    fireEvent.click(screen.getByText('Last page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(4)
  })

  test('Last page and next page buttons are disabled when current === pages', () => {
    const onPageChange = jest.fn()

    renderWithTheme(
      <Pagination current={10} pages={10} onChange={onPageChange} />
    )
    fireEvent.click(screen.getByText('First page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByText('Previous page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(2)

    fireEvent.click(screen.getByText('Next page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(2)

    fireEvent.click(screen.getByText('Last page of results'))
    expect(onPageChange).toHaveBeenCalledTimes(2)
  })
})
