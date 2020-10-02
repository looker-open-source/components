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

import { MenuGroup } from './MenuGroup'
import { MenuItem } from './MenuItem'
import { MenuList, MenuListProps } from './MenuList'

const ListTemplate: Story<MenuListProps> = (args) => <MenuList {...args} />

const MenuListExample = (
  <>
    <MenuGroup>
      <MenuItem description="some description" icon="Refresh" detail="⌘⇧↵">
        Clear cache & refresh
      </MenuItem>
    </MenuGroup>

    <MenuGroup label="Options">
      <MenuItem icon="EditOutline" detail="⌘⇧E">
        Edit dashboard
      </MenuItem>
      <MenuItem description="some description">Get LookMl</MenuItem>
      <MenuItem icon="Undo" detail="A longer detail">
        Revert to original dashboard
      </MenuItem>
    </MenuGroup>

    <MenuGroup>
      <MenuItem icon="Download" detail="⌥⇧D">
        Edit dashboard
      </MenuItem>
    </MenuGroup>

    <MenuGroup>
      <MenuItem icon="TrashOutline">Move to Trash</MenuItem>
    </MenuGroup>
  </>
)

export const MenuGroupExample = ListTemplate.bind({})
MenuGroupExample.args = {
  children: MenuListExample,
}

export const CompactMenuGroupExample = ListTemplate.bind({})
CompactMenuGroupExample.args = {
  children: MenuListExample,
  compact: true,
}

export default {
  component: MenuGroup,
  title: 'MenuGroup',
}
