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

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { NavTreeItem } from '.'

describe('NavTreeItem', () => {
  test('renders as a link when an href is passed in and disperses link-related props onto nested <a>', () => {
    renderWithTheme(
      <NavTreeItem href="https://google.com" target="_blank" rel="hello">
        Link
      </NavTreeItem>
    )

    const nestedLink = screen.getByRole('treeitem')
    expect(nestedLink.nodeName).toBe('A')
    expect(nestedLink).toHaveAttribute('href', 'https://google.com')
    expect(nestedLink).toHaveAttribute('target', '_blank')

    // Note: We expect links with target="_blank" to have "noopener noreferrer" autoappended to their rel prop
    expect(nestedLink).toHaveAttribute('rel', 'hello noopener noreferrer')
  })

  test('has rel="noopener noreferrer" when it has target="_blank" and no passed-in rel prop value', () => {
    renderWithTheme(
      <NavTreeItem itemRole="link" href="https://google.com" target="_blank">
        Link
      </NavTreeItem>
    )

    const nestedLink = screen.getByRole('treeitem')

    expect(nestedLink).toHaveAttribute('target', '_blank')
    expect(nestedLink).toHaveAttribute('href', 'https://google.com')
    expect(nestedLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  test('does not auto append "noopener noreferrer" to link without target="_blank"', () => {
    renderWithTheme(
      <NavTreeItem itemRole="link" rel="nogouda" href="https://google.com">
        Link
      </NavTreeItem>
    )

    const nestedLink = screen.getByRole('treeitem')

    expect(nestedLink).toHaveAttribute('href', 'https://google.com')
    expect(nestedLink).toHaveAttribute('rel', 'nogouda')
  })
})
