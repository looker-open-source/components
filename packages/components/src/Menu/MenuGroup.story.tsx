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
import { Story } from '@storybook/react/types-6-0'
import { IconNames } from '@looker/icons'
import { MenuGroup, MenuGroupProps } from './MenuGroup'
import { MenuItem } from './MenuItem'

const itemList = [
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

interface CustomStoryProps extends MenuGroupProps {
  icons?: boolean
  detail?: boolean
  description?: boolean
}

const Template: Story<CustomStoryProps> = (args) => {
  const items = itemList.map((item, i) => {
    return (
      <MenuItem
        key={i}
        icon={args.icons ? item.icon : undefined}
        detail={args.detail ? item.detail : undefined}
        description={args.description ? item.description : undefined}
      >
        {item.children}
      </MenuItem>
    )
  })
  return <MenuGroup {...args}>{items}</MenuGroup>
}

export const Basic = Template.bind({})
Basic.args = {
  compact: false,
  description: true,
  detail: true,
  icons: true,
  label: 'Options',
}

export const Compact = Template.bind({})
Compact.args = {
  ...Basic.args,
  compact: true,
}

export const NoDescriptions = Template.bind({})
NoDescriptions.args = {
  ...Basic.args,
  description: false,
}

export const NoIcons = Template.bind({})
NoIcons.args = {
  ...Basic.args,
  icons: false,
}

export const NoLabel = Template.bind({})
NoLabel.args = {
  ...Basic.args,
  label: undefined,
}

export default {
  component: MenuGroup,
  title: 'MenuGroup',
}
