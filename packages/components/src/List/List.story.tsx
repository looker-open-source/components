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

import React, { FC, useState } from 'react'
import { Story } from '@storybook/react/types-6-0'
import { DateRange } from '@styled-icons/material'
import { Grid, Space } from '../Layout'
import { DensityRamp } from './types'
import { List, ListProps } from './List'
import { ListItem } from './ListItem'

export default {
  component: List,
  title: 'List',
}

const listItems = (
  <>
    <ListItem icon={<DateRange />} description="Orange-y">
      Cheddar
    </ListItem>
    <ListItem icon="Pivot" detail="Netherlands">
      Gouda
    </ListItem>
    <ListItem selected>Mozzarella</ListItem>
    <ListItem>Swiss</ListItem>
  </>
)

const Template: Story<ListProps> = (args) => <List {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: listItems,
}

export const IconGutter = Template.bind({})
IconGutter.args = {
  ...Basic.args,
  iconGutter: true,
}

const array200 = Array.from(Array(200), (_, i) => String(i + 1))
export const LongList = Template.bind({})
LongList.args = {
  children: array200.map((item, i) => <ListItem key={i}>{item}</ListItem>),
}

LongList.parameters = {
  storyshots: false,
}

export const ExpandingList = () => {
  const [showMore, setShowMore] = useState(false)
  const [showMore2, setShowMore2] = useState(false)
  return (
    <Space align="start">
      <List>
        <ListItem>Cheddar</ListItem>
        <ListItem>Gouda</ListItem>
        {showMore ? (
          <>
            <ListItem>Swiss</ListItem>
            <ListItem>American</ListItem>
            <ListItem
              onClick={() => setShowMore(false)}
              description="Keyboard nav should still work"
            >
              Show Less
            </ListItem>
          </>
        ) : (
          <ListItem
            onClick={() => setShowMore(true)}
            description="To test keyboard nav"
          >
            Show More
          </ListItem>
        )}
      </List>

      <List>
        {showMore2 ? (
          <>
            <ListItem key="0">Cheddar</ListItem>
            <ListItem key="1">Swiss</ListItem>
            <ListItem key="2">Gouda</ListItem>
            <ListItem key="3">American</ListItem>
            <ListItem
              key="4"
              onClick={() => setShowMore2(false)}
              description="Replaces all items"
            >
              Show less
            </ListItem>
          </>
        ) : (
          <>
            <ListItem key="5">Cheddar</ListItem>
            <ListItem key="6">Gouda</ListItem>
            <ListItem
              key="7"
              onClick={() => setShowMore2(true)}
              description="Replaces all items"
            >
              Show more
            </ListItem>
          </>
        )}
      </List>
    </Space>
  )
}

ExpandingList.parameters = {
  storyshots: false,
}

const DensityExample: FC<{ density?: DensityRamp }> = ({ density }) => (
  <List iconGutter density={density}>
    {listItems}
  </List>
)

export const Density = () => (
  <Grid columns={5}>
    <DensityExample density={1} />
    <DensityExample />
    <DensityExample density={-1} />
    <DensityExample density={-2} />
    <DensityExample density={-3} />
  </Grid>
)
