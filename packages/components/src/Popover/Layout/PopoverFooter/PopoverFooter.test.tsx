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
import { screen } from '@testing-library/react'
import { PopoverFooter } from './PopoverFooter'

describe('PopoverFooter', () => {
  test('basic ', () => {
    renderWithTheme(<PopoverFooter>Footer Text</PopoverFooter>)
    expect(screen.getByText('Footer Text')).toBeInTheDocument()
    expect(screen.getByText('Done')).toBeInTheDocument()
  })

  test('close prop with specified string ', () => {
    renderWithTheme(<PopoverFooter close="Footer">Footer Text</PopoverFooter>)
    expect(screen.getByText('Footer Text')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })

  test('close prop with specified element ', () => {
    const close = <button>close</button>

    renderWithTheme(<PopoverFooter close={close}>Footer Text</PopoverFooter>)
    expect(screen.getByText('Footer Text')).toBeInTheDocument()
    expect(screen.getByText('close')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
