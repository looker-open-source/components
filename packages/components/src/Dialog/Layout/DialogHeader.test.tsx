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
import { assertSnapshot, renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { DialogHeader } from './DialogHeader'

describe('DialogHeader', () => {
  test('Snapshot', () => {
    assertSnapshot(
      <DialogHeader id="test-DialogHeader">
        The Heading for a Dialog
      </DialogHeader>
    )
  })

  test('Passes through DOM props', async () => {
    renderWithTheme(
      <DialogHeader aria-label="ARIA label">Heading</DialogHeader>
    )
    expect(await screen.findByLabelText('ARIA label')).toBeTruthy()
  })

  test('Close visible by default', async () => {
    renderWithTheme(<DialogHeader>Heading</DialogHeader>)
    expect(await screen.findByText('Close')).toBeTruthy()
  })

  test(`detail`, async () => {
    renderWithTheme(<DialogHeader detail="Hello world">Header</DialogHeader>)
    expect(await screen.findByText('Hello world')).toBeTruthy()
    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument()
  })

  test('hideClose', () => {
    renderWithTheme(<DialogHeader hideClose>Heading</DialogHeader>)
    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument()
  })
})
