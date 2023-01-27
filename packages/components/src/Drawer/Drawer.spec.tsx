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
import React, { useContext } from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import {
  act,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { DialogContext } from '../Dialog/DialogContext'
import { Drawer } from './Drawer'
import { UseDrawer } from './stories/index.stories'

const SimpleContent = () => {
  const { closeModal } = useContext(DialogContext)

  return (
    <>
      Drawer content
      <button onClick={closeModal}>Done</button>
    </>
  )
}

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

describe('Drawer', () => {
  test('Basic render', () => {
    renderWithTheme(<Drawer content={<SimpleContent />} />)
    expect(screen.queryByText('Drawer content')).not.toBeInTheDocument()
  })

  test('defaultOpen', async () => {
    renderWithTheme(<Drawer defaultOpen content={<SimpleContent />} />)
    runTimers()
    expect(screen.getByText('Drawer content')).toBeInTheDocument()
    const doneButton = screen.getByText('Done')
    fireEvent.click(doneButton)
    await waitForElementToBeRemoved(() => screen.queryByText('Drawer content'))
  })

  test('useDrawer hook', async () => {
    renderWithTheme(<UseDrawer />)

    // Dialog closed
    expect(screen.queryByText('Drawer content')).not.toBeInTheDocument()

    // Open Drawer
    const link = screen.getByText('Open Drawer')
    fireEvent.click(link)
    runTimers()
    expect(screen.getByText('Drawer content')).toBeInTheDocument()

    // Close the Drawer
    const backdrop = screen.getByTestId('backdrop')
    fireEvent.click(backdrop)
    await waitForElementToBeRemoved(() => screen.queryByText('Drawer content'))
  })

  test('drawer form', async () => {
    renderWithTheme(
      <Drawer defaultOpen width="rail" content={<SimpleContent />}></Drawer>
    )
    expect(screen.getByText('Drawer content')).toHaveStyleRule(
      'width',
      '3.5rem'
    )
  })
})
