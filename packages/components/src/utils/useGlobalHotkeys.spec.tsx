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

import '@testing-library/jest-dom/extend-expect'
import {
  fireEvent,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import CloseIconButton from '../Dialog/stories/CloseIconButton'
import OverlayOpenDialog from '../Popover/stories/OverlayOpenDialog'

describe('useGlobalHotkeys', () => {
  test('intersecting elements', async () => {
    renderWithTheme(<CloseIconButton />)

    fireEvent.click(screen.getByText('Open Dialog'))
    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeVisible()

    // Close IconButton will have tooltip disabled while modal is "busy"
    await waitFor(() => {
      expect(dialog).not.toHaveAttribute('aria-busy')
    })
    // Open the tooltip
    fireEvent.mouseOver(within(dialog).getByRole('button'))
    const tooltip = await screen.findByRole('tooltip')
    const tooltipSurface = tooltip.closest('div') as HTMLElement

    // elementsFromPoint is used to determine stacking order when elements intersect
    // tooltip is on top
    const spy = jest
      .spyOn(document, 'elementsFromPoint')
      .mockReturnValue([tooltipSurface, dialog])

    // 1st escape closes the tooltip
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.getByRole('dialog')).toBeVisible()
    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    // 2nd escape closes the dialog
    fireEvent.keyDown(document, { key: 'Escape' })
    await waitForElementToBeRemoved(() => screen.queryByRole('dialog'))

    spy.mockRestore()
  })

  test('non-intersecting elements', async () => {
    renderWithTheme(<OverlayOpenDialog />)
    const popoverButton = screen.getByText('Open Popover')
    fireEvent.click(popoverButton)
    const dialogButton = within(screen.getByRole('dialog')).getByText(
      'Open Dialog'
    )
    fireEvent.click(dialogButton)

    const dialogs = screen.getAllByRole('dialog')
    expect(dialogs).toHaveLength(2)

    // Wait for the focus trap to move focus into the dialog
    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveFocus()
    })

    // Elements are sorted by intersection, focus, & stacking order
    // Mock getBoundingClientRect to test non-intersecting components
    const dialogRect = {
      bottom: 506,
      height: 466,
      left: 429,
      right: 1069,
      toJSON: jest.fn(),
      top: 40,
      width: 640,
      x: 429,
      y: 40,
    }
    const popoverRect = {
      bottom: 528,
      height: 388,
      left: 227.5,
      right: 408.6171875,
      toJSON: jest.fn(),
      top: 140,
      width: 181.1171875,
      x: 227.5,
      y: 140,
    }
    // Since it's used in a sort function, this gets called 4 times in the order below
    const rectSpy = jest
      .spyOn(Element.prototype, 'getBoundingClientRect')
      .mockReturnValueOnce(dialogRect)
      .mockReturnValueOnce(popoverRect)
      .mockReturnValueOnce(popoverRect)
      .mockReturnValueOnce(dialogRect)

    fireEvent.keyDown(document, { key: 'Escape' })
    rectSpy.mockRestore()

    await waitForElementToBeRemoved(() =>
      screen.queryByText('Toggle Scroll Lock')
    )
    expect(screen.getByRole('dialog')).toBeVisible()

    fireEvent.click(document)
  })
})
