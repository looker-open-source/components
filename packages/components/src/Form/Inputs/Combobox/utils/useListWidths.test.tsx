/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import { screen, render } from '@testing-library/react'
import { useListWidths, UseListWidthProps } from './useListWidths'

const getBoundingClientRectMock = jest.fn()

const mockWrapper = ({
  getBoundingClientRect: getBoundingClientRectMock,
} as unknown) as HTMLElement

function TestComponent(props: UseListWidthProps) {
  const { minWidth, width } = useListWidths({
    ...props,
    wrapperElement: mockWrapper,
  })
  return (
    <div>
      <span data-testid="minWidth">{minWidth}</span>
      <span data-testid="width">{width}</span>
    </div>
  )
}

describe('useListWidths', () => {
  beforeEach(() => {
    getBoundingClientRectMock.mockImplementation(() => ({ width: 1234 }))
  })
  afterEach(() => {
    getBoundingClientRectMock.mockClear()
  })

  test('getBoundingClientRect is not called when list is closed', () => {
    render(<TestComponent />)
    expect(screen.getByTestId('width')).toHaveTextContent('auto')
    expect(screen.getByTestId('minWidth')).toHaveTextContent('')
    expect(mockWrapper.getBoundingClientRect).not.toHaveBeenCalled()
  })

  test('getBoundingClientRect is not called when width prop is defined (except auto)', () => {
    render(<TestComponent isVisible width="90vw" />)
    expect(screen.getByTestId('width')).toHaveTextContent('90vw')
    expect(screen.getByTestId('minWidth')).toHaveTextContent('')
    expect(mockWrapper.getBoundingClientRect).not.toHaveBeenCalled()
  })

  test('getBoundingClientRect is not called when width prop is auto and minWidth is defined', () => {
    render(<TestComponent isVisible width="auto" minWidth={101} />)
    expect(screen.getByTestId('width')).toHaveTextContent('auto')
    expect(screen.getByTestId('minWidth')).toHaveTextContent('101')
    expect(mockWrapper.getBoundingClientRect).not.toHaveBeenCalled()
  })

  test('getBoundingClientRect is called when width prop is undefined', () => {
    render(<TestComponent isVisible />)
    expect(screen.getByTestId('width')).toHaveTextContent('1234')
    expect(screen.getByTestId('minWidth')).toHaveTextContent('')
    expect(mockWrapper.getBoundingClientRect).toHaveBeenCalledTimes(1)
  })

  test('getBoundingClientRect is called when width prop is auto', () => {
    render(<TestComponent isVisible width="auto" />)
    expect(screen.getByTestId('width')).toHaveTextContent('auto')
    expect(screen.getByTestId('minWidth')).toHaveTextContent('1234')
    expect(mockWrapper.getBoundingClientRect).toHaveBeenCalledTimes(1)
  })
})
