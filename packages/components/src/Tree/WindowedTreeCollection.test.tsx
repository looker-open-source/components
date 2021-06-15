/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { Windowing } from './stories/Windowing.story'

/* eslint-disable-next-line @typescript-eslint/unbound-method */
const globalGetBoundingClientRect = Element.prototype.getBoundingClientRect

describe('WindowedTreeCollection', () => {
  beforeEach(() => {
    /* eslint-disable-next-line @typescript-eslint/unbound-method */
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        bottom: 0,
        height: 342,
        left: 0,
        right: 0,
        toJSON: jest.fn(),
        top: 0,
        width: 260,
        x: 0,
        y: 0,
      }
    })
  })

  afterEach(() => {
    /* eslint-disable-next-line @typescript-eslint/unbound-method */
    Element.prototype.getBoundingClientRect = globalGetBoundingClientRect
  })

  test('no windowing for 100 or fewer visible items', () => {
    renderWithTheme(<Windowing noText />)
    expect(screen.getByText('0')).toBeVisible()
    expect(screen.getByText('99')).toBeVisible()
  })

  test('windowing for over 100 visible items', () => {
    renderWithTheme(<Windowing noText />)
    const openAllButton = screen.getByText('Toggle all open')
    fireEvent.click(openAllButton)

    expect(screen.getByText('0')).toBeVisible()
    // Visible nested tree item
    expect(screen.getByText('0-5-3')).toBeVisible()
    // Not-visible nested tree item
    expect(screen.queryByText('0-5-4')).not.toBeInTheDocument()
    expect(screen.queryByText('99')).not.toBeInTheDocument()

    // Collapse one of the trees
    const tree02 = screen.getByText('0-2')
    fireEvent.click(tree02)
    // In-window nested tree items
    expect(screen.getByText('0-5-4')).toBeVisible()
    expect(screen.getByText('0-8-0')).toBeVisible()
    // Below-window nested tree item
    expect(screen.queryByText('0-8-1')).not.toBeInTheDocument()
  })
})
