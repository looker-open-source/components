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

import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { Button, IconButton } from '../Button'
import { Space, SpaceVertical } from '../Layout'
import { Heading } from '../Text'
import { Icon, IconProps } from './Icon'

export default {
  component: Icon,
  title: 'Icon',
}

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const Basic = Template.bind({})
Basic.args = {
  name: 'Gear',
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
    <Icon name="Trash" title="It's a trash can" />
    <Icon name="TrashOutline" />
  </Space>
)

Accessibility.parameters = {
  storyshots: { disable: true },
}

export const Sizes = () => (
  <SpaceVertical>
    <Space>
      <Icon name="Trash" size="xxsmall" />
      <Icon name="Trash" size="xsmall" />
      <Icon name="Trash" size="small" />
      <Icon name="Trash" size="medium" />
      <Icon name="Trash" size="large" />
      <Icon name="Trash" />
    </Space>
  </SpaceVertical>
)

Sizes.parameters = {
  storyshots: { disable: true },
}

export const Artwork = () => (
  <Space around>
    <Icon
      artwork={
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
      name="GearOutline"
      size="xxsmall"
    />
    <Icon
      artwork={
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
    <Space gap="xsmall">
      <Button size="large" iconAfter="Refresh">
        Add
      </Button>
      <IconButton size="large" icon="Filter" label="Filter" />
    </Space>

    <Space gap="xsmall">
      <Button iconAfter="Refresh">Add</Button>
      <IconButton size="medium" icon="Filter" label="Filter" />
    </Space>

    <Space gap="xsmall">
      <Button size="small" iconAfter="Refresh">
        Add
      </Button>
      <IconButton size="small" icon="Filter" label="Filter" />
    </Space>

    <Space gap="xsmall">
      <Button size="xsmall" iconAfter="Refresh">
        Add
      </Button>
      <IconButton size="xsmall" icon="Filter" label="Filter" />
    </Space>

    <Space gap="xsmall">
      <Button size="xxsmall" iconAfter="Refresh">
        Add
      </Button>
      <IconButton size="xxsmall" icon="Filter" label="Filter" />
    </Space>
  </SpaceVertical>
)

IconsInsideComponents.parameters = {
  storyshots: { disable: true },
}

export const IconsPairedWithText = () => (
  <SpaceVertical>
    <Space gap="xsmall">
      <Heading fontSize="xxsmall">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="xxxsmall" name="Edit" />
    </Space>

    <Space gap="xsmall">
      <Heading fontSize="xsmall">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="xxxsmall" name="Edit" />
    </Space>

    <Space gap="xsmall">
      <Heading fontSize="small">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="xxsmall" name="Edit" />
    </Space>

    <Space gap="xsmall">
      <Heading fontSize="medium">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="xxsmall" name="Edit" />
    </Space>

    <Space gap="xsmall">
      <Heading fontSize="large">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="xsmall" name="Edit" />
    </Space>

    <Space gap="xsmall">
      <Heading fontSize="xlarge">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="small" name="Edit" />
    </Space>

    <Space gap="xsmall">
      <Heading fontSize="xxlarge">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="small" name="Edit" />
    </Space>

    <Space gap="xsmall">
      <Heading fontSize="xxxlarge">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="medium" name="Edit" />
    </Space>

    <Space gap="xsmall">
      <Heading fontSize="xxxxlarge">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="medium" name="Edit" />
    </Space>

    <Space gap="xsmall">
      <Heading fontSize="xxxxxlarge">
        This is to compare icons size with a Heading
      </Heading>
      <Icon size="large" name="Edit" />
    </Space>
  </SpaceVertical>
)

IconsPairedWithText.parameters = {
  storyshots: { disable: true },
}
