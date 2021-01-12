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
import { Divider } from '..'
import { List, ListProps, ListItem } from '.'

export default {
  component: List,
  title: 'List',
}

const listItems = (
  <>
    <ListItem
      icon="Calendar"
      detail="Somerset"
      description="relatively hard, off-white cheese"
    >
      Cheddar
    </ListItem>
    <ListItem icon="Pivot" detail="Netherlands">
      Gouda
    </ListItem>
    <ListItem>Swiss</ListItem>
  </>
)

const Template: Story<ListProps> = (args) => (
  <>
    <List label="large" density="large" {...args}>
      {listItems}
    </List>
    <Divider />
    <List label="medium" {...args}>
      {listItems}
    </List>
    <Divider />
    <List label="small" density="small" {...args}>
      {listItems}
    </List>
    <Divider />
    <List label="xsmall" density="xsmall" {...args}>
      {listItems}
    </List>
    <Divider />
    <List label="xxsmall" density="xxsmall" {...args}>
      {listItems}
    </List>
  </>
)

export const Basic = Template.bind({})
