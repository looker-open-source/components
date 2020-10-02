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
import { Story } from '@storybook/react/types-6-0'

import { MenuItem } from './MenuItem'
import { MenuList, MenuListProps } from './MenuList'

const ListTemplate: Story<MenuListProps> = (args) => <MenuList {...args} />

const MenuItemWithIcon = <MenuItem icon="User">Menu Item</MenuItem>
const MenuItemWithDetail = <MenuItem detail="A detail">Menu Item</MenuItem>
const MenuItemWithDetailAndIcon = (
  <MenuItem icon="User" detail="A detail">
    Menu Item
  </MenuItem>
)

const MenuItemWithDescription = (
  <MenuItem description="A description">Menu Item</MenuItem>
)
const MenuItemWithDescriptionAndIcon = (
  <MenuItem description="A description" icon="User">
    Menu Item
  </MenuItem>
)
const MenuItemWithDescriptionAndDetail = (
  <MenuItem description="A description" detail="A detail">
    Menu Item
  </MenuItem>
)
const MenuItemWithDescriptionAndDetailAndIcon = (
  <MenuItem description="A description" detail="A detail" icon="User">
    Menu Item
  </MenuItem>
)

const CurrentMenuItem = <MenuItem current>Menu Item</MenuItem>

export const SingleMenuItem = ListTemplate.bind({})
SingleMenuItem.args = {
  children: <MenuItem>Menu Item</MenuItem>,
}

export const SingleMenuItemWithIcon = ListTemplate.bind({})
SingleMenuItemWithIcon.args = {
  children: MenuItemWithIcon,
}

export const SingleMenuItemWithDetail = ListTemplate.bind({})
SingleMenuItemWithDetail.args = {
  children: MenuItemWithDetail,
}

export const SingleMenuItemWithDetailAndIcon = ListTemplate.bind({})
SingleMenuItemWithDetailAndIcon.args = {
  children: MenuItemWithDetailAndIcon,
}

export const SingleMenuItemWithDescription = ListTemplate.bind({})
SingleMenuItemWithDescription.args = {
  children: MenuItemWithDescription,
}

export const SingleMenuItemWithDescriptionAndIcon = ListTemplate.bind({})
SingleMenuItemWithDescriptionAndIcon.args = {
  children: MenuItemWithDescriptionAndIcon,
}

export const SingleMenuItemWithDescriptionAndDetail = ListTemplate.bind({})
SingleMenuItemWithDescriptionAndDetail.args = {
  children: MenuItemWithDescriptionAndDetail,
}

export const SingleMenuItemWithDescriptionAndDetailAndIcon = ListTemplate.bind(
  {}
)
SingleMenuItemWithDescriptionAndDetailAndIcon.args = {
  children: MenuItemWithDescriptionAndDetailAndIcon,
}

export const SingleMenuItemCurrent = ListTemplate.bind({})
SingleMenuItemCurrent.args = {
  children: CurrentMenuItem,
}

export default {
  component: MenuItem,
  title: 'MenuItem',
}
