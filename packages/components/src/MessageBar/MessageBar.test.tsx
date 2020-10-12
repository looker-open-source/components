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
import { theme } from '@looker/design-tokens'
import {
  renderWithTheme,
  withThemeProvider,
} from '@looker/components-test-utils'
import { MessageBar } from './MessageBar'

describe('MessageBar', () => {
  test('controlled component', () => {
    const handleDismiss = jest.fn()

    const { getByText, queryByText, rerender } = renderWithTheme(
      <MessageBar onPrimaryClick={handleDismiss} visible>
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
        <MessageBar onPrimaryClick={handleDismiss} visible={false}>
          Message text
        </MessageBar>
      )
    )
    expect(queryByText('Message text')).not.toBeInTheDocument()
  })

  describe('action buttons', () => {
    test('renders standard Dismiss button by default', () => {
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

    test('hides the dismiss button', () => {
      const { getByText, queryByText, rerender } = renderWithTheme(
        <MessageBar>Message text</MessageBar>
      )

      expect(getByText('Dismiss Inform')).toBeInTheDocument()

      rerender(
        withThemeProvider(<MessageBar noActions>Message text</MessageBar>)
      )

      expect(queryByText('Dismiss Inform')).not.toBeInTheDocument()
    })

    test('accepts a text label to customize primaryAction', () => {
      const handlePrimaryClick = jest.fn()
      const { getByText, queryByText } = renderWithTheme(
        <MessageBar
          primaryAction="Take the red pill"
          onPrimaryClick={handlePrimaryClick}
        >
          Do you want to know what the matrix is?
        </MessageBar>
      )

      const primaryButton = getByText('Take the red pill')

      expect(primaryButton).toBeInTheDocument()
      expect(
        getByText('Do you want to know what the matrix is?')
      ).toBeInTheDocument()
      expect(queryByText('Dismiss Inform')).not.toBeInTheDocument()

      fireEvent.click(primaryButton)

      expect(handlePrimaryClick).toBeCalledTimes(1)
      // clears messageBar on primary action click
      expect(
        queryByText('Do you want to know what the matrix is?')
      ).not.toBeInTheDocument()
    })

    test('accepts a text label to customize secondaryAction', () => {
      const handleSecondaryClick = jest.fn()
      const { getByText, queryByText } = renderWithTheme(
        <MessageBar
          secondaryAction="Take the blue pill"
          onSecondaryClick={handleSecondaryClick}
        >
          Do you want to know what the matrix is?
        </MessageBar>
      )

      const secondaryButton = getByText('Take the blue pill')

      expect(secondaryButton).toBeInTheDocument()
      expect(
        getByText('Do you want to know what the matrix is?')
      ).toBeInTheDocument()

      fireEvent.click(secondaryButton)

      expect(handleSecondaryClick).toBeCalledTimes(1)
      // clears messageBar on secondary action click
      expect(
        queryByText('Do you want to know what the matrix is?')
      ).not.toBeInTheDocument()
    })

    test('renders custom JSX Button elements for primary and secondary actions', () => {
      const { getByText, queryByText } = renderWithTheme(
        <MessageBar
          intent="inform"
          primaryAction={<button>Take the red pill</button>}
          secondaryAction={<button>Take the blue pill</button>}
        >
          Message text
        </MessageBar>
      )

      expect(getByText('Take the red pill')).toBeInTheDocument()
      expect(getByText('Take the blue pill')).toBeInTheDocument()
      expect(queryByText('Dismiss Inform')).not.toBeInTheDocument()
    })

    test('renders secondaryButton next to default Dismiss button', () => {
      const { getByText } = renderWithTheme(
        <MessageBar
          intent="inform"
          secondaryAction={<button>secondary action</button>}
        >
          Message text
        </MessageBar>
      )

      expect(getByText('secondary action')).toBeInTheDocument()
      expect(getByText('Dismiss Inform')).toBeInTheDocument()
    })
  })

  describe('intent styling', () => {
    test('Warn MessageBar', () => {
      const { getByText, getByTitle } = renderWithTheme(
        <MessageBar intent="warn">Warn</MessageBar>
      )
      // dismiss button
      expect(getByText('Dismiss Warning')).toBeInTheDocument()
      // icon title and color
      expect(getByTitle('Warning').closest('div')).toHaveStyleRule(
        'color',
        theme.colors.warn
      )
    })

    test('Error MessageBar', () => {
      const { getByText, getByTitle, getByRole } = renderWithTheme(
        <MessageBar intent="critical" id="test-message-bar">
          Error
        </MessageBar>
      )
      // dismiss button
      expect(getByText('Dismiss Error')).toBeInTheDocument()
      // icon title and color
      expect(getByTitle('Error').closest('div')).toHaveStyleRule(
        'color',
        theme.colors.critical
      )
      // MesasgeBar background
      expect(getByRole('status')).toHaveStyleRule(
        'background',
        theme.colors.criticalAccent
      )
    })

    test('Info MessageBar', () => {
      const { getByText, getByTitle } = renderWithTheme(
        <MessageBar intent="inform" id="test-message-bar">
          Inform
        </MessageBar>
      )

      // dismiss button
      expect(getByText('Dismiss Inform')).toBeInTheDocument()
      // icon title and color
      expect(getByTitle('Inform').closest('div')).toHaveStyleRule(
        'color',
        theme.colors.inform
      )
    })

    test('Confirmation MessageBar', () => {
      const { getByText, getByTitle } = renderWithTheme(
        <MessageBar intent="positive" id="test-message-bar">
          Confirmation
        </MessageBar>
      )
      // dismiss button
      expect(getByText('Dismiss Success')).toBeInTheDocument()

      // icon title and color
      expect(getByTitle('Success').closest('div')).toHaveStyleRule(
        'color',
        theme.colors.positive
      )
    })
  })
})
