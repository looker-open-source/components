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

import React, { useState } from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent } from '@testing-library/react'
import { Tree } from '.'

describe('Tree', () => {
  test('Renders disclosure label and detail', () => {
    const { getByText } = renderWithTheme(
      <Tree label="Tree Label" detail="Tree Detail">
        Hello World
      </Tree>
    )

    getByText('Tree Label')
    getByText('Tree Detail')
  })

  test('Renders and hides children on disclosure click', () => {
    const { getByText, queryByText } = renderWithTheme(
      <Tree label="Tree Label">Hello World</Tree>
    )

    const treeLabel = getByText('Tree Label')
    expect(queryByText('Hello World')).not.toBeInTheDocument()
    fireEvent.click(treeLabel)
    getByText('Hello World')
    fireEvent.click(treeLabel)
    expect(queryByText('Hello World')).not.toBeInTheDocument()
  })

  test('Shows children by default when defaultOpen is true (and uses uncontrolled open state)', () => {
    const { getByText } = renderWithTheme(
      <Tree label="Tree Label" defaultOpen>
        Hello World
      </Tree>
    )
    getByText('Hello World')
  })

  test('Handles controlled open state via isOpen and toggleOpen props', () => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(true)

      return (
        <Tree label="Tree Label" isOpen={isOpen} toggleOpen={setIsOpen}>
          Hello World
        </Tree>
      )
    }

    const { getByText, queryByText } = renderWithTheme(<Wrapper />)

    const treeLabel = getByText('Tree Label')
    getByText('Hello World')
    fireEvent.click(treeLabel)
    expect(queryByText('Hello World')).not.toBeInTheDocument()
  })

  test('Triggers onClose and onOpen callbacks when provided via props', () => {
    const onClose = jest.fn()
    const onOpen = jest.fn()

    const { getByText } = renderWithTheme(
      <Tree label="Tree Label" onClose={onClose} onOpen={onOpen}>
        Hello World
      </Tree>
    )

    const treeLabel = getByText('Tree Label')
    fireEvent.click(treeLabel)
    expect(onOpen).toHaveBeenCalledTimes(1)
    fireEvent.click(treeLabel)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  test('Clicks on detail do not open the Tree or trigger callbacks when detailAccessory === true', () => {
    const onOpen = jest.fn()
    const onClose = jest.fn()
    const { getByText, queryByText } = renderWithTheme(
      <Tree
        label="Tree Label"
        detail="Tree Detail"
        detailAccessory
        onClose={onClose}
        onOpen={onOpen}
      >
        Hello World
      </Tree>
    )

    const detail = getByText('Tree Detail')

    expect(queryByText('Hello World')).not.toBeInTheDocument()
    fireEvent.click(detail)
    expect(queryByText('Hello World')).not.toBeInTheDocument()
    expect(onOpen).toHaveBeenCalledTimes(0)
    fireEvent.click(detail)
    expect(queryByText('Hello World')).not.toBeInTheDocument()
    expect(onClose).toHaveBeenCalledTimes(0)
  })

  test('Clicks on detail do not open the Tree or trigger callbacks when detailAccessory === false', () => {
    const onOpen = jest.fn()
    const onClose = jest.fn()
    const { getByText, queryByText } = renderWithTheme(
      <Tree
        label="Tree Label"
        detail="Tree Detail"
        detailAccessory={false}
        onClose={onClose}
        onOpen={onOpen}
      >
        Hello World
      </Tree>
    )

    const detail = getByText('Tree Detail')

    expect(queryByText('Hello World')).not.toBeInTheDocument()
    fireEvent.click(detail)
    expect(queryByText('Hello World')).not.toBeInTheDocument()
    expect(onOpen).toHaveBeenCalledTimes(0)
    fireEvent.click(detail)
    expect(queryByText('Hello World')).not.toBeInTheDocument()
    expect(onClose).toHaveBeenCalledTimes(0)
  })

  test('Shows and hides detail on Tree hover when detailHoverDisclosure === true', () => {
    const { getByText, queryByText } = renderWithTheme(
      <Tree label="Tree Label" detail="Tree Detail" detailHoverDisclosure>
        Hello World
      </Tree>
    )

    expect(queryByText('Tree Detail')).not.toBeInTheDocument()
    fireEvent.mouseEnter(getByText('Tree Label'), { bubbles: true })
    getByText('Tree Detail')
  })

  test("Child Tree adopts Parent Tree's detailHoverDisclosure prop value (when Child Tree does not have prop value)", () => {
    const { getByText, queryByText } = renderWithTheme(
      <Tree
        label="Parent Tree Label"
        detail="Parent Tree Detail"
        detailHoverDisclosure
        defaultOpen
      >
        <Tree label="Child Tree Label" detail="Child Tree Detail">
          Hello World
        </Tree>
      </Tree>
    )

    expect(queryByText('Child Tree Detail')).not.toBeInTheDocument()
    fireEvent.mouseEnter(getByText('Child Tree Label'), { bubbles: true })
    getByText('Child Tree Detail')
  })

  test("Child Tree detailHoverDisclosure prop value overrides Parent Tree's detailHoverDisclosure prop value", () => {
    const { getByText } = renderWithTheme(
      <Tree
        label="Parent Tree Label"
        defaultOpen
        detail="Parent Tree Detail"
        detailHoverDisclosure
      >
        <Tree
          label="Child Tree Label"
          detail="Child Tree Detail"
          detailHoverDisclosure={false}
        >
          Hello World
        </Tree>
      </Tree>
    )

    getByText('Child Tree Detail')
  })
})
