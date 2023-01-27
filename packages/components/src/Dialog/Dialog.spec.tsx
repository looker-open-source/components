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

import 'jest-styled-components'
import React, { useState } from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import {
  act,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import { SimpleContent } from '../fixtures/DialogContentSimple'
import { DialogMediumContent } from '../fixtures/DialogMediumContent'
import { Dialog } from './Dialog'
import {
  Controlled,
  ControlledLegacy,
  ControlledNoChildren,
  CloseIconButton,
} from './stories/index.stories'

describe('Dialog', () => {
  test('Verify initial state', () => {
    renderWithTheme(<Dialog content={<SimpleContent />} />)
    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument()
  })

  test('Placement functions', () => {
    renderWithTheme(
      <Dialog isOpen placement="top" content={<SimpleContent />} />
    )
    expect(screen.getByText('Dialog content')).toBeInTheDocument()
  })

  test('defaultOpen', async () => {
    renderWithTheme(<Dialog defaultOpen content={<DialogMediumContent />} />)
    expect(screen.getByText(/We the People/)).toBeInTheDocument()
    expect(
      screen.getByLabelText(/The Constitution/, {
        selector: '[role="dialog"]',
      })
    ).toBeInTheDocument()
    const doneButton = screen.getByText('Done Reading')
    fireEvent.click(doneButton)
    await waitForElementToBeRemoved(() => screen.queryByText(/We the People/))
  })

  test('Dialog can be opened & closed', async () => {
    renderWithTheme(
      <Dialog content={<SimpleContent />}>
        <a>Open Dialog</a>
      </Dialog>
    )

    // Dialog closed
    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument()

    // Open Dialog
    const link = screen.getByText('Open Dialog')
    expect(link).toBeInTheDocument()
    fireEvent.click(link)
    expect(screen.getByText('Dialog content')).toBeInTheDocument()

    // Close the Dialog
    const doneButton = screen.getByText('Done')
    fireEvent.click(doneButton)
    await waitForElementToBeRemoved(() => screen.queryByText('Dialog content'))
  })

  test('Backdrop can be clicked to close', async () => {
    renderWithTheme(
      <Dialog defaultOpen content={<SimpleContent />}>
        <a>Open Dialog</a>
      </Dialog>
    )

    // Confirm Dialog is open
    expect(screen.getByText('Dialog content')).toBeInTheDocument()

    // Find & click the backdrop
    fireEvent.click(screen.getByTestId('backdrop'))

    // Confirm Dialog closes
    await waitForElementToBeRemoved(() => screen.queryByText('Dialog content'))
  })

  test('Render props style', async () => {
    renderWithTheme(
      <Dialog content={<SimpleContent />}>
        {dialogProps => <a {...dialogProps}>Open Dialog</a>}
      </Dialog>
    )

    // Open Dialog
    const link = screen.getByText('Open Dialog')
    fireEvent.click(link)
    expect(screen.getByText('Dialog content')).toBeInTheDocument()

    // Close the Dialog
    const doneButton = screen.getByText('Done')
    fireEvent.click(doneButton)
    await waitForElementToBeRemoved(() => screen.queryByText('Dialog content'))
  })

  test('Controlled', async () => {
    renderWithTheme(<Controlled />)

    // Open Dialog
    const link = screen.getByText('Open Dialog')
    fireEvent.click(link)
    expect(screen.getByText(/Lorem Ipsum is simply/)).toBeInTheDocument()

    // Close the Dialog
    const doneButton = screen.getByText('Done Reading')
    fireEvent.click(doneButton)
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/Lorem Ipsum is simply/)
    )
  })

  test('Controlled no callbacks', async () => {
    const SimpleControlled = () => {
      const [isOpen, setOpen] = useState(false)

      return (
        <>
          <Dialog content={<DialogMediumContent />} isOpen={isOpen} />
          <button onClick={() => setOpen(true)}>Open Dialog</button>
        </>
      )
    }

    renderWithTheme(<SimpleControlled />)

    // Open Dialog
    const link = screen.getByText('Open Dialog')
    fireEvent.click(link)
    expect(screen.getByText(/We the People/)).toBeInTheDocument()
  })

  test('Controlled - no children', async () => {
    renderWithTheme(<ControlledNoChildren />)

    // Open Dialog
    const link = screen.getByText('Open Dialog')
    fireEvent.click(link)
    expect(screen.getByText(/Lorem Ipsum is simply/)).toBeInTheDocument()

    // Close the Dialog
    const doneButton = screen.getByText('Done Reading')
    fireEvent.click(doneButton)
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/Lorem Ipsum is simply/)
    )
  })

  test('Controlled - legacy', async () => {
    renderWithTheme(<ControlledLegacy />)

    // Open Dialog
    const link = screen.getByText('Open Dialog')
    fireEvent.click(link)
    expect(screen.getByText(/Lorem Ipsum is simply/)).toBeInTheDocument()

    // Close the Dialog
    const doneButton = screen.getByText('Done Reading')
    fireEvent.click(doneButton)
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/Lorem Ipsum is simply/)
    )
  })

  describe('Animation behavior', () => {
    beforeEach(() => {
      jest.useFakeTimers()
    })
    const runTimers = () =>
      act(() => {
        jest.runOnlyPendingTimers()
      })
    afterEach(() => {
      runTimers()
      jest.useRealTimers()
    })

    test('props onAfterClose and onAfterOpen are called', async () => {
      const onAfterClose = jest.fn()
      const onAfterOpen = jest.fn()

      renderWithTheme(
        <Dialog
          onAfterClose={onAfterClose}
          onAfterOpen={onAfterOpen}
          content={<SimpleContent />}
        >
          <a>Open Dialog</a>
        </Dialog>
      )

      fireEvent.click(screen.getByText('Open Dialog'))
      runTimers()
      expect(onAfterOpen).toBeCalled()
      fireEvent.click(screen.getByText('Done'))
      await waitForElementToBeRemoved(() =>
        screen.queryByText('Dialog content')
      )
      expect(onAfterClose).toBeCalled()
    })

    test('Close IconButton does not have tooltip when auto-focused', () => {
      // If the close icon button gets focus before animation is complete
      // the tooltip will have the wrong position
      renderWithTheme(<CloseIconButton />)
      fireEvent.click(screen.getByText('Open Dialog'))

      // Finish animating
      runTimers()
      // Close button has initial focus but no tooltip
      const closeButton = within(screen.getByRole('dialog')).getByRole('button')
      expect(closeButton).toHaveFocus()
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()

      // Close button has tooltip on next focus
      fireEvent.blur(closeButton)
      fireEvent.focus(closeButton)
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
      // Close the dialog to avoid act warning
      fireEvent.click(closeButton)

      // Finish animating
      runTimers()
    })
  })

  test('onClose callback', () => {
    const onClose = jest.fn()

    renderWithTheme(
      <Dialog
        content={<SimpleContent />}
        defaultOpen={true}
        onClose={onClose}
      />
    )

    fireEvent.click(screen.getByText('Done'))
    expect(onClose).toBeCalledTimes(1)
  })

  test('onClose callback called when canClose=true', () => {
    const onClose = jest.fn()

    renderWithTheme(
      <Dialog
        content={<SimpleContent />}
        defaultOpen={true}
        canClose={() => true}
        onClose={onClose}
      />
    )

    fireEvent.click(screen.getByText('Done'))
    expect(onClose).toBeCalledTimes(1)
  })

  test('onClose callback not called when canClose=false', () => {
    const onClose = jest.fn()

    renderWithTheme(
      <Dialog
        content={<SimpleContent />}
        defaultOpen={true}
        canClose={() => false}
        onClose={onClose}
      />
    )

    fireEvent.click(screen.getByText('Done'))
    expect(onClose).toBeCalledTimes(0)
  })

  describe('width', () => {
    test('xsmall', () => {
      renderWithTheme(
        <Dialog
          content={<SimpleContent />}
          defaultOpen={true}
          width="xxsmall"
        />
      )
      expect(screen.getByText('Dialog content')).toHaveStyleRule(
        'width',
        '16rem'
      )
    })

    test('small', () => {
      renderWithTheme(
        <Dialog content={<SimpleContent />} defaultOpen={true} width="small" />
      )
      expect(screen.getByText('Dialog content')).toHaveStyleRule(
        'width',
        '28rem'
      )
    })

    test('large', () => {
      renderWithTheme(
        <Dialog content={<SimpleContent />} defaultOpen={true} width="large" />
      )
      expect(screen.getByText('Dialog content')).toHaveStyleRule(
        'width',
        '50rem'
      )
    })

    test('arbitrary', () => {
      renderWithTheme(
        <Dialog
          content={<SimpleContent />}
          defaultOpen={true}
          width="24.5rem"
        />
      )
      expect(screen.getByText('Dialog content')).toHaveStyleRule(
        'width',
        '24.5rem'
      )
    })

    test('Dialog without content throws console warning', () => {
      const globalConsole = global.console
      const errorMock = jest.fn()

      global.console = {
        error: errorMock,
      } as unknown as Console

      renderWithTheme(<Dialog />)
      expect(errorMock.mock.calls).toMatchInlineSnapshot(`
         Array [
           Array [
             "Dialog cannot be used without specifying content",
           ],
         ]
       `)

      global.console = globalConsole
    })
  })
})
