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
import * as React from 'react'
import {
  mountWithTheme,
  shallowWithTheme,
  renderWithTheme,
} from '@looker/components-test-utils'
import { MenuGroup } from './MenuGroup'
import { MenuItem } from './MenuItem'
import { MenuList } from './MenuList'

test('Menu', () => {
  const menu = shallowWithTheme(
    <MenuList>
      <MenuItem>boo!</MenuItem>
      <MenuItem itemRole="link" href="test">
        boo!
      </MenuItem>
    </MenuList>
  )

  expect(menu).toMatchSnapshot()
  expect(menu.find('div').find('a'))
})

test('Menu - composed', () => {
  const menu = shallowWithTheme(
    <MenuList>
      <MenuGroup>
        <MenuItem icon="LogoRings">Looker</MenuItem>
        <MenuItem icon="Validate">Validate</MenuItem>
        <MenuItem icon="ChartPie">Pizza!</MenuItem>
      </MenuGroup>
      <MenuGroup label="Cheeses">
        <MenuItem>Gouda</MenuItem>
        <MenuItem>Cheddar</MenuItem>
        <MenuItem>Swiss</MenuItem>
      </MenuGroup>
      <MenuGroup>
        <MenuItem icon="Beaker">Scary Stuff</MenuItem>
      </MenuGroup>
    </MenuList>
  )

  expect(menu).toMatchSnapshot()
})

// Tests that wrapping MenuItem in another component doesn't break styling inheritance
const WrappedMenuItem = () => <MenuItem icon="Beaker">Scary Stuff</MenuItem>

test('Menu - compact', () => {
  const menu = mountWithTheme(
    <MenuList compact>
      <MenuGroup>
        <MenuItem icon="LogoRings">Looker</MenuItem>
        <MenuItem icon="Validate">Validate</MenuItem>
        <MenuItem icon="ChartPie">Pizza!</MenuItem>
      </MenuGroup>
      <MenuGroup label="Cheeses">
        <MenuItem>Gouda</MenuItem>
        <MenuItem>Cheddar</MenuItem>
        <MenuItem>Swiss</MenuItem>
      </MenuGroup>
      <MenuGroup>
        <WrappedMenuItem />
      </MenuGroup>
    </MenuList>
  )

  expect(menu).toMatchSnapshot()
})

test('Menu - allocates space for MenuItem when a sibling has an icon', () => {
  const { getByTestId } = renderWithTheme(
    <MenuList>
      <MenuItem icon="Calendar">Gouda</MenuItem>
      <MenuItem id="cheddar">Cheddar</MenuItem>
    </MenuList>
  )

  getByTestId('menu-item-cheddar-icon-placeholder')
})
