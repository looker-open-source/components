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

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Tooltip } from '../Tooltip'
import { Status } from './Status'

describe('Status', () => {
  test('default', () => {
    renderWithTheme(<Status data-testid="status" />)
    expect(screen.getByTestId('status')).toHaveStyle(
      'color: rgb(113, 118, 122)'
    )
  })

  test('critical Status', () => {
    renderWithTheme(<Status intent="critical" />)
    expect(screen.getByTitle('Error').parentElement).toHaveStyle(
      'color: rgb(204, 31, 54)'
    )
  })

  test('inform', () => {
    renderWithTheme(<Status intent="inform" />)
    expect(screen.getByTitle('Inform').parentElement).toHaveStyle(
      'color: rgb(0, 135, 225)'
    )
  })

  test('neutral', () => {
    renderWithTheme(<Status data-testid="neutral-icon" intent="neutral" />)
    expect(screen.getByTestId('neutral-icon')).toHaveStyle(
      'color: rgb(113, 118, 122)'
    )
  })

  test('positive', () => {
    renderWithTheme(<Status intent="positive" />)
    expect(screen.getByTitle('Success').parentElement).toHaveStyle(
      'color: rgb(36, 178, 95)'
    )
  })

  test('warn', () => {
    renderWithTheme(<Status intent="warn" />)
    expect(screen.getByTitle('Warning').parentElement).toHaveStyle(
      'color: rgb(255, 168, 0)'
    )
  })

  test('wrapping in tooltip disable intent title', async () => {
    renderWithTheme(
      <Tooltip content="Meh">
        <Status data-testid="status" title="Gone gone" />
      </Tooltip>
    )
    expect(screen.getByTestId('status')).toHaveAttribute('aria-describedby')
    expect(screen.queryByTitle('Gone gone')).not.toBeInTheDocument()
  })
})
