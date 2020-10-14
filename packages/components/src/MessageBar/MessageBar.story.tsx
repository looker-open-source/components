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
import { Button } from '../Button'
import { MessageBar, MessageBarProps } from './MessageBar'

const Template: Story<MessageBarProps> = (args) => <MessageBar {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Hey! This is a message to you.',
}

export const Warn = Template.bind({})
Warn.args = {
  ...Basic.args,
  intent: 'warn',
}

export const Critical = Template.bind({})
Critical.args = {
  ...Basic.args,
  intent: 'critical',
}

export const Positive = Template.bind({})
Positive.args = {
  ...Basic.args,
  intent: 'positive',
}

export const Inform = Template.bind({})
Inform.args = {
  ...Basic.args,
  intent: 'inform',
}

export const NoActions = Template.bind({})
NoActions.args = {
  ...Critical.args,
  noActions: true,
}

export const CustomActions = Template.bind({})
CustomActions.args = {
  ...Positive.args,
  primaryAction: 'Do Thing',
  secondaryAction: 'Dismiss',
}

export const CustomActionsDeux = Template.bind({})
CustomActionsDeux.args = {
  ...Positive.args,
  primaryAction: (
    <Button onClick={() => alert('Primary Action Taken')} iconBefore="Trash">
      Dismiss
    </Button>
  ),
  secondaryAction: (
    <Button
      onClick={() => alert('Secondary Action Taken')}
      color="neutral"
      iconBefore="ViewGrid"
    >
      Return To Menu
    </Button>
  ),
}

export default {
  component: MessageBar,
  title: 'MessageBar',
}
