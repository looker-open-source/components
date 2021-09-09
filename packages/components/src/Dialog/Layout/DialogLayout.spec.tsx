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
import { render, screen } from '@testing-library/react'
import { ConstitutionShort } from '../../__mocks__/Constitution'
import * as stories from './DialogLayout.stories'
import { DialogLayout } from './DialogLayout'

const { Basic, HeaderDetail, HeaderCloseButton } = composeStories(stories)

describe('DialogLayout', () => {
  test('Basic ', () => {
    render(<Basic />)
    expect(
      screen.getByText(/We the People of the United States/)
    ).toBeInTheDocument()
  })

  test('Replaces the built-in `IconButton` with an arbitrary ReactNode', () => {
    renderWithTheme(<HeaderDetail />)
    expect(screen.queryByText('Header text')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
  })

  test('HeaderCloseButton ', () => {
    renderWithTheme(<HeaderCloseButton />)
    expect(screen.getByText('Close')).toBeInTheDocument()
  })

  test('FooterSecondary ', () => {
    renderWithTheme(
      <DialogLayout footerSecondary="Cancel" footer="Footer text">
        <ConstitutionShort />
      </DialogLayout>
    )
    expect(screen.getByText('Footer text')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
  })

  test('FooterSecondary without footer causes TS Exception', () => {
    // @ts-expect-error footerSecondary must be paired with footer
    renderWithTheme(<DialogLayout footerSecondary="problem" />)
  })
})
