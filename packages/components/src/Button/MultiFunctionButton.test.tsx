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
import { fireEvent, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MultiFunctionButton } from './MultiFunctionButton'

const CopyToClipboard = () => {
  const [change, setChange] = useState(false)

  const handleSwap = () => {
    setChange(true)
    setTimeout(() => setChange(false), 1500)
  }
  return (
    <MultiFunctionButton alternate={<button>Copied!</button>} swap={change}>
      <button onClick={handleSwap}>Copy to Clipboard</button>
    </MultiFunctionButton>
  )
}

describe('MultiFunctionButton', () => {
  test('render children', () => {
    renderWithTheme(<CopyToClipboard />)
    expect(screen.getByText('Copy to Clipboard')).toBeInTheDocument()
  })

  test('if swap is false alternate button should display', () => {
    renderWithTheme(
      <MultiFunctionButton alternate={<button>Copied!</button>} swap={false}>
        <button>Copy to Clipboard</button>
      </MultiFunctionButton>
    )
    expect(screen.getByText('Copied!')).toBeInTheDocument()
  })

  test('alternate button is displayed when swap is true', () => {
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
    expect(button.closest('div')).toHaveStyle('height: 44px')
    expect(button.closest('div')).toHaveStyle('width: 162px')
    fireEvent.click(button)
    const alternate = screen.getByText('Copied!')
    expect(alternate.closest('div')).toHaveStyle('height: 44px')
    expect(alternate.closest('div')).toHaveStyle('width: 162px')
  })

  test('component switch focus based on the displayed button', () => {
    renderWithTheme(<CopyToClipboard />)
    const button = screen.getByText('Copy to Clipboard')
    expect(button).not.toHaveFocus()
    userEvent.click(button)
    const alternate = screen.getByText('Copied!')
    expect(alternate).toHaveFocus()
  })
})

describe('MultiFunctionButton focus returns to children', () => {
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

  test('after swap goes back to false', () => {
    renderWithTheme(<CopyToClipboard />)
    const button = screen.getByText('Copy to Clipboard')
    userEvent.click(button)
    const alternate = screen.getByText('Copied!')
    expect(alternate).toHaveFocus()
    runTimers()
    expect(button).toHaveFocus()
  })
})
