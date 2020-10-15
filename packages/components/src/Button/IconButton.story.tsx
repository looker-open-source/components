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
import { Heading } from '../Text'
import { Space } from '../Layout/Space'
import { IconButton, IconButtonProps } from './IconButton'

export default {
  component: IconButton,
  title: 'IconButton',
}

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />

export const Basic = Template.bind({})
Basic.args = {
  icon: 'Plus',
  label: 'Add',
}

export const XXSmall = Template.bind({})
XXSmall.args = {
  ...Basic.args,
  size: 'xxsmall',
}

export const XSmall = Template.bind({})
XSmall.args = {
  ...Basic.args,
  size: 'xsmall',
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

export const OutlineXXSmall = Template.bind({})
OutlineXXSmall.args = {
  ...Basic.args,
  outline: true,
  size: 'xxsmall',
}

export const OutlineXSmall = Template.bind({})
OutlineXSmall.args = {
  ...Basic.args,
  outline: true,
  size: 'xsmall',
}

export const OutlineSmall = Template.bind({})
OutlineSmall.args = {
  ...Basic.args,
  outline: true,
  size: 'small',
}

export const OutlineLarge = Template.bind({})
OutlineLarge.args = {
  ...Basic.args,
  outline: true,
  size: 'large',
}

export const KeyColorIconButton = Template.bind({})
KeyColorIconButton.args = {
  ...Basic.args,
  color: 'key',
}

export const CriticalColorIconButton = Template.bind({})
CriticalColorIconButton.args = {
  ...Basic.args,
  color: 'critical',
}

export const Toggle = Template.bind({})
Toggle.args = {
  ...Basic.args,
  toggle: true,
}

export const Suite = () => (
  <>
    <Heading>Sizes</Heading>
    <Space>
      <IconButton icon="Favorite" size="xxsmall" label="Favorite" />
      <IconButton icon="Favorite" size="xsmall" label="Favorite" />
      <IconButton icon="Favorite" size="small" label="Favorite" />
      <IconButton icon="Favorite" size="medium" label="Favorite" />
      <IconButton icon="Favorite" size="large" label="Favorite" />
    </Space>
    <Heading>States</Heading>
    <Space>
      <IconButton icon="Favorite" label="Favorite" />
      <IconButton icon="Favorite" label="Favorite" className="hover" />
      <IconButton icon="Favorite" label="Favorite" className="active" />
    </Space>
    <Space>
      <IconButton color="key" icon="Favorite" label="Favorite" />
      <IconButton
        color="key"
        icon="Favorite"
        label="Favorite"
        className="hover"
      />
      <IconButton
        color="key"
        icon="Favorite"
        label="Favorite"
        className="active"
      />
    </Space>
    <Space>
      <IconButton color="critical" icon="Favorite" label="Favorite" />
      <IconButton
        color="critical"
        icon="Favorite"
        label="Favorite"
        className="hover"
      />
      <IconButton
        color="critical"
        icon="Favorite"
        label="Favorite"
        className="active"
      />
    </Space>
    <Space>
      <IconButton
        size="medium"
        icon="Favorite"
        label="Favorite"
        toggle={false}
      />

      <IconButton
        size="medium"
        icon="Favorite"
        label="Favorite"
        toggle={true}
      />
    </Space>
  </>
)

Suite.parameters = {
  storyshots: { disable: true },
}
