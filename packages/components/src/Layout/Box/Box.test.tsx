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
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'

import { Box } from './Box'

describe('Box', () => {
  describe('as=', () => {
    test('allows Box to render as any HTML tag', () => {
      renderWithTheme(<Box as="button">Press Me</Box>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    test('any prop can be passed to Box', () => {
      renderWithTheme(<Box as="input" type="checkbox" />)
      expect(screen.getByRole('checkbox')).toBeInTheDocument()
    })
  })

  describe('core HTML attributes', () => {
    test('Box allows autoFocus', () => {
      renderWithTheme(
        <Box as="input" type="text" defaultValue="Autofocus" autoFocus />
      )
      expect(screen.getByDisplayValue('Autofocus')).toHaveFocus()
    })

    test('Box allows for HTML events', () => {
      const handleClick = jest.fn()
      renderWithTheme(<Box onClick={handleClick}>Click me</Box>)
      fireEvent.click(screen.getByText('Click me'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    test('Box allows for ARIA attributes', () => {
      renderWithTheme(
        <Box aria-label="for screen readers only">aria-label</Box>
      )
      expect(
        screen.getByLabelText('for screen readers only')
      ).toBeInTheDocument()
    })
  })

  describe('user select', () => {
    test('Box cannot be selected', () => {
      renderWithTheme(<Box userSelect="none">Can't touch this</Box>)
      expect(screen.getByText("Can't touch this")).toHaveStyleRule(
        'user-select',
        'none'
      )
    })
  })
})
