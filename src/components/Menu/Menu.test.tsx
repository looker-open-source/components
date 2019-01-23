import { shallow } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'

import { Menu } from './Menu'
import { MenuGroup } from './MenuGroup'
import { MenuItem } from './MenuItem'

test('Menu', () => {
  const menu = shallow(
    <Menu>
      <MenuItem>boo!</MenuItem>
    </Menu>
  )

  expect(menu).toMatchSnapshot()

  expect(menu.find('div').find('a'))
})

test('Menu - focusOnMount', () => {
  const menu = shallow(
    <Menu focusOnMount>
      <MenuItem>boo!</MenuItem>
    </Menu>
  )

  expect(menu).toMatchSnapshot()

  expect(menu.find('div').find('a'))
})

test('Menu - composed', () => {
  const menu = shallow(
    <Menu>
      <MenuGroup>
        <MenuItem icon="LogoRings">Looker</MenuItem>
        <MenuItem icon="Validate">Validate</MenuItem>
        <MenuItem icon="ChartPie">Pizza!</MenuItem>
      </MenuGroup>
      <MenuGroup canActivate label="Cheeses">
        <MenuItem>Gouda</MenuItem>
        <MenuItem>Cheddar</MenuItem>
        <MenuItem>Swiss</MenuItem>
      </MenuGroup>
      <MenuGroup>
        <MenuItem icon="Beaker">Scary Stuff</MenuItem>
      </MenuGroup>
    </Menu>
  )

  expect(menu).toMatchSnapshot()
})
