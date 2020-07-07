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
import { fireEvent } from '@testing-library/react'
import {
  renderWithTheme,
  withThemeProvider,
} from '@looker/components-test-utils'
import { MessageBar } from './MessageBar'

describe('clear button functionality', () => {
  test('clearable by default', () => {
    const { getByText, queryByText } = renderWithTheme(
      <MessageBar>Message text</MessageBar>
    )

    // visible message bar
    expect(getByText('Message text')).toBeInTheDocument()

    // dismiss button
    const dismissButton =
      getByText('Dismiss Inform').closest('button') ||
      document.createElement('button') // suppress typescript warning about possible null button

    fireEvent.click(dismissButton)

    // message bar dismissed
    expect(queryByText('Message text')).not.toBeInTheDocument()
  })

  test('controlled component', () => {
    const handleDismiss = jest.fn()

    const { getByText, queryByText, rerender } = renderWithTheme(
      <MessageBar onDismiss={handleDismiss} visible>
        Message text
      </MessageBar>
    )

    // visible message bar
    expect(getByText('Message text')).toBeInTheDocument()

    // dismiss callback
    expect(handleDismiss).not.toHaveBeenCalled()

    const dismissButton =
      getByText('Dismiss Inform').closest('button') ||
      document.createElement('button') // suppress typescript warning about possible null button

    fireEvent.click(dismissButton)

    expect(handleDismiss).toHaveBeenCalledTimes(1)

    // message bar remains visible until `visible` prop is toggled
    expect(getByText('Message text')).toBeInTheDocument()

    // dismiss message bar through `visible` prop change
    rerender(
      withThemeProvider(
        <MessageBar onDismiss={handleDismiss} visible={false}>
          Message text
        </MessageBar>
      )
    )
    expect(queryByText('Message text')).not.toBeInTheDocument()
  })

  test('`canDismiss` toggles the clear button', () => {
    const { getByText, queryByText, rerender } = renderWithTheme(
      <MessageBar>Message text</MessageBar>
    )

    expect(getByText('Dismiss Inform')).toBeInTheDocument()

    rerender(
      withThemeProvider(
        <MessageBar canDismiss={false}>Message text</MessageBar>
      )
    )

    expect(queryByText('Dismiss Inform')).not.toBeInTheDocument()
  })
})

describe('MessageBar intents', () => {
  test('Warn MessageBar', () => {
    const { getByText, getByTitle } = renderWithTheme(
      <MessageBar intent="warn" id="test-message-bar">
        Warn
      </MessageBar>
    )

    expect(getByText('Dismiss Warning')).toBeInTheDocument()
    expect(getByTitle('Warning').closest('div')).toHaveStyle({
      color: '#FFA800',
    })
  })

  // test('Error MessageBar', () => {
  //   assertSnapshot(
  //     <MessageBar intent="critical" id="test-message-bar">
  //       Error
  //     </MessageBar>
  //   )
  // })

  // test('Info MessageBar', () => {
  //   assertSnapshot(
  //     <MessageBar intent="inform" id="test-message-bar">
  //       Info
  //     </MessageBar>
  //   )
  // })

  // test('Confirmation MessageBar', () => {
  //   assertSnapshot(
  //     <MessageBar intent="positive" id="test-message-bar">
  //       Positive
  //     </MessageBar>
  //   )
  // })

  // test('MessageBar can be dismissed', () => {
  //   assertSnapshot(
  //     <MessageBar intent="inform" id="test-message-bar" canDismiss>
  //       Info!
  //     </MessageBar>
  //   )
  // })
})
