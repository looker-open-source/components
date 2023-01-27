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
import { act, fireEvent, screen } from '@testing-library/react'
import { NavList } from '../NavList'
import { Link } from './stories/index.stories'
import { NavTreeItem } from './NavTreeItem'
import { NavTree } from './NavTree'

const Basic = () => (
  <NavList>
    <NavTree defaultOpen label="Cheeses">
      <NavTreeItem parentIcon>Cheddar</NavTreeItem>
    </NavTree>
  </NavList>
)

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

const runTimers = () =>
  act(() => {
    jest.runOnlyPendingTimers()
  })

describe('NavTree', () => {
  test('ripple effect', () => {
    renderWithTheme(
      <NavList>
        <NavTree defaultOpen label="Cheeses">
          <NavTreeItem parentIcon>Cheddar</NavTreeItem>
        </NavTree>
      </NavList>
    )

    const navTree = screen.getByText('Cheddar').closest('button')
    expect(navTree).not.toHaveClass('bg-on fg-in')
    expect(navTree).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0',
    })

    navTree && fireEvent.focus(navTree)
    expect(navTree).toHaveClass('bg-on')

    navTree && fireEvent.mouseDown(navTree)
    expect(navTree).toHaveClass('bg-on fg-in')

    // foreground is locked for a minimum time to animate the ripple
    navTree && fireEvent.mouseUp(navTree)
    runTimers()
    expect(navTree).toHaveClass('bg-on fg-out')
    runTimers()
    expect(navTree).toHaveClass('bg-on')

    navTree && fireEvent.blur(navTree)
    expect(navTree).not.toHaveClass('bg-on fg-in')
    fireEvent.click(document)
  })

  test('Renders string disclosure label and detail', () => {
    renderWithTheme(<Basic />)

    screen.getByText('Cheeses')
    screen.getByText('Cheddar')
  })

  test('Triggers onClick on label click', () => {
    const labelClick = jest.fn()

    renderWithTheme(
      <NavTree onClick={labelClick} label="Parent">
        <NavTreeItem>Child</NavTreeItem>
      </NavTree>
    )

    fireEvent.click(screen.getByText('Parent'))
    expect(labelClick).toHaveBeenCalled()
  })

  describe('href provided', () => {
    test('Changes accordion open state on indicator click', () => {
      renderWithTheme(<Link />)

      const indicator = screen.getByLabelText('Google Link Indicator Open')
      screen.getByText('Some Item')
      fireEvent.click(indicator)
      screen.getByLabelText('Google Link Indicator Close')
      expect(screen.queryByText('Some Item')).not.toBeInTheDocument()
    })

    test('Does not change accordion open state on label click', () => {
      renderWithTheme(<Link />)

      const treeLabel = screen.getByText('Click me to go to Google')
      screen.getByText('Some Item')
      fireEvent.click(treeLabel)
      screen.getByText('Some Item')
    })

    test("Uses role 'treeitem' for main content container", () => {
      renderWithTheme(<Link />)

      // We expect both the NavTree and NavTreeItem child to both have role="treeitem"
      expect(screen.getAllByRole('treeitem').length).toBe(2)
    })

    test('Expects an indicatorLabel when href is provided', () => {
      renderWithTheme(
        // @ts-expect-error: indicatorLabel required when href is set
        <NavTree label="My NavTree" href="https://google.com">
          Hello
        </NavTree>
      )
    })

    test('Expects an href when indicatorLabel is provided', () => {
      renderWithTheme(
        // @ts-expect-error: href required when indicatorLabel is set
        <NavTree label="My NavTree" indicatorLabel="My NavTree Indicator">
          Hello
        </NavTree>
      )
    })
  })

  describe('href not provided', () => {
    test('Changes accordion open state on label click', () => {
      renderWithTheme(<Basic />)

      const treeLabel = screen.getByText('Cheeses')
      screen.getByText('Cheddar')
      fireEvent.click(treeLabel)
      expect(screen.queryByText('Cheddar')).not.toBeInTheDocument()
    })

    test("Uses role 'treeitem' for main content container", () => {
      renderWithTheme(<Basic />)

      // We expect both the NavTree and NavTreeItem child to both have role="treeitem"
      expect(screen.getAllByRole('treeitem').length).toBe(2)
    })
  })
})
