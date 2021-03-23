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

import { renderWithTheme } from '@looker/components-test-utils'
import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  test('accepts a className prop', () => {
    const { container } = renderWithTheme(
      <Button className="foo">button with class</Button>
    )
    expect(container.firstChild).toHaveClass('foo')
  })

  test('focus-visible: renders outline when tabbing into focus, but not when clicking', () => {
    const { getByText } = renderWithTheme(
      <>
        <Button>button</Button>
        <Button>focus</Button>
      </>
    )

    fireEvent.click(getByText('button'))
    // eslint-disable-next-line jest-dom/prefer-to-have-style
    expect(screen.getByText('button').style.boxShadow).toEqual('')

    fireEvent.keyUp(getByText('focus'), { charCode: 9, code: 9, key: 'Tab' })
    expect(screen.getByText('focus')).toHaveStyle(
      'box-shadow: 0 0 0 0.15rem rgba(108,67,224,0.25);'
    )
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
})
