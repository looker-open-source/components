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
import userEvent from '@testing-library/user-event'
import { Basic, KeyboardNavigation } from './stories/index.stories'
describe('NavList', () => {
  test('display with theme.colors.key', () => {
    renderWithTheme(<Basic />)

    const listItem = screen.getByText('Explore')
    expect(listItem).toHaveStyle('color: #6c43e0;')
    expect(screen.getByText('Interesting details')).toHaveStyle(
      'color: #6c43e0'
    )
    expect(screen.getByText('Description')).toHaveStyle('color: #6c43e0;')
  })

  describe('keyboard navigation', () => {
    test('up and down arrow keys traverse from item to item', () => {
      renderWithTheme(
        <>
          <button>Start Button</button>
          <KeyboardNavigation />
        </>
      )

      // getByRole('listitem') picks up <li> containers, so need more specificity to grab the focusable container in <ListItem>
      const listItem = screen
        .getByText('List Item')
        .closest('[role="listitem"]')

      const items = [listItem, ...screen.getAllByRole('treeitem')]

      userEvent.click(screen.getByText('Start Button'))

      userEvent.tab()
      expect(items[0]).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(items[1]).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(items[2]).toHaveFocus()
    })

    test('left and right arrow keys traverse within an item from content to focusable detail elements', () => {
      renderWithTheme(
        <>
          <button>Start Button</button>
          <KeyboardNavigation />
        </>
      )

      const items = [
        screen.getByText('List Item').closest('[role="listitem"]'),
        ...screen.getAllByRole('treeitem'),
      ]

      userEvent.click(screen.getByText('Start Button'))

      userEvent.tab()
      expect(items[0]).toHaveFocus()
      userEvent.keyboard('{arrowright}')
      expect(
        screen.getByText('list-item-detail-button').closest('button')
      ).toHaveFocus()
      userEvent.keyboard('{arrowleft}')
      expect(items[0]).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(items[1]).toHaveFocus()
      userEvent.keyboard('{arrowright}')
      screen.getByText('nav-tree-detail-button').closest('button')
      userEvent.keyboard('{arrowleft}')
      expect(items[1]).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(items[2]).toHaveFocus()
      userEvent.keyboard('{arrowright}')
      screen.getByText('nav-tree-item-detail-button').closest('button')
      userEvent.keyboard('{arrowleft}')
      expect(items[2]).toHaveFocus()
    })

    test('indicator icon is focusable via keyboard and controls open/close state', () => {
      renderWithTheme(
        <>
          <button>Start Button</button>
          <KeyboardNavigation />
        </>
      )

      userEvent.click(screen.getByText('Start Button'))
      userEvent.tab()

      const navTreeLinkIndex = 3
      const navTreeLink = screen
        .getByText('Nav Tree Link')
        .closest('[role="treeitem"]')

      // Press down arrow thrice
      for (let i = 0; i < navTreeLinkIndex; i++) {
        userEvent.keyboard('{arrowdown}')
      }

      expect(navTreeLink).toHaveFocus()

      userEvent.keyboard('{arrowleft}')
      expect(
        screen
          .getByLabelText('Nav Tree Link Indicator Open')
          .closest('[tabindex="-1"]')
      ).toHaveFocus()
      expect(screen.getByText('Now You See Me')).toBeInTheDocument()

      userEvent.keyboard('{enter}')
      expect(screen.queryByText('Now You See Me')).not.toBeInTheDocument()
    })
  })
})
