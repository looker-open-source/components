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

const FocusTrapComponent: FC = ({ children }) => {
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

describe('useFocusTrap', () => {
  describe('initial focus', () => {
    test('focus starts on surface', async () => {
      render(
        <FocusTrapProvider>
          <FocusTrapComponent>
            <div
              tabIndex={-1}
              data-testid="surface"
              data-overlay-surface="true"
            />
          </FocusTrapComponent>
        </FocusTrapProvider>
      )
      const toggle = screen.getByText('toggle')
      fireEvent.click(toggle)

      await waitFor(() =>
        expect(document.activeElement).toBe(screen.getByTestId('surface'))
      )
    })

    test('focus starts on autoFocus element', async () => {
      renderWithTheme(
        <FocusTrapProvider>
          <FocusTrapComponent>
            <div
              tabIndex={-1}
              data-testid="surface"
              data-overlay-surface="true"
            >
              <FieldText label="Text field" autoFocus />
            </div>
          </FocusTrapComponent>
        </FocusTrapProvider>
      )
      const toggle = screen.getByText('toggle')
      fireEvent.click(toggle)

      await waitFor(() =>
        expect(document.activeElement).toBe(screen.getByLabelText('Text field'))
      )
    })

    test('error without autoFocus or surface', async () => {
      renderWithTheme(
        <FocusTrapProvider>
          <FocusTrapComponent />
        </FocusTrapProvider>
      )
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
        <FocusTrapProvider>
          <FocusTrapComponent>
            <div
              tabIndex={-1}
              data-testid="surface"
              data-overlay-surface="true"
            />
          </FocusTrapComponent>
        </FocusTrapProvider>
      )
      const toggle = screen.getByText('toggle')
      toggle.focus()
      fireEvent.click(toggle)

      await waitFor(() =>
        expect(document.activeElement).toBe(screen.getByTestId('surface'))
      )

      fireEvent.click(toggle)
      await waitFor(() => expect(document.activeElement).toBe(toggle))
    })

    test('focus does not return to trigger', async () => {
      render(
        <FocusTrapProvider>
          <FocusTrapComponent>
            <div
              tabIndex={-1}
              data-testid="surface"
              data-overlay-surface="true"
            />
          </FocusTrapComponent>
        </FocusTrapProvider>
      )
      const toggle = screen.getByText('toggle')
      toggle.focus()
      fireEvent.click(toggle)

      await waitFor(() =>
        expect(document.activeElement).toBe(screen.getByTestId('surface'))
      )

      const otherButton = screen.getByText('Another button')
      fireEvent.click(otherButton)
      otherButton.focus()
      expect(document.activeElement).toBe(otherButton)
    })
  })
})
