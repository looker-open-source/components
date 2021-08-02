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
import { ParentIcon } from './NavTree.story'
import { NavTreeItem } from './NavTreeItem'
import { NavTree } from './NavTree'

describe('NavTree', () => {
  test('Renders string disclosure label and detail', () => {
    renderWithTheme(<ParentIcon />)

    screen.getByText('Parent Tree with Icon')
    screen.getByText('Cheddar')
  })

  test('Changes accordion open state on indicator click', () => {
    renderWithTheme(<ParentIcon />)

    const indicator = screen.getAllByTestId('accordion-indicator')[0]
    screen.getByText('Cheddar')
    fireEvent.click(indicator)
    expect(screen.queryByText('Cheddar')).not.toBeInTheDocument()
  })

  test('Does not change accordion open state on label click', () => {
    renderWithTheme(<ParentIcon />)

    const treeLabel = screen.getByText('Parent Tree with Icon')
    screen.getByText('Cheddar')
    fireEvent.click(treeLabel)
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
})
