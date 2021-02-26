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
import userEvent from '@testing-library/user-event'
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
        alternate={<ButtonTransparent size="large">Copied!</ButtonTransparent>}
        isAlternate={change}
      >
        <Button onClick={handleIsAlternate}>Copy to Clipboard</Button>
      </MultiFunctionButton>
    )
  }

  test('render children', () => {
    renderWithTheme(<CopyToClipboard />)
    expect(screen.getByText('Copy to Clipboard')).toBeInTheDocument()
  })

  test('alternate button is displayed when isAlternate is true', () => {
    renderWithTheme(<CopyToClipboard />)
    const button = screen.getByText('Copy to Clipboard')
    fireEvent.click(button)
    expect(screen.getByText('Copied!')).toBeInTheDocument()
  })

  test('component has same size at all times', () => {
    Object.defineProperties(window.HTMLElement.prototype, {
      offsetHeight: {
        value: 44,
      },
    })

    Object.defineProperties(window.HTMLElement.prototype, {
      offsetWidth: {
        value: 162,
      },
    })

    renderWithTheme(<CopyToClipboard />)
    const button = screen.getByText('Copy to Clipboard')
    // screen.debug()
    expect(button.closest('div')).toHaveStyle('height: 44px')
    expect(button.closest('div')).toHaveStyle('width: 162px')
    fireEvent.click(button)
    const alternate = screen.getByText('Copied!')
    expect(alternate.closest('div')).toHaveStyle('height: 44px')
    expect(alternate.closest('div')).toHaveStyle('width: 162px')
  })

  test('component remains focused at all times', () => {
    renderWithTheme(<CopyToClipboard />)
    const button = screen.getByText('Copy to Clipboard')
    expect(button).not.toHaveFocus()
    userEvent.click(button)
    const alternate = screen.getByText('Copied!')
    expect(alternate).toHaveFocus()
  })
})
