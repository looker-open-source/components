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
    expect(noBorder.parentNode).toHaveStyle('border-bottom: none')

    const hasBorder = getByText('Has border')
    expect(hasBorder.parentNode).toHaveStyle('border-bottom: 1px solid #DEE1E5')
  })
})
