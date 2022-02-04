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

import type { DensityRamp } from '@looker/design-tokens'
import type { Story } from '@storybook/react/types-6-0'
import { Create, DateRange, Undo } from '@styled-icons/material-outlined'
import type { FC } from 'react'
import React, { Fragment } from 'react'
import { Box2, Grid, Space } from '../Layout'
import { defaultArgTypes as argTypes } from '../../../../apps/storybook/src/defaultArgTypes'
import type { MenuItemProps } from './MenuItem'
import { MenuDivider } from './MenuDivider'
import { MenuItem } from './MenuItem'
import { MenuList } from './MenuList'
import { MenuHeading } from './MenuHeading'

const groups: { label?: string; items: MenuItemProps[] }[] = [
  {
    items: [
      {
        children: 'Edit Dashboard',
        detail: 'cmd+shift+E',
        icon: <Create />,
      },
      {
        children: 'Get LookML',
        description: 'some description',
      },
      {
        children: 'Revert to original dashboard',
        detail: 'A longer detail',
        icon: <Undo />,
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

const Template: Story = args => <MenuList {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: groups.map(({ label, items }, key) => (
    <Fragment key={key}>
      {label && <MenuHeading>{label}</MenuHeading>}
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
      <MenuDivider />
    </Fragment>
  )),
  iconGutter: true,
}

const array3000 = Array.from(Array(3000), (_, i) => String(i + 1))
export const LongList = () => {
  return (
    <Box2 height="500px">
      <MenuList>
        {array3000.map((item, i) => (
          <MenuItem key={i}>{item}</MenuItem>
        ))}
      </MenuList>
    </Box2>
  )
}

LongList.parameters = {
  storyshots: false,
}

export const MenuHeadingComposition = () => (
  <MenuList>
    <MenuHeading>Mild Cheeses</MenuHeading>
    <MenuItem>Cheddar</MenuItem>
    <MenuDivider />
    <MenuHeading>Spicy Cheeses</MenuHeading>
    <MenuItem>Pepper Jack</MenuItem>
  </MenuList>
)

const DensityExample: FC<{ density?: DensityRamp }> = ({ density }) => (
  <MenuList iconGutter density={density}>
    <MenuHeading>Cheeses of the World</MenuHeading>
    <MenuItem icon={<DateRange />} description="Yellow">
      Swiss
    </MenuItem>
    <MenuItem selected>Parmesan</MenuItem>
    <MenuItem>Cheddar</MenuItem>
    <MenuDivider />
    <MenuItem>Pepper Jack</MenuItem>
  </MenuList>
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

export const MenuHeadingOverride = () => (
  <MenuList>
    <MenuHeading>Hello World</MenuHeading>
    <MenuHeading
      color="inform"
      fontSize="small"
      fontWeight="bold"
      lineHeight="small"
      py="xxsmall"
    >
      Custom Hello World
    </MenuHeading>
  </MenuList>
)

/**
 * This storyshot is specifically for checking that space above the first item
 * and space below the last item is maintained even with extraneous dividers.
 */
export const MenuListSpacing = () => (
  <Space p="u4" style={{ background: '#ff8c69' }}>
    <Box2 bg="background">
      <MenuList>
        <MenuDivider />
        <MenuItem selected>Top Item</MenuItem>
        <MenuItem selected>Top Item</MenuItem>
        <MenuDivider />
        <MenuItem selected>Bottom Item</MenuItem>
        <MenuItem selected>Bottom Item</MenuItem>
        <MenuDivider />
      </MenuList>
    </Box2>
    <Box2 bg="background">
      <MenuList>
        <MenuItem selected>Top Item</MenuItem>
        <MenuItem selected>Top Item</MenuItem>
        <MenuDivider />
        <MenuItem selected>Bottom Item</MenuItem>
        <MenuItem selected>Bottom Item</MenuItem>
        <MenuDivider />
      </MenuList>
    </Box2>
    <Box2 bg="background">
      <MenuList>
        <MenuDivider />
        <MenuItem selected>Top Item</MenuItem>
        <MenuItem selected>Top Item</MenuItem>
        <MenuDivider />
        <MenuItem selected>Bottom Item</MenuItem>
        <MenuItem selected>Bottom Item</MenuItem>
      </MenuList>
    </Box2>
  </Space>
)

export const AdjacentDividers = () => (
  <MenuList>
    <MenuItem>There should only be one divider here...</MenuItem>
    <MenuDivider />
    <MenuDivider />
    <MenuItem>even though there are technically two</MenuItem>
  </MenuList>
)

export default {
  argTypes,
  component: MenuList,
  title: 'MenuList',
}
