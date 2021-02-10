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
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { ProgressCircular } from './ProgressCircular'

describe('ProgressCircular', () => {
  test('renders default behavior', () => {
    renderWithTheme(<ProgressCircular />)
    expect(screen.queryByRole('progressbar')).toBeInTheDocument()
  })

  test('renders progress of 25', () => {
    renderWithTheme(<ProgressCircular progress={25} />)
    expect(screen.queryByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '25'
    )
  })

  test('renders progress of 0', () => {
    renderWithTheme(<ProgressCircular progress={0} />)
    expect(screen.queryByRole('progressbar')).toHaveAttribute(
      'aria-valuemin',
      '0'
    )
    expect(screen.queryByRole('progressbar')).not.toHaveAttribute(
      'aria-valuenow'
    )
  })

  test('renders progress of 50', () => {
    renderWithTheme(<ProgressCircular progress={50} />)
    expect(screen.queryByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '50'
    )
  })

  test('renders progress of 75', () => {
    renderWithTheme(<ProgressCircular progress={75} />)
    expect(screen.queryByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '75'
    )
  })

  test('renders progress of 100', () => {
    renderWithTheme(<ProgressCircular progress={100} />)
    expect(screen.queryByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '100'
    )
  })

  test('renders different sizes', () => {
    renderWithTheme(<ProgressCircular size="xsmall" />)
    expect(screen.queryByRole('progressbar')).toBeInTheDocument()
  })
})
