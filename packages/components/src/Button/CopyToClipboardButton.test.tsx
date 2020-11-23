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
import { act, fireEvent } from '@testing-library/react'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { CopyToClipboardButton } from './CopyToClipboardButton'

const getMockedComponent = (propOverride = {}) => {
  const ref: any = React.createRef()

  const defaultProps = {
    ref,
  }
  const updatedProps = { ...defaultProps, ...propOverride }
  return (
    <>
      <textarea ref={ref} defaultValue={'HI I AM A TEXT AREA'} />
      <CopyToClipboardButton {...updatedProps} />
    </>
  )
}

describe('CopyToClipboardButton', () => {
  beforeAll(() => {
    Object.defineProperty(document, 'execCommand', { value: jest.fn() })
  })

  it('renders the CopyToClipboardButton', () => {
    const { getByText } = renderWithTheme(getMockedComponent())
    expect(getByText('Copy to Clipboard')).toBeVisible()
  })

  it('transitions from copy to copied state and back when clicked', async () => {
    jest.useFakeTimers()
    const { getByText } = renderWithTheme(getMockedComponent())
    const button = getByText('Copy to Clipboard')
    fireEvent.click(button)
    expect(getByText('Copied')).toBeVisible()
    act(() => {
      jest.runOnlyPendingTimers()
    })
    expect(getByText('Copy to Clipboard')).toBeVisible()
    jest.useRealTimers()
  })

  it('copies the refs textarea content on copy click', () => {
    jest.spyOn(document, 'execCommand')
    const { getByText } = renderWithTheme(getMockedComponent())
    const button = getByText('Copy to Clipboard')
    fireEvent.click(button)
    expect(document.execCommand).toHaveBeenCalledWith('copy')
  })
})
