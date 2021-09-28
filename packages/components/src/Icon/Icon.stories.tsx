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

import type { Story } from '@storybook/react/types-6-0'
import React from 'react'
import {
  Create,
  Delete,
  DeleteOutline,
  FilterList,
  Refresh,
  Settings,
} from 'styled-icons/material'
import { Button, IconButton } from '../Button'
import { Space, SpaceVertical } from '../Layout'
import { Heading } from '../Text'
import { defaultArgTypes as argTypes } from '../../../../apps/storybook/src/defaultArgTypes'
import type { IconProps } from './Icon'
import { Icon } from './Icon'

export default {
  argTypes,
  component: Icon,
  title: 'Icon',
}

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const Basic = Template.bind({})
Basic.args = {
  icon: <Settings />,
}

export const Small = Template.bind({})
Small.args = {
  ...Basic.args,
  size: 'small',
}

export const Large = Template.bind({})
Large.args = {
  ...Basic.args,
  size: 'large',
}

export const Accessibility = () => (
  <Space around>
    <Icon icon={<Delete />} title="It's a trash can" />
    <Icon icon={<DeleteOutline />} />
  </Space>
)

Accessibility.parameters = {
  storyshots: { disable: true },
}

export const Sizes = () => (
  <SpaceVertical>
    <Space>
      <Icon icon={<Delete />} size="xxsmall" />
      <Icon icon={<Delete />} size="xsmall" />
      <Icon icon={<Delete />} size="small" />
      <Icon icon={<Delete />} size="medium" />
      <Icon icon={<Delete />} size="large" />
      <Icon icon={<Delete />} />
    </Space>
  </SpaceVertical>
)

Sizes.parameters = {
  storyshots: { disable: true },
}

export const Artwork = () => (
  <Space around>
    <Icon
      icon={
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
            fill="hotpink"
          />
        </svg>
      }
      size="xxsmall"
    />
    <Icon
      icon={
        <svg>
          <rect
            width="100"
            height="100"
            fill="rgb(0,0,255)"
            strokeWidth="3"
            stroke="rgb(0,0,0)"
          />
        </svg>
      }
    />
  </Space>
)

Artwork.parameters = {
  storyshots: { disable: true },
}

export const IconsInsideComponents = () => (
  <SpaceVertical>
    <Space gap="u2">
      <Button size="large" iconAfter={<Refresh />}>
        Add
      </Button>
      <IconButton size="large" icon={<FilterList />} label="Filter" />
    </Space>

    <Space gap="u2">
      <Button iconAfter={<Refresh />}>Add</Button>
      <IconButton size="medium" icon={<FilterList />} label="Filter" />
    </Space>

    <Space gap="u2">
      <Button size="small" iconAfter={<Refresh />}>
        Add
      </Button>
      <IconButton size="small" icon={<FilterList />} label="Filter" />
    </Space>

    <Space gap="u2">
      <Button size="xsmall" iconAfter={<Refresh />}>
        Add
      </Button>
      <IconButton size="xsmall" icon={<FilterList />} label="Filter" />
    </Space>

    <Space gap="u2">
      <Button size="xxsmall" iconAfter={<Refresh />}>
        Add
      </Button>
      <IconButton size="xxsmall" icon={<FilterList />} label="Filter" />
    </Space>
  </SpaceVertical>
)

IconsInsideComponents.parameters = {
  storyshots: { disable: true },
}

export const IconsPairedWithText = () => (
  <SpaceVertical>
    <Space gap="u2">
      <Heading fontSize="xxsmall">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="xxxsmall" icon={<Create />} />
    </Space>

    <Space gap="u2">
      <Heading fontSize="xsmall">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="xxxsmall" icon={<Create />} />
    </Space>

    <Space gap="u2">
      <Heading fontSize="small">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="xxsmall" icon={<Create />} />
    </Space>

    <Space gap="u2">
      <Heading fontSize="medium">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="xxsmall" icon={<Create />} />
    </Space>

    <Space gap="u2">
      <Heading fontSize="large">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="xsmall" icon={<Create />} />
    </Space>

    <Space gap="u2">
      <Heading fontSize="xlarge">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="small" icon={<Create />} />
    </Space>

    <Space gap="u2">
      <Heading fontSize="xxlarge">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="small" icon={<Create />} />
    </Space>

    <Space gap="u2">
      <Heading fontSize="xxxlarge">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="medium" icon={<Create />} />
    </Space>

    <Space gap="u2">
      <Heading fontSize="xxxxlarge">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="medium" icon={<Create />} />
    </Space>

    <Space gap="u2">
      <Heading fontSize="xxxxxlarge">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="large" icon={<Create />} />
    </Space>
  </SpaceVertical>
)

IconsPairedWithText.parameters = {
  storyshots: { disable: true },
}
