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
import { DialogContext } from '../Dialog/DialogContext'
import { Drawer } from './Drawer'
import { UseDrawerHook, RenderProps } from './stories/Drawer.story'

const SimpleContent = () => {
  const { closeModal } = useContext(DialogContext)

  return (
    <>
      Drawer content
      <button onClick={closeModal}>Done</button>
    </>
  )
}

describe('Drawer', () => {
  test('Verify initial state', () => {
    renderWithTheme(<Drawer content={<SimpleContent />} />)
    expect(screen.queryByText('Drawer content')).not.toBeInTheDocument()
  })

  test('defaultOpen prop', async () => {
    renderWithTheme(<Drawer defaultOpen content={<SimpleContent />} />)
    expect(screen.queryByText('Drawer content')).toBeInTheDocument()
    const doneButton = screen.getByText('Done')
    fireEvent.click(doneButton)
    await waitForElementToBeRemoved(() => screen.getByText('Drawer content'))
  })

  test('DialogContext working', () => {
    renderWithTheme(<Drawer defaultOpen content={<SimpleContent />} />)
    expect(screen.queryByText('Drawer content')).toBeInTheDocument()
  })

  test('Drawer can be opened & closed', async () => {
    renderWithTheme(
      <Drawer content={<SimpleContent />}>
        <a>Open Drawer</a>
      </Drawer>
    )

    // Dialog closed
    expect(screen.queryByText('Drawer content')).not.toBeInTheDocument()

    // Open Drawer
    const link = screen.getByText('Open Drawer')
    expect(link).toBeInTheDocument()
    fireEvent.click(link)
    expect(screen.queryByText('Drawer content')).toBeInTheDocument()

    // Close the Drawer
    const doneButton = screen.getByText('Done')
    fireEvent.click(doneButton)
    await waitForElementToBeRemoved(() => screen.getByText('Drawer content'))
  })

  test('useDrawer hook', async () => {
    renderWithTheme(<UseDrawerHook />)

    // Dialog closed
    expect(
      screen.queryByText('The Constitution of the United States')
    ).not.toBeInTheDocument()

    // Open Drawer
    const link = screen.getByText('Open Drawer')
    fireEvent.click(link)
    expect(
      screen.queryByText('The Constitution of the United States')
    ).toBeInTheDocument()

    // Close the Drawer
    const doneButton = screen.getByText('Done Reading')
    fireEvent.click(doneButton)
    await waitForElementToBeRemoved(() =>
      screen.getByText('The Constitution of the United States')
    )
  })

  test('renderProps form', async () => {
    renderWithTheme(<RenderProps />)

    // Dialog closed
    expect(
      screen.queryByText('The Constitution of the United States')
    ).not.toBeInTheDocument()

    // Open Drawer
    const link = screen.getByText('Open Drawer')
    fireEvent.click(link)
    expect(
      screen.queryByText('The Constitution of the United States')
    ).toBeInTheDocument()

    // Close the Drawer
    const doneButton = screen.getByText('Done Reading')
    fireEvent.click(doneButton)
    await waitForElementToBeRemoved(() =>
      screen.getByText('The Constitution of the United States')
    )
  })

  xtest('Backdrop can be clicked to close', () => true)
  xtest('Composition form: controlled', () => true)
  xtest('canClose callback', () => true)
  xtest('onClose callback', () => true)
})
