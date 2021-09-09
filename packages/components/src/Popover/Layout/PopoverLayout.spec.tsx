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
import { composeStories } from '@storybook/testing-react'
import { screen } from '@testing-library/react'
import * as stories from './PopoverLayout.stories'

const { Basic, FooterCloseButton, Full, Header, HeaderHideHeading } =
  composeStories(stories)

describe('PopoverLayout', () => {
  test('basic display has footer ', () => {
    renderWithTheme(<Basic />)
    expect(
      screen.getByText(/We the People of the United States/)
    ).toBeInTheDocument()
    expect(screen.getByText('Done')).toBeInTheDocument()
  })

  test('hideHeading prop hides Header', () => {
    renderWithTheme(<HeaderHideHeading />)
    const hiddenHeader = screen.getByText('Header text')
    expect(hiddenHeader).toBeInTheDocument()
    expect(hiddenHeader).toHaveStyle('clip: rect(1px, 1px, 1px, 1px)')
  })

  test('Header and no Footer ', () => {
    renderWithTheme(<Header />)
    expect(screen.getByText('Close')).toBeInTheDocument()
    expect(screen.queryByText('Done')).not.toBeInTheDocument()
  })

  test('Footer with CloseButton', () => {
    renderWithTheme(<FooterCloseButton />)
    expect(screen.getByText('Close')).toBeInTheDocument()
    expect(screen.queryByText('Done')).not.toBeInTheDocument()
  })

  test('With header & footer display only "Done" button', () => {
    renderWithTheme(<Full />)
    expect(screen.queryByText('Close')).not.toBeInTheDocument()
    expect(screen.getByText('Done')).toBeInTheDocument()
  })

  test('FooterExtraValue ', () => {
    renderWithTheme(<Full />)
    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(screen.getByText('Done')).toBeInTheDocument()
  })
})
