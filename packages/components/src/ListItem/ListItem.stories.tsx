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

import type { FC } from 'react'
import React from 'react'
import type { Story } from '@storybook/react/types-6-0'
import { PersonOutline, SubdirectoryArrowLeft } from '@styled-icons/material'
import { DateRange } from '@styled-icons/material-outlined'
import { IconButton } from '../Button'
import { Heading, Text } from '../Text'
import { Grid } from '../Layout/Grid'
import { SpaceVertical } from '../Layout/Space/SpaceVertical'
import { Status } from '../Status'
import { List } from '../List'
import { defaultArgTypes as argTypes } from '../../../../apps/storybook/src/defaultArgTypes'
import { ListItem } from './ListItem'
import type { ListItemProps, ListItemRole } from './types'

const Template: Story<ListItemProps> = args => <ListItem {...args} />

export const Basic = Template.bind({})
const basicArgs = { children: 'List Item' }
Basic.args = {
  ...basicArgs,
}

export const Icon = Template.bind({})
const iconArgs = {
  ...basicArgs,
  icon: <PersonOutline />,
}
Icon.args = {
  ...iconArgs,
}

export const IconColor = () => <ListItem {...iconArgs} color="calculation" />
export const IconStatus = () => (
  <ListItem {...iconArgs} icon={<Status intent="warn" />} />
)
export const IconCustomColor = () => <ListItem {...iconArgs} color="#cc00cc" />
export const IconColorDisabled = () => (
  <ListItem {...iconArgs} color="warn" disabled />
)

const Example: FC<ListItemProps> = ({ children, ...props }) => {
  const args = {
    icon: <PersonOutline />,
    ...props,
  }

  return (
    <SpaceVertical>
      <Heading as="h3">{children}</Heading>
      <List width="100%">
        <ListItem {...args}>Default</ListItem>
        <ListItem {...args} color="key">
          Key
        </ListItem>
        <ListItem {...args} color="calculation">
          Calculation
        </ListItem>
        <ListItem {...args} color="dimension">
          Dimension
        </ListItem>
        <ListItem {...args} color="measure">
          Measure
        </ListItem>
      </List>
    </SpaceVertical>
  )
}

export const ColorComparison = () => (
  <Grid columns={4}>
    <Example>Default</Example>
    <Example selected>Selected</Example>
    <Example selected disabled>
      Selected + Disabled
    </Example>
    <Example hovered>Hover</Example>
  </Grid>
)

export const Detail = Template.bind({})
Detail.args = {
  ...Basic.args,
  detail: 'A Detail',
}

export const Accessory = Template.bind({})
Accessory.args = {
  ...Basic.args,
  detail: {
    content: <IconButton icon={<SubdirectoryArrowLeft />} label="Pivot" />,
    options: { accessory: true },
  },
}

export const HoverDisclosure = Template.bind({})
HoverDisclosure.args = {
  ...Basic.args,
  detail: {
    content: <IconButton icon={<SubdirectoryArrowLeft />} label="Pivot" />,
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
  icon: <PersonOutline />,
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
  icon: <PersonOutline />,
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
  icon: <PersonOutline />,
}

export const Selected = Template.bind({})
Selected.args = {
  ...Basic.args,
  selected: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Basic.args,
  disabled: true,
}

export const KeyColor = () => <ListItem selected color="key" {...basicArgs} />

export const Link = () => {
  return (
    <ListItem itemRole="link" href="https://google.com" target="_blank">
      ListItem that links to Google
    </ListItem>
  )
}

export const NoRole = () => {
  return (
    <ListItem
      itemRole="none"
      detail={
        <IconButton
          onClick={() => alert('Show me calendar')}
          icon={<PersonOutline />}
          label="Person"
          ml="large"
        />
      }
    >
      ListItem
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
  detail: {
    content: 'Detail',
    options: {},
  },
  icon: <DateRange />,
}

export const TruncateAndIconAndDetailAndAccessory = Template.bind({})
TruncateAndIconAndDetailAndAccessory.args = {
  ...Truncate.args,
  detail: {
    content: <Text fontSize="xsmall">Detail Accessory</Text>,
    options: { accessory: true },
  },
  icon: <DateRange />,
}

const RoleVariant: FC<{ itemRole: ListItemRole; description?: string }> = ({
  itemRole,
  description,
}) => (
  <ListItem itemRole={itemRole} description={description}>
    Hello World
  </ListItem>
)
export const RoleVariants = () => (
  <Grid columns={3}>
    <div>
      <RoleVariant itemRole="button" />
      <RoleVariant itemRole="button" description="Definitely a button" />
    </div>
    <div>
      <RoleVariant itemRole="link" />
      <RoleVariant itemRole="link" description="Definitely a link" />
    </div>
    <div>
      <RoleVariant itemRole="none" />
      <RoleVariant itemRole="none" description="Definitely a none" />
    </div>
  </Grid>
)

export default {
  argTypes,
  component: ListItem,
  title: 'ListItem',
}
