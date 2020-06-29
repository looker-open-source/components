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
import { DialogContent } from './DialogContent'

describe('DialogContent', () => {
  test('Snapshot', () => {
    assertSnapshot(<DialogContent>Stuff</DialogContent>)
  })

  test('Snapshot - No overflow', () => {
    assertSnapshot(
      <DialogContent>
        <div style={{ height: '4rem' }}>Stuff</div>
      </DialogContent>
    )
  })

  test('borderBottom', () => {
    const { getByText } = renderWithTheme(
      <>
        <DialogContent>No border</DialogContent>
        <DialogContent borderBottom>Has border</DialogContent>
      </>
    )

    const noBorder = getByText('No border')
    expect(noBorder).toBeTruthy()
    const noBorderOuter = noBorder !== null ? noBorder.parentNode : undefined
    expect(noBorderOuter).toBeTruthy()
    const noBorderStyle = window.getComputedStyle(noBorderOuter as Element)
    expect(noBorderStyle.borderBottom).toBeFalsy()

    const hasBorder = getByText('Has border')
    expect(hasBorder).toBeTruthy()
    const hasBorderOuter = hasBorder !== null ? hasBorder.parentNode : undefined
    expect(hasBorderOuter).toBeTruthy()
    const hasBorderStyle = window.getComputedStyle(hasBorderOuter as Element)
    expect(hasBorderStyle.borderBottom).toBe('1px solid #DEE1E5')
  })
})
