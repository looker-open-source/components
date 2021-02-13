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

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  test('A default spinner', () => {
    renderWithTheme(<Spinner />)
    expect(screen.getByTestId('loading-spinner'))
  })

  test('can have n number of markers', () => {
    renderWithTheme(<Spinner markers={20} />)
    const spinner = screen.getByTestId('loading-spinner')
    const markers = spinner.querySelectorAll('div div')
    expect(markers.length).toEqual(20)
  })

  test('markers radius can be adjusted', () => {
    renderWithTheme(<Spinner markerRadius={30} />)
    const spinner = screen.getByTestId('loading-spinner')
    const marker = spinner.querySelector('div div')
    expect(marker).toHaveStyle('border-radius: 30px')
  })

  test('speed can be set', () => {
    renderWithTheme(<Spinner speed={2000} />)
    const spinner = screen.getByTestId('loading-spinner')
    const marker = spinner.querySelector('div div')
    expect(marker).toHaveAttribute('speed', '2000')
  })

  test('can change marker color', () => {
    renderWithTheme(<Spinner color="red" />)
    const spinner = screen.getByTestId('loading-spinner')
    const marker = spinner.querySelector('div div')
    expect(marker).toHaveStyle('background-color: red')
  })

  test('can be resized', () => {
    renderWithTheme(<Spinner size={200} />)
    expect(screen.getByTestId('loading-spinner')).toHaveStyle('width: 200px')
  })
})
