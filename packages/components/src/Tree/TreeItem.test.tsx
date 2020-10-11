/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

  test('Does not trigger onClick on detail click when detailAccessory === true', () => {
    const onClick = jest.fn()
    const { getByText } = renderWithTheme(
      <TreeItem detail="Detail" detailAccessory onClick={onClick}>
        Dimension
      </TreeItem>
    )
    fireEvent.click(getByText('Dimension'))
    expect(onClick).toHaveBeenCalledTimes(1)
    fireEvent.click(getByText('Detail'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('Triggers onClick on detail click when detailAccessory === false', () => {
    const onClick = jest.fn()
    const { getByText } = renderWithTheme(
      <TreeItem detail="Detail" detailAccessory={false} onClick={onClick}>
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
      <TreeItem detail="Detail" detailHoverDisclosure>
        Label
      </TreeItem>
    )

    expect(screen.queryByText('Detail')?.parentElement).toHaveStyleRule(
      'visibility',
      'hidden'
    )
    fireEvent.mouseEnter(screen.getByText('Label'), { bubbles: true })
    expect(screen.queryByText('Detail')?.parentElement).toHaveStyleRule(
      'visibility',
      'visible'
    )
  })

  test("Child TreeItem adopts Parent Tree's detailHoverDisclosure prop value (when Child TreeItem does not have detailHoverDisclosure prop value)", () => {
    renderWithTheme(
      <Tree
        label="Parent Tree Label"
        defaultOpen
        detail="Parent Tree Detail"
        detailHoverDisclosure
      >
        <TreeItem detail="Child Detail">Child Label</TreeItem>
      </Tree>
    )

    expect(screen.queryByText('Child Detail')?.parentElement).toHaveStyleRule(
      'visibility',
      'hidden'
    )
    fireEvent.mouseEnter(screen.getByText('Child Label'), { bubbles: true })
    expect(screen.queryByText('Child Detail')?.parentElement).toHaveStyleRule(
      'visibility',
      'visible'
    )
  })

  test("Child TreeItem's detailHoverDisclosure prop value overrides Parent Tree's detailHoverDisclosure prop value", () => {
    const { getByText } = renderWithTheme(
      <Tree
        label="Parent Tree Label"
        defaultOpen
        detail="Parent Tree Detail"
        detailHoverDisclosure
      >
        <TreeItem detail="Child TreeItem Detail" detailHoverDisclosure={false}>
          Child TreeItem Label
        </TreeItem>
      </Tree>
    )

    getByText('Child TreeItem Detail')
  })
})
