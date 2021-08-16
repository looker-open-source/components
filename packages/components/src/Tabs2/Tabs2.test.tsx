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

import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import { renderWithTheme } from '@looker/components-test-utils'
import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { Basic, Controlled, DefaultTab } from './Tabs2.story'

describe('Tabs2', () => {
  test('renders the correct number of navigation tabs with the Tab at index 0', () => {
    renderWithTheme(<Basic />)
    expect(screen.getAllByRole('tab')).toHaveLength(5)
    expect(
      screen.getByText("Here's awesome story about cats")
    ).toBeInTheDocument()
  })

  test('starts with Tab passed as defaultTabId', () => {
    renderWithTheme(<DefaultTab />)

    expect(
      screen.getByText('Cats are way better than dogs. Go to other tab')
    ).toBeInTheDocument()
  })

  test('clicking on tab opens correct panel', () => {
    renderWithTheme(<Basic />)

    expect(
      screen.queryByText("Here's awesome story about cats")
    ).toBeInTheDocument()
    expect(screen.queryByText('Are kinda smelly')).not.toBeInTheDocument()
    fireEvent.click(screen.getByText('Fish'))
    expect(
      screen.queryByText("Here's awesome story about cats")
    ).not.toBeInTheDocument()
    expect(screen.queryByText('Are kinda smelly')).toBeInTheDocument()
  })

  test('clicking on disabled tab does not change panel', () => {
    renderWithTheme(<Basic />)

    expect(
      screen.queryByText("Here's awesome story about cats")
    ).toBeInTheDocument()
    expect(screen.queryByText('not available')).not.toBeInTheDocument()
    fireEvent.click(screen.getByText('Human'))
    expect(
      screen.queryByText("Here's awesome story about cats")
    ).toBeInTheDocument()
    expect(screen.queryByText('not available')).not.toBeInTheDocument()
  })

  test('controlled environment', () => {
    renderWithTheme(<Controlled />)

    expect(
      screen.queryByText("Here's awesome story about cats")
    ).toBeInTheDocument()

    fireEvent.click(screen.getByText('check out dogs'))

    expect(
      screen.queryByText('Cats are way better than dogs. Go to other tab')
    ).toBeInTheDocument()
  })
})
