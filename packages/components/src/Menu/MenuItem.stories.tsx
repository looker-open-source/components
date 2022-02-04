/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import type { Story } from '@storybook/react/types-6-0'
import { PersonOutline } from '@styled-icons/material-outlined'
import { defaultArgTypes as argTypes } from '../../../../apps/storybook/src/defaultArgTypes'
import type { MenuItemProps } from './MenuItem'
import { MenuItem } from './MenuItem'

// test

const Template: Story<MenuItemProps> = args => (
  <MenuItem {...args}>Menu Item</MenuItem>
)

export const Basic = Template.bind({})

export const Icon = Template.bind({})
Icon.args = {
  icon: <PersonOutline />,
}

export const Detail = Template.bind({})
Detail.args = {
  detail: 'A Detail',
}

export const IconAndDetail = Template.bind({})
IconAndDetail.args = {
  detail: 'A Detail',
  icon: <PersonOutline />,
}

export const Description = Template.bind({})
Description.args = {
  description: 'A description',
}

export const IconAndDescription = Template.bind({})
IconAndDescription.args = {
  description: 'A description',
  icon: <PersonOutline />,
}

export const DetailAndDescription = Template.bind({})
DetailAndDescription.args = {
  description: 'A description',
  detail: 'A detail',
}

export const IconAndDetailAndDescription = Template.bind({})
IconAndDetailAndDescription.args = {
  description: 'A description',
  detail: 'A detail',
  icon: <PersonOutline />,
}

export const Selected = Template.bind({})
Selected.args = {
  selected: true,
}

export const Link = () => {
  return (
    <MenuItem itemRole="link" href="https://google.com" target="_blank">
      MenuItem that links to Google
    </MenuItem>
  )
}

export default {
  argTypes,
  component: MenuItem,
  title: 'MenuItem',
}
