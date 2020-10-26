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
import {
  MenuGroup,
  MenuGroupProps,
  MenuList,
  MenuItem,
  MenuItemProps,
} from './'

const itemList1: MenuItemProps[] = [
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
]

const itemList2: MenuItemProps[] = [
  {
    children: 'Log Out',
    detail: 'esc',
  },
]

interface CustomStoryProps extends MenuGroupProps {
  icons?: boolean
  detail?: boolean
  description?: boolean
}

const Template: Story<CustomStoryProps> = (args) => {
  return (
    <MenuList>
      <MenuGroup {...args}>
        {itemList1.map((item, i) => (
          <MenuItem
            key={i}
            icon={args.icons ? item.icon : undefined}
            detail={args.detail ? item.detail : undefined}
            description={args.description ? item.description : undefined}
          >
            {item.children}
          </MenuItem>
        ))}
      </MenuGroup>
      <MenuGroup {...args}>
        {itemList2.map((item, i) => (
          <MenuItem
            key={i}
            icon={args.icons ? item.icon : undefined}
            detail={args.detail ? item.detail : undefined}
            description={args.description ? item.description : undefined}
          >
            {item.children}
          </MenuItem>
        ))}
      </MenuGroup>
    </MenuList>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  compact: false,
  description: true,
  detail: true,
  icons: true,
  label: 'Options',
}

export default {
  component: MenuList,
  title: 'MenuList',
}
