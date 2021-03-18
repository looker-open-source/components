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

import React, { FC, Fragment } from 'react'
import { Story } from '@storybook/react/types-6-0'
import { IconNames } from '@looker/icons'
import { Box, Grid, Space } from '../Layout'
import { DensityRamp } from '../List/types'
import { MenuHeading, MenuList, MenuItem, MenuItemProps, MenuDivider } from '.'

const groups: { label?: string; items: MenuItemProps[] }[] = [
  {
    items: [
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

const Template: Story = (args) => <MenuList {...args} />

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
    <Box height="500px">
      <MenuList>
        {array3000.map((item, i) => (
          <MenuItem key={i}>{item}</MenuItem>
        ))}
      </MenuList>
    </Box>
  )
}

LongList.parameters = {
  storyshots: false,
}

const DensityExample: FC<{ density?: DensityRamp }> = ({ density }) => (
  <MenuList iconGutter density={density}>
    <MenuHeading>Cheeses of the World</MenuHeading>
    <MenuItem icon="Calendar" description="Yellow">
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
  <Space p="medium" style={{ background: '#ff8c69' }}>
    <Box bg="background">
      <MenuList>
        <MenuDivider />
        <MenuItem selected>Top Item</MenuItem>
        <MenuItem selected>Top Item</MenuItem>
        <MenuDivider />
        <MenuItem selected>Bottom Item</MenuItem>
        <MenuItem selected>Bottom Item</MenuItem>
        <MenuDivider />
      </MenuList>
    </Box>
    <Box bg="background">
      <MenuList>
        <MenuItem selected>Top Item</MenuItem>
        <MenuItem selected>Top Item</MenuItem>
        <MenuDivider />
        <MenuItem selected>Bottom Item</MenuItem>
        <MenuItem selected>Bottom Item</MenuItem>
        <MenuDivider />
      </MenuList>
    </Box>
    <Box bg="background">
      <MenuList>
        <MenuDivider />
        <MenuItem selected>Top Item</MenuItem>
        <MenuItem selected>Top Item</MenuItem>
        <MenuDivider />
        <MenuItem selected>Bottom Item</MenuItem>
        <MenuItem selected>Bottom Item</MenuItem>
      </MenuList>
    </Box>
  </Space>
)

export default {
  component: MenuList,
  title: 'MenuList',
}
