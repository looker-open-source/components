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
import React, { useContext } from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import {
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { Dialog } from './Dialog'
import { DialogContext } from './DialogContext'

const SimpleContent = () => {
  const { closeModal } = useContext(DialogContext)

  return (
    <>
      Dialog content
      <button onClick={closeModal}>Done</button>
    </>
  )
}

describe('Dialog', () => {
  test('Verify initial state', () => {
    renderWithTheme(<Dialog content={<SimpleContent />} />)
    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument()
  })

  test('defaultOpen', async () => {
    renderWithTheme(<Dialog defaultOpen content={<SimpleContent />} />)
    expect(screen.queryByText('Dialog content')).toBeInTheDocument()
    const doneButton = screen.getByText('Done')
    fireEvent.click(doneButton)
    await waitForElementToBeRemoved(() => screen.getByText('Dialog content'))
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
    expect(screen.queryByText('Dialog content')).toBeInTheDocument()

    // Close the Dialog
    const doneButton = screen.getByText('Done')
    fireEvent.click(doneButton)
    await waitForElementToBeRemoved(() => screen.getByText('Dialog content'))
  })

  test('Render props style', async () => {
    renderWithTheme(
      <Dialog content={<SimpleContent />}>
        {(dialogProps) => <a {...dialogProps}>Open Dialog</a>}
      </Dialog>
    )

    // Open Dialog
    const link = screen.getByText('Open Dialog')
    fireEvent.click(link)
    expect(screen.queryByText('Dialog content')).toBeInTheDocument()

    // Close the Dialog
    const doneButton = screen.getByText('Done')
    fireEvent.click(doneButton)
    await waitForElementToBeRemoved(() => screen.getByText('Dialog content'))
  })

  xtest('Dialog & backdrop styled', () => {
    renderWithTheme(
      <Dialog
        isOpen
        backdrop={{ backgroundColor: 'pink' }}
        surfaceStyles={{ backgroundColor: 'purple' }}
        content={<SimpleContent />}
      />
    )

    // const backdrop = dialog.find(Backdrop)
    // expect(backdrop.exists()).toBeTruthy()
    // expect(backdrop.props().style).toEqual({ backgroundColor: 'pink' })

    // const surface = dialog.find(Surface)
    // expect(surface.exists()).toBeTruthy()
    // expect(surface.props().style).toEqual({ backgroundColor: 'purple' })
  })

  xtest('Backdrop can be clicked to close', () => true)
  xtest('Composition form: controlled', () => true)
  xtest('canClose callback', () => true)
  xtest('onClose callback', () => true)
})
