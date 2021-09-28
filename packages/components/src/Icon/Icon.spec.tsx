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

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { theme } from '@looker/design-tokens'
import { Add, Delete } from 'styled-icons/material'
import { screen } from '@testing-library/react'
import { Icon } from './Icon'

describe('Icon', () => {
  test('Default', () => {
    renderWithTheme(<Icon icon={<Add />} />)
  })

  test('Styled system size', () => {
    renderWithTheme(
      <Icon data-testid="icon-wrapper" icon={<Add />} size="large" />
    )

    expect(screen.getByTestId('icon-wrapper')).toHaveStyle(
      `height: ${theme.sizes.large}`
    )
    expect(screen.getByTestId('icon-wrapper')).toHaveStyle(
      `width: ${theme.sizes.large}`
    )
  })

  test('Explicit size - integer as pixels', () => {
    renderWithTheme(
      <Icon data-testid="icon-wrapper" icon={<Add />} size={12} />
    )
    expect(screen.getByTestId('icon-wrapper')).toHaveStyle('width: 12px')
  })

  test('Explicit size - string', () => {
    renderWithTheme(
      <Icon data-testid="icon-wrapper" icon={<Add />} size="1rem" />
    )
    expect(screen.getByTestId('icon-wrapper')).toHaveStyle('width: 1rem')
  })

  test('DOM attribute support', () => {
    renderWithTheme(<Icon icon={<Add />} aria-label="Add" />)
    expect(screen.getByLabelText('Add')).toBeInTheDocument()
  })

  test(`No title by default`, () => {
    renderWithTheme(<Icon icon={<Delete />} />)
    expect(screen.queryByLabelText("Oscar's House")).not.toBeInTheDocument()
  })

  test(`Title is assigned properly to SVG art`, () => {
    renderWithTheme(<Icon icon={<Delete />} title="Oscar's House" />)
    expect(screen.getByTitle("Oscar's House")).toBeInTheDocument()
  })
})
