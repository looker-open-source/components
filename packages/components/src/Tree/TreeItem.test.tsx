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
import { fireEvent, screen } from '@testing-library/react'
import { Tree, TreeItem } from '.'

describe('TreeItem', () => {
  test('Renders children', () => {
    const { getByText } = renderWithTheme(<TreeItem>Dimension</TreeItem>)
    getByText('Dimension')
  })

  test('Does not trigger onClick on detail click when accessory === true', () => {
    const onClick = jest.fn()
    const { getByText } = renderWithTheme(
      <TreeItem
        detail={{ content: 'Detail', options: { accessory: true } }}
        onClick={onClick}
      >
        Dimension
      </TreeItem>
    )
    fireEvent.click(getByText('Dimension'))
    expect(onClick).toHaveBeenCalledTimes(1)
    fireEvent.click(getByText('Detail'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('Triggers onClick on detail click when accessory === false', () => {
    const onClick = jest.fn()
    const { getByText } = renderWithTheme(
      <TreeItem
        detail={{ content: 'Detail', options: { accessory: false } }}
        onClick={onClick}
      >
        Dimension
      </TreeItem>
    )
    fireEvent.click(getByText('Dimension'))
    expect(onClick).toHaveBeenCalledTimes(1)
    fireEvent.click(getByText('Detail'))
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
    expect(screen.queryByText('Detail')).toBeInTheDocument()
  })

  test('Triggers onClick when indent padding is clicked when parent Tree has labelBackgroundOnly', () => {
    const onClick = jest.fn()
    renderWithTheme(
      <Tree defaultOpen label="Parent Tree" labelBackgroundOnly>
        <TreeItem
          itemRole="none"
          onClick={onClick}
          detail={{
            content: <button>Detail Button</button>,
            options: { accessory: true },
          }}
        >
          <div>
            <p>Item Label</p>
            <button>Item Button</button>
          </div>
        </TreeItem>
      </Tree>
    )

    // Expect indent padding click to trigger TreeItem onClick (i.e. non-TreeItem child click)
    // Note: This selector needs to change once Tree ARIA roles are implemented
    fireEvent.click(screen.getAllByRole('listitem')[1])
    expect(onClick).toHaveBeenCalledTimes(1)

    // Expect click on label to trigger label click handler (but not wrapper handler)
    fireEvent.click(screen.getByText('Item Label'))
    expect(onClick).toHaveBeenCalledTimes(2)

    // Expect click on child button to trigger label click handler (but not wrapper handler)
    fireEvent.click(screen.getByText('Item Button'))
    expect(onClick).toHaveBeenCalledTimes(3)

    // Expect detail click to not trigger either handler since accessory is enabled
    fireEvent.click(screen.getByText('Detail Button'))
    expect(onClick).toHaveBeenCalledTimes(3)
  })
})
