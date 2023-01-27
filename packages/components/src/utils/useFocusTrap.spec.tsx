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

import { FocusTrapProvider } from '@looker/components-providers'
import { renderWithTheme } from '@looker/components-test-utils'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactNode } from 'react'
import React from 'react'
import { FieldSelect, FieldText } from '../Form/Fields'
import { useFocusTrap, useToggle } from './'

beforeEach(() => {
  jest.useFakeTimers()
})
afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

interface TestProps {
  clickOutsideDeactivates?: boolean
  children?: ReactNode
}

const Inner = ({ children, clickOutsideDeactivates }: TestProps) => {
  const [, ref] = useFocusTrap({ clickOutsideDeactivates })
  const { value, setOff, toggle } = useToggle()
  return (
    <>
      {value && (
        <div ref={ref}>
          {children}
          <button tabIndex={-1} onClick={setOff}>
            Close
          </button>
        </div>
      )}
      <button onClick={toggle}>toggle</button>
      <button onClick={setOff}>Another button</button>
    </>
  )
}

const FocusTrapComponent = (props: TestProps) => {
  return (
    <FocusTrapProvider>
      <Inner {...props} />
    </FocusTrapProvider>
  )
}

const Surface = ({ children }: React.PropsWithChildren<unknown>) => (
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
            <FieldText label="Text field A" />
            <FieldText label="Text field B" autoFocus />
          </Surface>
        </FocusTrapComponent>
      )
      const toggle = screen.getByText('toggle')
      fireEvent.click(toggle)

      await waitFor(() =>
        expect(screen.getByLabelText('Text field B')).toHaveFocus()
      )
    })

    describe('focus starts on tabbable element by priority', () => {
      const inputElements = (
        <>
          <input type="hidden" />
          <FieldText label="Hidden text field" style={{ display: 'none' }} />
          <FieldText label="Text field" />
        </>
      )
      const footerElement = (
        <footer>
          <button>Footer button</button>
        </footer>
      )
      const firstTabbableElement = <button>First button</button>

      test('input element is 1st priority', async () => {
        renderWithTheme(
          <FocusTrapComponent>
            <Surface>
              {firstTabbableElement}
              {footerElement}
              {inputElements}
            </Surface>
          </FocusTrapComponent>
        )
        const toggle = screen.getByText('toggle')
        fireEvent.click(toggle)

        await waitFor(() =>
          expect(screen.getByLabelText('Text field')).toHaveFocus()
        )
      })

      test('footer element is 2nd priority', async () => {
        renderWithTheme(
          <FocusTrapComponent>
            <Surface>
              {firstTabbableElement}
              {footerElement}
            </Surface>
          </FocusTrapComponent>
        )
        const toggle = screen.getByText('toggle')
        fireEvent.click(toggle)

        await waitFor(() =>
          expect(screen.getByText('Footer button')).toHaveFocus()
        )
      })

      test('first tabbable element is 3rd priority', async () => {
        renderWithTheme(
          <FocusTrapComponent>
            <Surface>
              {firstTabbableElement}
              <button>Other button</button>
              <footer />
            </Surface>
          </FocusTrapComponent>
        )
        const toggle = screen.getByText('toggle')
        fireEvent.click(toggle)

        await waitFor(() =>
          expect(screen.getByText('First button')).toHaveFocus()
        )
      })
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

    test('With nested traps', async () => {
      render(
        <FocusTrapComponent>
          <Surface>
            <Inner>
              <Surface />
            </Inner>
          </Surface>
        </FocusTrapComponent>
      )
      const toggle = screen.getByText('toggle')
      toggle.focus()
      fireEvent.click(toggle)

      const toggleInner = screen.getAllByText('toggle')[0]
      toggleInner.focus()
      fireEvent.click(toggleInner)

      const closeButtons = screen.getAllByText('Close')
      fireEvent.click(closeButtons[0])
      fireEvent.click(closeButtons[1])
      await waitFor(() => expect(toggle).toHaveFocus())
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

  describe('click outside', () => {
    test('does not deactivate by default', async () => {
      render(
        <>
          <FocusTrapComponent>
            <Surface />
          </FocusTrapComponent>
          <button>outside</button>
        </>
      )
      userEvent.click(screen.getByText('toggle'))

      const surface = screen.getByTestId('surface')
      await waitFor(() => expect(surface).toHaveFocus())

      userEvent.click(screen.getByText('outside'))
      expect(surface).toHaveFocus()
    })
    test('with clickOutsideDeactivates', async () => {
      render(
        <>
          <FocusTrapComponent clickOutsideDeactivates>
            <Surface />
          </FocusTrapComponent>
          <button>outside</button>
        </>
      )
      userEvent.click(screen.getByText('toggle'))

      const surface = screen.getByTestId('surface')
      await waitFor(() => expect(surface).toHaveFocus())

      const outside = screen.getByText('outside')
      userEvent.click(outside)
      expect(outside).toHaveFocus()
    })
  })
})

// https://github.com/looker-open-source/components/issues/2953
//
// This test was originally failing in Firefox but we can test it and expect
// it to work in any browser because the fix required that we maintain our
// own record of activeElement, which is used in all browsers.
//
// The fix itself could not be feature detected without essentially running
// this test at runtime in production code.
test('Focus maintained with Select', async () => {
  // It is important to keep the InputText before the Select because the
  // bug was caused by the InputText being focused after selecting a value.
  // The Select should be refocused after selecting a value instead.
  renderWithTheme(
    <Inner>
      <FieldText placeholder="Input Text" />
      <FieldSelect
        options={[{ label: '1', value: '1' }]}
        placeholder="Components Select"
      />
    </Inner>
  )

  // Toggle the children on <Inner />.
  fireEvent.click(screen.getByText('toggle'))

  // We this represents the host div, not the internal input.
  const select = screen.getByPlaceholderText('Components Select')

  // Focus so the activeElement gets recorded. Firing the click event will
  // not do this.
  fireEvent.focus(select)

  // Click so the dropdown is opened. Focusing will not do this.
  fireEvent.click(select)

  // Selects the LI representing the first value. Firing this on the select
  // option will not change the value.
  fireEvent.click(screen.getByText('1'))

  // The select should briefly not have focus because this was clicked.
  expect(select).not.toHaveFocus()

  // We must wait for the select to be refocused on the next event loop.
  await waitFor(() => {
    expect(select).toHaveFocus()
  })
})
