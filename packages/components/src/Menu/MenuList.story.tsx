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
import { IconNames } from '@looker/icons'
import { MenuGroup, MenuGroupProps, MenuList, MenuItem, MenuItemProps } from '.'

const groups: { label?: string; items: MenuItemProps[] }[] = [
  {
    items: [
      {
        children: 'Edit Dashboard',
        detail: '⌘⇧E',
        icon: 'EditOutline' as IconNames,
      },
      {
        children: 'Get LookML',
        description: 'some description',
      },
      {
        children: 'Revert to original dashboard',
        detail: 'A longer detail',
        icon: 'Undo' as IconNames,
      },
    ],
    label: 'Options',
  },
  {
    items: [
      {
        children: 'Log Out',
        detail: 'esc',
      },
    ],
  },
]


const Template: Story<MenuListProps> = (args) => <MenuList {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: groups.map(({ label, items }, key) => (
    <MenuGroup label={label} key={key}>
      {items.map((item, i) => (
        <MenuItem
          key={i}
          icon={item.icon}
          detail={item.detail}
          description={item.description}
        >
          {item.children}
        </MenuItem>
      ))}
    </MenuGroup>
  )),
}

export default {
  component: MenuList,
  title: 'MenuList',
}
