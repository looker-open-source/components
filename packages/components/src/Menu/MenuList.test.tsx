/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import { mount, shallow } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { palette, theme } from '@looker/design-tokens'
import { MenuGroup } from './MenuGroup'
import { MenuItem } from './MenuItem'
import { MenuList } from './MenuList'

test('Menu', () => {
  const menu = shallow(
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
  const menu = shallow(
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

const WrappedMenuItem = () => <MenuItem icon="Beaker">Scary Stuff</MenuItem>

test('Menu - compact', () => {
  const menu = mount(
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )

  expect(menu).toMatchSnapshot()
})

test('Menu - menu customization', () => {
  const menuCustomizations =
    // tslint:disable:object-literal-sort-keys
    {
      bg: palette.purple500,
      color: palette.purple200,
      current: {
        bg: palette.purple200,
        color: palette.purple900,
        iconColor: palette.purple500,
      },
      hover: {
        bg: palette.purple700,
        color: palette.white,
        iconColor: palette.purple100,
      },
      iconColor: palette.purple300,
      iconSize: 20,
      marker: {
        color: palette.purple900,
        size: 10,
      },
      // tslint:disable:enable-literal-sort-keys
    }

  const menu = shallow(
    <MenuList customizationProps={menuCustomizations}>
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
