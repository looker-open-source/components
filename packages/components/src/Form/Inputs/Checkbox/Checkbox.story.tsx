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
import { Checkbox, CheckboxProps } from './Checkbox'

export default {
  component: Checkbox,
  title: 'Checkbox',
}

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Basic = Template.bind({})

export const Checked = Template.bind({})
Checked.args = {
  checked: true,
}

export const Mixed = Template.bind({})
Mixed.args = {
  checked: 'mixed',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const DisabledChecked = Template.bind({})
DisabledChecked.args = {
  ...Disabled.args,
  ...Checked.args,
}

export const DisabledMixed = Template.bind({})
DisabledChecked.args = {
  ...Disabled.args,
  ...Mixed.args,
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  readOnly: true,
}

export const ReadOnlyChecked = Template.bind({})
ReadOnly.args = {
  readOnly: true,
  ...Checked.args,
}

export const ReadOnlyMixed = Template.bind({})
ReadOnly.args = {
  readOnly: true,
  ...Mixed.args,
}
