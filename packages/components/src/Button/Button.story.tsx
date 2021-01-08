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
import { Button } from './Button'
import { ButtonProps } from './types'

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Button Text',
}

export const Critical = Template.bind({})
Critical.args = {
  ...Basic.args,
  color: 'critical',
}

export const Neutral = Template.bind({})
Neutral.args = {
  ...Basic.args,
  color: 'neutral',
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Basic.args,
  disabled: true,
}

export const IconBefore = Template.bind({})
IconBefore.args = {
  ...Basic.args,
  iconBefore: 'CircleAdd',
}

export const IconAfter = Template.bind({})
IconAfter.args = {
  ...Basic.args,
  iconAfter: 'Trash',
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  ...Basic.args,
  fullWidth: true,
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

export default {
  component: Button,
  title: 'Button',
}
