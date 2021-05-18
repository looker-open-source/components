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
import userEvent from '@testing-library/user-event'
import { Button } from '../Button'
import { Link } from '../Link'
import { InputText } from '../Form/Inputs/InputText'
import { Tree } from './Tree'
import { TreeCollection } from './TreeCollection'
import { TreeItem } from './TreeItem'

describe('TreeCollection', () => {
  const treeCollection = (
    <TreeCollection>
      <Tree defaultOpen label="Cheeses">
        <TreeItem
          detail={{
            content: (
              <>
                <Button>Nested Button</Button>
                <Link>Nested Link</Link>
                <InputText>Nested InputText</InputText>
              </>
            ),
            options: {
              accessory: true,
            },
          }}
        >
          Cheddar
        </TreeItem>
        <TreeItem>Gouda</TreeItem>
        <TreeItem>Swiss</TreeItem>
      </Tree>
    </TreeCollection>
  )

  test('renders children', () => {
    renderWithTheme(treeCollection)

    screen.getByText('Cheeses')
    screen.getByText('Cheddar')
    screen.getByText('Gouda')
    screen.getByText('Swiss')
  })

  describe('keyboard navigation', () => {
    /**
     * There's an odd issue where tabbing to the "Tree" at test start leads to tabIndex=-2 elements being focused.
     * The following tests have a "button" element since tabbing from another element to the "Tree" acts as expected.
     */
    test('starts focus at first item', () => {
      renderWithTheme(
        <>
          <button>My Button</button>
          {treeCollection}
        </>
      )
      const treeItems = screen.getAllByRole('treeitem')

      userEvent.click(screen.getByText('My Button'))
      expect(screen.getByText('My Button')).toHaveFocus()

      userEvent.tab()
      expect(treeItems[0]).toHaveFocus()
    })

    test('arrow up and down key presses move user from item to item', () => {
      renderWithTheme(
        <>
          <button>My Button</button>
          {treeCollection}
        </>
      )
      const treeItems = screen.getAllByRole('treeitem')
      const cheeses = treeItems[0]
      const cheddar = treeItems[1]
      const gouda = treeItems[2]
      const swiss = treeItems[3]

      userEvent.click(screen.getByText('My Button'))
      expect(screen.getByText('My Button')).toHaveFocus()

      userEvent.tab()

      expect(cheeses).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(cheddar).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(gouda).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(swiss).toHaveFocus()

      userEvent.keyboard('{arrowup}')
      expect(gouda).toHaveFocus()

      userEvent.keyboard('{arrowup}')
      expect(cheddar).toHaveFocus()

      userEvent.keyboard('{arrowup}')
      expect(cheeses).toHaveFocus()
    })

    test('left and righw arrow keys move user from item to buttons/links/inputs within item', () => {
      renderWithTheme(
        <>
          <button>My Button</button>
          {treeCollection}
        </>
      )

      const treeItems = screen.getAllByRole('treeitem')
      const cheeses = treeItems[0]
      const cheddar = treeItems[1]
      const nestedButton = screen.getByText('Nested Button')
      const nestedLink = screen.getByText('Nested Link')

      userEvent.click(screen.getByText('My Button'))
      expect(screen.getByText('My Button')).toHaveFocus()

      userEvent.tab()
      expect(cheeses).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(cheddar).toHaveFocus()

      userEvent.keyboard('{arrowright}')
      expect(nestedButton).toHaveFocus()

      userEvent.keyboard('{arrowright}')
      expect(nestedLink).toHaveFocus()

      userEvent.keyboard('{arrowright}')
      expect(screen.getByRole('textbox')).toHaveFocus()

      userEvent.keyboard('{arrowright}')
      expect(cheddar).toHaveFocus()
    })

    test('pressing arrow down from a detail element moves user to next item', () => {
      renderWithTheme(
        <>
          <button>My Button</button>
          {treeCollection}
        </>
      )

      const treeItems = screen.getAllByRole('treeitem')
      const cheeses = treeItems[0]
      const cheddar = treeItems[1]
      const gouda = treeItems[2]
      const nestedButton = screen.getByText('Nested Button')

      userEvent.click(screen.getByText('My Button'))
      expect(screen.getByText('My Button')).toHaveFocus()

      userEvent.tab()
      expect(cheeses).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(cheddar).toHaveFocus()

      userEvent.keyboard('{arrowright}')
      expect(nestedButton).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(gouda).toHaveFocus()
    })

    test('home button moves user to first treeitem element', () => {
      renderWithTheme(
        <>
          <button>My Button</button>
          {treeCollection}
        </>
      )

      const treeItems = screen.getAllByRole('treeitem')
      const cheeses = treeItems[0]
      const cheddar = treeItems[1]
      const swiss = treeItems[3]

      userEvent.click(screen.getByText('My Button'))
      expect(screen.getByText('My Button')).toHaveFocus()

      userEvent.tab()
      expect(cheeses).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(cheddar).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      userEvent.keyboard('{arrowdown}')
      expect(swiss).toHaveFocus()

      userEvent.keyboard('{Home}')
      expect(cheeses).toHaveFocus()
    })

    test('end button moves user to last treeitem element', () => {
      renderWithTheme(
        <>
          <button>My Button</button>
          {treeCollection}
        </>
      )

      const treeItems = screen.getAllByRole('treeitem')
      const cheeses = treeItems[0]
      const swiss = treeItems[3]

      userEvent.click(screen.getByText('My Button'))
      expect(screen.getByText('My Button')).toHaveFocus()

      userEvent.tab()
      expect(cheeses).toHaveFocus()

      userEvent.keyboard('{End}')
      expect(swiss).toHaveFocus()
    })
  })
})
