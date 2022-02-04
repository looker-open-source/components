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
import { fireEvent, screen } from '@testing-library/react'
import { TreeItem } from '.'

describe('TreeItem', () => {
  test('Renders children', () => {
    renderWithTheme(<TreeItem>Dimension</TreeItem>)
    screen.getByText('Dimension')
  })

  test('Accepts onCLick and onKeyDown props', () => {
    const handleClick = jest.fn()
    const handleKeyDown = jest.fn()
    renderWithTheme(
      <TreeItem onClick={handleClick} onKeyDown={handleKeyDown}>
        Dimension
      </TreeItem>
    )
    screen.getByText('Dimension')
  })

  test('Does not trigger onClick on detail click when accessory === true', () => {
    const onClick = jest.fn()
    renderWithTheme(
      <TreeItem
        detail={{ content: 'Detail', options: { accessory: true } }}
        onClick={onClick}
      >
        Dimension
      </TreeItem>
    )
    fireEvent.click(screen.getByText('Dimension'))
    expect(onClick).toHaveBeenCalledTimes(1)
    fireEvent.click(screen.getByText('Detail'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('Triggers onClick on detail click when accessory === false', () => {
    const onClick = jest.fn()
    renderWithTheme(
      <TreeItem
        detail={{ content: 'Detail', options: { accessory: false } }}
        onClick={onClick}
      >
        Dimension
      </TreeItem>
    )
    fireEvent.click(screen.getByText('Dimension'))
    expect(onClick).toHaveBeenCalledTimes(1)
    fireEvent.click(screen.getByText('Detail'))
    expect(onClick).toHaveBeenCalledTimes(2)
  })

  test('Hides and shows detail when detailHoverDisclosure is true', () => {
    renderWithTheme(
      <TreeItem
        detail={{ content: 'Detail', options: { hoverDisclosure: true } }}
      >
        Label
      </TreeItem>
    )

    expect(screen.queryByText('Detail')).not.toBeInTheDocument()
    fireEvent.mouseEnter(screen.getByText('Label'), { bubbles: true })
    expect(screen.getByText('Detail')).toBeInTheDocument()
  })

  test('theme.colors.key', () => {
    renderWithTheme(
      <TreeItem selected color="key">
        Whatever
      </TreeItem>
    )
    expect(screen.getByText('Whatever')).toHaveStyle('color: #262d33')
    expect(screen.getByRole('treeitem')).toHaveStyle('background: #f3f2ff')
  })

  describe('link behavior', () => {
    test('renders as a link when itemRole="link" and disperses link-related props onto nested <a>', () => {
      renderWithTheme(
        <TreeItem
          itemRole="link"
          href="https://google.com"
          target="_blank"
          rel="hello"
        >
          Link
        </TreeItem>
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
        <TreeItem itemRole="link" href="https://google.com" target="_blank">
          Link
        </TreeItem>
      )

      const nestedLink = screen.getByRole('treeitem')

      expect(nestedLink).toHaveAttribute('target', '_blank')
      expect(nestedLink).toHaveAttribute('href', 'https://google.com')
      expect(nestedLink).toHaveAttribute('rel', 'noopener noreferrer')
    })

    test('does not auto append "noopener noreferrer" to link without target="_blank"', () => {
      renderWithTheme(
        <TreeItem itemRole="link" rel="nogouda" href="https://google.com">
          Link
        </TreeItem>
      )

      const nestedLink = screen.getByRole('treeitem')

      expect(nestedLink).toHaveAttribute('href', 'https://google.com')
      expect(nestedLink).toHaveAttribute('rel', 'nogouda')
    })
  })
})
