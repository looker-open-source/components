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
import { DateRange } from '@styled-icons/material-outlined/DateRange'
import { SubdirectoryArrowLeft } from '@styled-icons/material/SubdirectoryArrowLeft'
import { Flex, Grid, Space } from '../Layout'
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
    <ListItem icon={<SubdirectoryArrowLeft />} detail="Netherlands">
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

export const FontFamily = Template.bind({})
FontFamily.args = {
  children: listItems,
  fontFamily: 'code',
}

export const Color = Template.bind({})
Color.args = {
  ...Basic.args,
  color: 'key',
}

export const IconGutter = Template.bind({})
IconGutter.args = {
  ...Basic.args,
  iconGutter: true,
}

const array3000 = Array.from(Array(3000), (_, i) => String(i))
export const LongList = () => {
  return (
    <Flex height={500}>
      <List width={200}>
        {array3000.map((item, i) => (
          <ListItem key={i}>
            {i > 0 && i % 30 === 0
              ? 'Longlonglonglonglonglonglonglonglonglonglong'
              : item}
          </ListItem>
        ))}
      </List>
      <div>
        Without width on List, windowing plus variable item widths causes the
        layout to be unstable.
      </div>
    </Flex>
  )
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

const DensityExample: FC<{ density?: DensityRamp }> = ({
  children,
  density,
}) => (
  <List iconGutter density={density}>
    {children}
  </List>
)

export const Density = () => (
  <Grid columns={5}>
    <DensityExample density={1}>{listItems}</DensityExample>
    <DensityExample>{listItems}</DensityExample>
    <DensityExample density={-1}>{listItems}</DensityExample>
    <DensityExample density={-2}>{listItems}</DensityExample>
    <DensityExample density={-3}>{listItems}</DensityExample>
  </Grid>
)

const CheeseWrapper: FC = ({ children }) => (
  <div>
    <strong>{children}</strong> cheese
  </div>
)

const listItemsNonstringChildren = (
  <>
    <ListItem icon={<DateRange />} description="Orange-y">
      <CheeseWrapper>Cheddar</CheeseWrapper>
    </ListItem>
    <ListItem icon={<SubdirectoryArrowLeft />} detail="Netherlands">
      <CheeseWrapper>Gouda</CheeseWrapper>
    </ListItem>
    <ListItem selected>
      <CheeseWrapper>Mozzarella</CheeseWrapper>
    </ListItem>
    <ListItem>
      <CheeseWrapper>Swiss</CheeseWrapper>
    </ListItem>
  </>
)

export const DensityWithNonstringChildren = () => (
  <Grid columns={5}>
    <DensityExample density={1}>{listItemsNonstringChildren}</DensityExample>
    <DensityExample>{listItemsNonstringChildren}</DensityExample>
    <DensityExample density={-1}>{listItemsNonstringChildren}</DensityExample>
    <DensityExample density={-2}>{listItemsNonstringChildren}</DensityExample>
    <DensityExample density={-3}>{listItemsNonstringChildren}</DensityExample>
  </Grid>
)
