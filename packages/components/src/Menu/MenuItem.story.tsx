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

import { MenuItem, MenuItemProps } from './MenuItem'

const MenuItemTemplate: Story<MenuItemProps> = (args) => (
  <MenuItem {...args}>Menu Item</MenuItem>
)

export const Basic = MenuItemTemplate.bind({})

export const Icon = MenuItemTemplate.bind({})
Icon.args = {
  ...Basic,
  icon: 'User',
}

export const Detail = MenuItemTemplate.bind({})
Detail.args = {
  ...Basic,
  detail: 'A Detail',
}

export const IconAndDetail = MenuItemTemplate.bind({})
IconAndDetail.args = {
  ...Basic,
  detail: 'A Detail',
  icon: 'User',
}

export const Description = MenuItemTemplate.bind({})
Description.args = {
  ...Basic,
  description: 'A description',
}

export const IconAndDescription = MenuItemTemplate.bind({})
IconAndDescription.args = {
  ...Basic,
  description: 'A description',
  icon: 'User',
}

export const DetailAndDescription = MenuItemTemplate.bind({})
DetailAndDescription.args = {
  ...Basic,
  description: 'A description',
  detail: 'A detail',
}

export const IconAndDetailAndDescription = MenuItemTemplate.bind({})
IconAndDetailAndDescription.args = {
  ...Basic,
  description: 'A description',
  detail: 'A detail',
  icon: 'User',
}

export const Current = MenuItemTemplate.bind({})
Current.args = {
  ...Basic,
  current: true,
}

export default {
  component: MenuItem,
  title: 'MenuItem',
}
