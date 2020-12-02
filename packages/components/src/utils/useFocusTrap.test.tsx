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

import { FocusTrapProvider } from '@looker/components-providers'
import { renderWithTheme } from '@looker/components-test-utils'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import React, { FC } from 'react'
import { FieldText } from '../Form/Fields'
import { useFocusTrap, useToggle } from './'

// const globalConsole = global.console
// const warnMock = jest.fn()

beforeEach(() => {
  // global.console = ({
  //   warn: warnMock,
  // } as unknown) as Console
  jest.useFakeTimers()
})
afterEach(() => {
  // jest.resetAllMocks()
  // global.console = globalConsole
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

const Inner: FC = ({ children }) => {
  const [, ref] = useFocusTrap()
  const { value, setOff, toggle } = useToggle()
  return (
    <>
      {value && <div ref={ref}>{children}</div>}
      <button onClick={toggle}>toggle</button>
      <button onClick={setOff}>Another button</button>
    </>
  )
}

const FocusTrapComponent: FC = ({ children }) => {
  return (
    <FocusTrapProvider>
      <Inner>{children}</Inner>
    </FocusTrapProvider>
  )
}

const Surface: FC = ({ children }) => (
  <div tabIndex={-1} data-testid="surface" data-overlay-surface="true">
    {children}
  </div>
)

describe('useFocusTrap', () => {
  describe('initial focus', () => {
    test('focus starts on surface', async () => {
      render(
        <FocusTrapComponent>
          <Surface />
        </FocusTrapComponent>
      )
      const toggle = screen.getByText('toggle')
      fireEvent.click(toggle)

      await waitFor(() => expect(screen.getByTestId('surface')).toHaveFocus())
    })

    test('focus starts on autoFocus element', async () => {
      renderWithTheme(
        <FocusTrapComponent>
          <Surface>
            <FieldText label="Text field" autoFocus />
          </Surface>
        </FocusTrapComponent>
      )
      const toggle = screen.getByText('toggle')
      fireEvent.click(toggle)

      await waitFor(() =>
        expect(screen.getByLabelText('Text field')).toHaveFocus()
      )
    })

    test('error without autoFocus or surface', async () => {
      renderWithTheme(<FocusTrapComponent />)
      const toggle = screen.getByText('toggle')
      fireEvent.click(toggle)
      act(() => {
        try {
          jest.runOnlyPendingTimers()
        } catch (e) {
          expect(e).toMatchInlineSnapshot(
            `[Error: Your focus trap needs to have at least one focusable element]`
          )
        }
      })
    })
  })

  describe('return focus', () => {
    test('focus returns to trigger', async () => {
      render(
        <FocusTrapComponent>
          <Surface />
        </FocusTrapComponent>
      )
      const toggle = screen.getByText('toggle')
      toggle.focus()
      fireEvent.click(toggle)

      await waitFor(() => expect(screen.getByTestId('surface')).toHaveFocus())

      fireEvent.click(toggle)
      await waitFor(() => expect(toggle).toHaveFocus())
    })

    test('focus does not return to trigger', async () => {
      render(
        <FocusTrapComponent>
          <Surface />
        </FocusTrapComponent>
      )
      const toggle = screen.getByText('toggle')
      toggle.focus()
      fireEvent.click(toggle)

      await waitFor(() => expect(screen.getByTestId('surface')).toHaveFocus())

      const otherButton = screen.getByText('Another button')
      fireEvent.click(otherButton)
      otherButton.focus()
      expect(otherButton).toHaveFocus()
    })
  })

  describe('cycle focus when tabbing', () => {
    const CycleFocus = () => (
      <FocusTrapComponent>
        <Surface>
          <button>First</button>
          <input type="text" />
          <a href="#">Last</a>
          <span>Not tabbable</span>
        </Surface>
      </FocusTrapComponent>
    )

    test('focus the first tabbable element after tabbing from the last', async () => {
      render(<CycleFocus />)

      const toggle = screen.getByText('toggle')
      fireEvent.click(toggle)

      const last = screen.getByText('Last')
      last.focus()
      fireEvent.keyDown(last, { key: 'Tab' })
      expect(screen.getByText('First')).toHaveFocus()
    })

    test('focus the last tabbable element after shift-tabbing from the first', async () => {
      render(<CycleFocus />)

      const toggle = screen.getByText('toggle')
      fireEvent.click(toggle)

      const first = screen.getByText('First')
      first.focus()
      fireEvent.keyDown(first, { key: 'Tab', shiftKey: true })
      expect(screen.getByText('Last')).toHaveFocus()
    })

    test('do nothing when not focused on first or last tabbable element', async () => {
      render(<CycleFocus />)

      const toggle = screen.getByText('toggle')
      fireEvent.click(toggle)

      const input = screen.getByRole('textbox')
      input.focus()
      // In jsdom a keydown event doesn't actually move focus
      // but useFocusTrap uses the keydown event to cycle focus on first & last
      // because using focus/blur events would be "too late"
      fireEvent.keyDown(input, { key: 'Tab' })
      expect(input).toHaveFocus()
    })
  })
})
