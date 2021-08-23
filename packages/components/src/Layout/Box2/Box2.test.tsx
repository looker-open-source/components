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
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { Box2 } from './Box2'

describe('Box2', () => {
  describe('as=', () => {
    test('render as any HTML tag', () => {
      renderWithTheme(<Box2 as="button">Press Me</Box2>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    test('any prop can be passed to Box', () => {
      renderWithTheme(<Box2 as="input" type="checkbox" />)
      expect(screen.getByRole('checkbox')).toBeInTheDocument()
    })
  })

  describe('core HTML attributes', () => {
    test('allows autoFocus', () => {
      renderWithTheme(
        <Box2 as="input" type="text" defaultValue="Autofocus" autoFocus />
      )
      expect(screen.getByDisplayValue('Autofocus')).toHaveFocus()
    })

    test('allows for HTML events', () => {
      const handleClick = jest.fn()
      renderWithTheme(<Box2 onClick={handleClick}>Click me</Box2>)
      fireEvent.click(screen.getByText('Click me'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    test('allows for ARIA attributes', () => {
      renderWithTheme(
        <Box2 aria-label="for screen readers only">aria-label</Box2>
      )
      expect(
        screen.getByLabelText('for screen readers only')
      ).toBeInTheDocument()
    })
  })

  describe('user select', () => {
    test('Box cannot be selected', () => {
      renderWithTheme(<Box2 userSelect="none">Can't touch this</Box2>)
      expect(screen.getByText("Can't touch this")).toHaveStyleRule(
        'user-select',
        'none'
      )
    })
  })
})
