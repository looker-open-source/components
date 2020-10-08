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
import { Status, StatusProps } from './Status'

const Template: Story<StatusProps> = (args) => <Status {...args} />

export const Inform = Template.bind({})
Inform.args = {
  intent: 'inform',
}

export const Critical = Template.bind({})
Critical.args = {
  intent: 'critical',
}

export const Neutral = Template.bind({})
Neutral.args = {
  intent: 'neutral',
}

export const Positive = Template.bind({})
Positive.args = {
  intent: 'positive',
}

export const Warn = Template.bind({})
Warn.args = {
  intent: 'warn',
}

export const XXSmall = Template.bind({})
XXSmall.args = {
  ...Inform.args,
  size: 'xxsmall',
}

export const XSmall = Template.bind({})
XSmall.args = {
  ...Inform.args,
  size: 'xsmall',
}

export const Small = Template.bind({})
Small.args = {
  ...Inform.args,
  size: 'small',
}

export const Large = Template.bind({})
Large.args = {
  ...Inform.args,
  size: 'large',
}

export const XLarge = Template.bind({})
XLarge.args = {
  ...Inform.args,
  size: 'xlarge',
}

export default {
  component: Status,
  title: 'Status',
}
