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
import React from 'react'
import { fireEvent, screen, act } from '@testing-library/react'
import { Button } from './Button'

beforeEach(() => {
  jest.useFakeTimers()
})
afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})
const runTimers = () =>
  act(() => {
    jest.runOnlyPendingTimers()
  })

describe('Button', () => {
  test('accepts a className prop', () => {
    const { container } = renderWithTheme(
      <Button className="foo">button with class</Button>
    )
    expect(container.firstChild).toHaveClass('foo')
  })

  test('size', () => {
    renderWithTheme(
      <>
        <Button size="xxsmall">Xsmall Button</Button>
        <Button size="large">Large Button</Button>
      </>
    )

    expect(screen.getByText('Xsmall Button')).toBeInTheDocument()
    expect(screen.getByText('Large Button')).toBeInTheDocument()
  })

  describe('ripple effect', () => {
    test('default', () => {
      renderWithTheme(<Button>Test</Button>)

      const button = screen.getByRole('button')
      expect(button).not.toHaveClass('bg-on fg-in')
      expect(button).toHaveStyle({
        '--ripple-color': '#FFFFFF',
        '--ripple-scale-end': '1',
        '--ripple-scale-start': '0.1',
        '--ripple-size': '100%',
        '--ripple-translate': '0, 0',
      })

      fireEvent.focus(button)
      expect(button).toHaveClass('bg-on')

      fireEvent.mouseDown(button)
      expect(button).toHaveClass('bg-on fg-in')

      // foreground is locked for a minimum time to animate the ripple
      fireEvent.mouseUp(button)
      runTimers()
      expect(button).toHaveClass('bg-on fg-out')
      runTimers()
      expect(button).toHaveClass('bg-on')

      fireEvent.blur(button)
      expect(button).not.toHaveClass('bg-on fg-in')
    })

    test('Color critical', () => {
      renderWithTheme(<Button color="critical">Test</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ '--ripple-color': '#FFFFFF' })
    })
  })
})
