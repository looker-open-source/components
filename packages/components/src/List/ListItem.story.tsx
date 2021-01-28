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

import { IconButton } from '../Button'
import { ListItem, ListItemProps } from './ListItem'

const Template: Story<ListItemProps> = (args) => <ListItem {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'List Item',
}

export const Icon = Template.bind({})
Icon.args = {
  ...Basic.args,
  icon: 'User',
}

export const Detail = Template.bind({})
Detail.args = {
  ...Basic.args,
  detail: 'A Detail',
}

export const Accessory = Template.bind({})
Accessory.args = {
  ...Basic.args,
  detail: {
    content: <IconButton icon="Pivot" label="Pivot" />,
    options: { accessory: true },
  },
}

export const HoverDisclosure = Template.bind({})
HoverDisclosure.args = {
  ...Basic.args,
  detail: {
    content: <IconButton icon="Pivot" label="Pivot" />,
    options: { hoverDisclosure: true },
  },
}

HoverDisclosure.parameters = {
  storyshots: { disable: true },
}

export const IconAndDetail = Template.bind({})
IconAndDetail.args = {
  ...Basic.args,
  detail: 'A Detail',
  icon: 'User',
}

export const Description = Template.bind({})
Description.args = {
  ...Basic.args,
  description: 'A description',
}

export const IconAndDescription = Template.bind({})
IconAndDescription.args = {
  ...Basic.args,
  description: 'A description',
  icon: 'User',
}

export const DetailAndDescription = Template.bind({})
DetailAndDescription.args = {
  ...Basic.args,
  description: 'A description',
  detail: 'A detail',
}

export const IconAndDetailAndDescription = Template.bind({})
IconAndDetailAndDescription.args = {
  ...Basic.args,
  description: 'A description',
  detail: 'A detail',
  icon: 'User',
}

export const Selected = Template.bind({})
Selected.args = {
  ...Basic.args,
  selected: true,
}

export const Current = Template.bind({})
Current.args = {
  ...Basic.args,
  current: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Basic.args,
  disabled: true,
}

export const KeyColor = Template.bind({})
KeyColor.args = {
  ...Selected.args,
  keyColor: true,
}

export const Link = () => {
  return (
    <ListItem itemRole="link" href="https://google.com" target="_blank">
      ListItem that links to Google
    </ListItem>
  )
}

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
export const Truncate = Template.bind({})
Truncate.args = {
  ...Basic.args,
  children: lorem,
  description: lorem,
  truncate: true,
}

export const TruncateAndIconAndDetail = Template.bind({})
TruncateAndIconAndDetail.args = {
  ...Truncate.args,
  detail: 'Detail',
  icon: 'Calendar',
}

export default {
  component: ListItem,
  title: 'ListItem',
}
