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
import { screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { LocationExact } from './LocationExact'

describe('LocationExact filter tests', () => {
  const item = {
    id: '1',
    type: 'anywhere',
    is: true,
    lat: 1,
    lon: 2,
  }

  it('should render a LocationExact', () => {
    renderWithTheme(<LocationExact item={item} onChange={jest.fn()} />)
    expect(screen.getByText('LATITUDE')).toBeVisible()
    expect(screen.getByText('LONGITUDE')).toBeVisible()
    expect(screen.getByDisplayValue('1')).toBeVisible()
    expect(screen.getByDisplayValue('2')).toBeVisible()
  })

  it('should call onChange with the correct lat when lat is changed', () => {
    const onChange = jest.fn()
    renderWithTheme(<LocationExact item={item} onChange={onChange} />)
    fireEvent.change(screen.getByDisplayValue('1'), { target: { value: '3' } })
    expect(onChange).toHaveBeenCalledWith('1', { lat: '3' })
  })

  it('should call onChange with the correct lon when lon is changed', () => {
    const onChange = jest.fn()
    renderWithTheme(<LocationExact item={item} onChange={onChange} />)
    fireEvent.change(screen.getByDisplayValue('2'), { target: { value: '4' } })
    expect(onChange).toHaveBeenCalledWith('1', { lon: '4' })
  })
})
