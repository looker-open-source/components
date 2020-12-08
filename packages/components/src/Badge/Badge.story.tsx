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
import { Badge, BadgeProps } from './Badge'

export default {
  component: Badge,
  title: 'Badge',
}

const Template: Story<BadgeProps> = (args) => <Badge {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Basic',
}
export const Small = Template.bind({})
Small.args = {
  children: 'Small',
  size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  children: 'Medium',
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  children: 'Large',
  size: 'large',
}

export const Key = Template.bind({})
Key.args = {
  children: 'Key',
  intent: 'key',
}

export const Positive = Template.bind({})
Positive.args = {
  children: 'Positive',
  intent: 'positive',
}

export const Inform = Template.bind({})
Inform.args = {
  children: 'Inform',
  intent: 'inform',
}

export const Neutral = Template.bind({})
Neutral.args = {
  children: 'Neutral',
  intent: 'neutral',
}

export const Warn = Template.bind({})
Warn.args = {
  children: 'Warn',
  intent: 'warn',
}

export const Critical = Template.bind({})
Critical.args = {
  children: 'Critical',
  intent: 'critical',
}
