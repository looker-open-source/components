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
import {
  Basic,
  HeaderHideHeading,
  HeaderCloseButton,
  FooterExtraValue,
} from './PopoverLayout.story'

describe('PopoverLayout', () => {
  test('basic ', () => {
    renderWithTheme(<Basic />)
    expect(screen.getByText('Header Text')).toBeInTheDocument()
    expect(
      screen.getByText(/We the People of the United States/)
    ).toBeInTheDocument()
    expect(screen.getByText('Done')).toBeInTheDocument()
  })

  test('hideHeading prop - Heading will not be visually available but it will still properly announced in screen reader scenarios ', () => {
    renderWithTheme(<HeaderHideHeading />)
    expect(screen.queryByText('Header Text')).not.toBeInTheDocument()
    expect(
      screen.getByText(/We the People of the United States/)
    ).toBeInTheDocument()
  })

  test('HeaderCloseButton ', () => {
    renderWithTheme(<HeaderCloseButton />)
    expect(screen.getByText('Close')).toBeInTheDocument()
  })

  test('FooterExtraValue ', () => {
    renderWithTheme(<FooterExtraValue />)
    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(screen.getByText('Done')).toBeInTheDocument()
  })
})
