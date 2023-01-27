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

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ListItem } from '../ListItem'
import { Basic, KeyboardNavigation, LongList } from './stories/index.stories'
import { List } from './List'

/* eslint-disable-next-line @typescript-eslint/unbound-method */
const globalGetBoundingClientRect = Element.prototype.getBoundingClientRect

describe('List', () => {
  describe('windowing', () => {
    beforeEach(() => {
      /* eslint-disable-next-line @typescript-eslint/unbound-method */
      Element.prototype.getBoundingClientRect = jest.fn(() => {
        return {
          bottom: 0,
          height: 360,
          left: 0,
          right: 0,
          toJSON: jest.fn(),
          top: 0,
          width: 260,
          x: 0,
          y: 0,
        }
      })
    })

    afterEach(() => {
      jest.resetAllMocks()
      /* eslint-disable-next-line @typescript-eslint/unbound-method */
      Element.prototype.getBoundingClientRect = globalGetBoundingClientRect
    })

    test('windows a long list', () => {
      renderWithTheme(<LongList />)

      expect(screen.getByRole('list')).toHaveStyle('height: 100%')
      /**
       * We expect the first 16 elements based on the math below:
       * 6 + 360px / 36px
       * (buffer elements) + (ul height from mock / default ListItem height)
       */
      expect(screen.getByText('0')).toBeVisible()
      expect(screen.getByText('15')).toBeVisible()
      expect(screen.queryByText('16')).not.toBeInTheDocument()

      /**
       * We expect the after container to have height: 107424px based on the math below:
       * (3000 - 16) * 36px
       * (total ListItems - displayed ListItems) * default ListItem height
       */
      const height = (3000 - 16) * 36
      expect(screen.queryByTestId('before')).not.toBeInTheDocument()
      expect(screen.getByTestId('after')).toHaveStyle(`height: ${height}px;`)
    })

    test('no "overflow: auto" without windowing', () => {
      renderWithTheme(<Basic />)

      expect(screen.getByRole('list')).not.toHaveStyle('overflow: auto')
    })
  })
  describe('color', () => {
    test('displays the correct background when selected', () => {
      renderWithTheme(
        <List color="key">
          <ListItem selected>Mozzarella</ListItem>
        </List>
      )
      expect(screen.getByText('Mozzarella')).toBeInTheDocument()
      expect(screen.getByText('Mozzarella').closest('button')).toHaveStyle(
        'background: #F3F2FF;'
      )
    })

    test('updates ListItem get its text color updated', () => {
      renderWithTheme(
        <List color="calculation">
          <ListItem selected>Mozzarella</ListItem>
        </List>
      )
      expect(screen.getByText('Mozzarella')).toBeInTheDocument()
      expect(screen.getByText('Mozzarella')).toHaveStyle('color: #319220;')
    })
  })

  describe('keyboard navigation', () => {
    test('up and down arrow keys traverse from item to item', () => {
      renderWithTheme(
        <>
          <button>Start Button</button>
          <KeyboardNavigation />
        </>
      )

      userEvent.click(screen.getByText('Start Button'))
      userEvent.tab()
      const listItems = screen.getAllByRole('listitem')
      const cheddar = listItems[0]
      const gouda = listItems[1]
      expect(cheddar).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(gouda).toHaveFocus()

      userEvent.keyboard('{arrowup}')
      expect(cheddar).toHaveFocus()
    })

    test('left and right arrow keys traverse within item from content to focusable detail elements', () => {
      renderWithTheme(
        <>
          <button>Start Button</button>
          <KeyboardNavigation />
        </>
      )

      userEvent.click(screen.getByText('Start Button'))
      userEvent.tab()
      const listItems = screen.getAllByRole('listitem')
      const cheddar = listItems[0]
      const gouda = listItems[1]
      expect(cheddar).toHaveFocus()

      userEvent.keyboard('{arrowright}')
      expect(screen.getByText('cheddar-button').closest('button')).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(gouda).toHaveFocus()

      userEvent.keyboard('{arrowright}')
      expect(screen.getByText('gouda-button').closest('button')).toHaveFocus()
    })
  })
})
