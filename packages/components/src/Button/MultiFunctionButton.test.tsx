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
import React, { useState } from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { MultiFunctionButton } from './MultiFunctionButton'
import { Button, ButtonTransparent } from '.'

describe('MultiFunctionButton', () => {
  const CopyToClipboard = () => {
    const [change, setChange] = useState(false)

    const handleIsAlternate = () => {
      setChange(true)
      setTimeout(() => setChange(false), 1500)
    }
    return (
      <MultiFunctionButton
        alternate={<ButtonTransparent>Copied!</ButtonTransparent>}
        isAlternate={change}
      >
        <Button onClick={handleIsAlternate}>Copy to Clipboard</Button>
      </MultiFunctionButton>
    )
  }

  test('render children', () => {
    renderWithTheme(
      <MultiFunctionButton
        alternate={<ButtonTransparent>Copied!</ButtonTransparent>}
        isAlternate={false}
      >
        <Button>Copy to Clipboard</Button>
      </MultiFunctionButton>
    )
    const button = screen.getByText('Copy to Clipboard')
    expect(button).toBeInTheDocument()
  })

  test('isAlternate triggers alternate button to display', () => {
    renderWithTheme(
      <MultiFunctionButton
        alternate={<ButtonTransparent>Copied!</ButtonTransparent>}
        isAlternate={true}
      >
        <Button>Copy to Clipboard</Button>
      </MultiFunctionButton>
    )
    const button = screen.getByText('Copied!')
    expect(button).toBeInTheDocument()
  })

  xtest('component has same size at all times', () => {
    renderWithTheme(<CopyToClipboard />)

    const button = screen.getByText('Copy to Clipboard')
    expect(button).toHaveStyleRule('height: ??')
    expect(button).toHaveStyleRule('height: ??')
    fireEvent.click(button)
    const alternate = screen.getByText('Copied!')
    expect(alternate).toHaveStyleRule('width: ??')
    expect(button).toHaveStyleRule('height: ??')
  })

  xtest('component remains focused at all times', () => {
    renderWithTheme(<CopyToClipboard />)
    const button = screen.getByText('Copy to Clipboard')
    expect(button.closest('div')).toHaveFocus()
    fireEvent.click(button)
    const alternate = screen.getByText('Copied!').closest('div')
    expect(alternate).toHaveFocus()
  })
})
