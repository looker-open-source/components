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

import React from 'react'
import type { Story } from '@storybook/react/types-6-0'
import { defaultArgTypes as argTypes } from '../../../../../../storybook/src/defaultArgTypes'
import { useToggle } from '../../../utils/useToggle'
import type { ToggleSwitchProps } from './ToggleSwitch'
import { ToggleSwitch } from './ToggleSwitch'

const Template: Story<ToggleSwitchProps> = ({ on = false, ...args }) => {
  const { value, toggle } = useToggle(on)
  return <ToggleSwitch onChange={toggle} on={value} {...args} />
}

export const Basic = Template.bind({})
Basic.args = {}

export const Checked = Template.bind({})
Checked.args = {
  ...Basic.args,
  on: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Basic.args,
  disabled: true,
}

export const DisabledChecked = Template.bind({})
DisabledChecked.args = {
  ...Checked.args,
  disabled: true,
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  ...Basic.args,
  readOnly: true,
}

export default {
  argTypes,
  component: ToggleSwitch,
  title: 'ToggleSwitch',
}
