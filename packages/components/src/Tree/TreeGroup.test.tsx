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
import { TreeGroup, Tree, TreeItem } from '.'

test('Renders label and children', () => {
  const { getByText } = renderWithTheme(
    <TreeGroup label="My Tree Group">My Children</TreeGroup>
  )

  getByText('My Tree Group')
  getByText('My Children')
})

test('Applies color prop to child Trees and TreeItems', () => {
  const { getByText } = renderWithTheme(
    <TreeGroup label="My Tree Group" color="red">
      <Tree label="My Tree" defaultOpen>
        <TreeItem>TreeItem 1</TreeItem>
      </Tree>
      <TreeItem>TreeItem 2</TreeItem>
    </TreeGroup>
  )

  expect(getByText('My Tree Group')).toHaveStyleRule('color: red')
  expect(getByText('My Tree')).toHaveStyleRule('color: red')
  expect(getByText('TreeItem 1')).toHaveStyleRule('color: red')
  expect(getByText('TreeItem 2')).toHaveStyleRule('color: red')
})
