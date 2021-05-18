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
    renderWithTheme(<TreeItem>Dimension</TreeItem>)
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

    expect(screen.queryByText('Detail')).not.toBeVisible()
    fireEvent.mouseEnter(screen.getByText('Label'), { bubbles: true })
    expect(screen.queryByText('Detail')).toBeVisible()
  })

  test('Triggers onClickWhitespace when indent padding is clicked, itemRole = "none", and labelBackgroundOnly = true', () => {
    // eslint-disable-next-line no-console
    console.warn = jest.fn()

    const onClickWhitespace = jest.fn()

    // This onClick should be ignored within ListItem since the item has itemRole="none"
    const onClick = jest.fn()

    renderWithTheme(
      <Tree defaultOpen label="Parent Tree" labelBackgroundOnly>
        <TreeItem
          onClick={onClick}
          onClickWhitespace={onClickWhitespace}
          itemRole="none"
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

    // eslint-disable-next-line no-console
    expect(console.warn).toHaveBeenCalled()

    // Expect indent padding click to trigger TreeItem onClickWhitespace (i.e. non-TreeItem child click)
    // Note: This selector may need to change once Tree ARIA roles are implemented
    fireEvent.click(screen.getAllByRole('none')[2])
    expect(onClickWhitespace).toHaveBeenCalledTimes(1)

    // Do not expect click on label to trigger click handlers
    fireEvent.click(screen.getByText('Item Label'))
    expect(onClick).not.toHaveBeenCalled()
    expect(onClickWhitespace).toHaveBeenCalledTimes(1)

    // Do not expect click on child button to trigger click handlers
    fireEvent.click(screen.getByText('Item Button'))
    expect(onClick).not.toHaveBeenCalled()
    expect(onClickWhitespace).toHaveBeenCalledTimes(1)

    // Do not expect detail click to trigger click handlers
    fireEvent.click(screen.getByText('Detail Button'))
    expect(onClick).not.toHaveBeenCalled()
    expect(onClickWhitespace).toHaveBeenCalledTimes(1)
  })

  test('keyColor', () => {
    renderWithTheme(
      <TreeItem selected keyColor>
        Whatever
      </TreeItem>
    )
    expect(screen.getByText('Whatever')).toHaveStyle('color: #262d33')
    expect(screen.getByRole('treeitem')).toHaveStyle('background: #f3f2ff')
  })

  test('warns onClickWhitespace && !labelBackgroundOnly', () => {
    const globalConsole = global.console
    const warnMock = jest.fn()

    global.console = ({
      warn: warnMock,
    } as unknown) as Console

    renderWithTheme(<TreeItem onClickWhitespace={jest.fn()}>Whatever</TreeItem>)
    expect(warnMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "onClickWhitespace is only necessary on <TreeItem> when labelBackgroundOnly is enabled; use onClick on <TreeItem> or to its children instead",
        ],
      ]
    `)

    global.console = globalConsole
  })
})
