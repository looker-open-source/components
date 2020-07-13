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

import 'jest-styled-components'
import React from 'react'
import { assertSnapshot, renderWithTheme } from '@looker/components-test-utils'

import { Box } from '../Layout'
import { MenuGroup } from './MenuGroup'
import { MenuItem } from './MenuItem'
import { MenuList } from './MenuList'

test('MenuGroup', () => {
  assertSnapshot(
    <MenuGroup>
      <MenuItem>who!</MenuItem>
    </MenuGroup>
  )
})

test('MenuGroup - label', () => {
  assertSnapshot(
    <MenuGroup label="Questions">
      <MenuItem>what?</MenuItem>
      <MenuItem>who?</MenuItem>
      <MenuItem>where?</MenuItem>
    </MenuGroup>
  )
})

test('MenuGroup - JSX label', () => {
  assertSnapshot(
    <MenuGroup label={<Box>Questions</Box>}>
      <MenuItem>what?</MenuItem>
      <MenuItem>who?</MenuItem>
      <MenuItem>where?</MenuItem>
    </MenuGroup>
  )
})

test('MenuGroup - indents MenuItem with no icon when a sibling within the same group has an icon', () => {
  const { getByTestId } = renderWithTheme(
    <MenuGroup>
      <MenuItem icon="Calendar">Gouda</MenuItem>
      <MenuItem id="cheddar">Cheddar</MenuItem>
    </MenuGroup>
  )

  getByTestId('menu-item-cheddar-icon-placeholder')
})

test('MenuGroup - indents MenuItem with no icon when a sibling outside of the group has an icon', () => {
  const { getByTestId } = renderWithTheme(
    <MenuList>
      <MenuItem icon="Calendar">Gouda</MenuItem>
      <MenuGroup>
        <MenuItem id="cheddar">Cheddar</MenuItem>
      </MenuGroup>
    </MenuList>
  )

  getByTestId('menu-item-cheddar-icon-placeholder')
})

test('MenuGroup - does not indent MenuItems with no icon if all siblings do not have icons', () => {
  const { queryByTestId } = renderWithTheme(
    <MenuGroup>
      <MenuItem>Gouda</MenuItem>
      <MenuItem id="cheddar">Cheddar</MenuItem>
    </MenuGroup>
  )

  expect(
    queryByTestId('menu-item-cheddar-icon-placeholder')
  ).not.toBeInTheDocument()
})
