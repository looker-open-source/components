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

import React, { useState } from 'react'
import { Story } from '@storybook/react/types-6-0'
import { InputChips, InputChipsProps } from './InputChips'

const chipValues = ['Looker', 'Google']

const Template: Story<InputChipsProps> = ({ values = [], ...args }) => {
  const [controlledChips, setControlledChips] = useState(values)
  return (
    <InputChips
      {...args}
      values={controlledChips}
      onChange={setControlledChips}
    />
  )
}

export const Basic = Template.bind({})
Basic.args = {}

export const Values = Template.bind({})
Values.args = {
  values: chipValues,
}

export const Placeholder = Template.bind({})
Placeholder.args = {
  ...Values.args,
  placeholder: 'Enter more chips here',
}

export const Summary = Template.bind({})
Summary.args = {
  ...Values.args,
  summary: 'some more info here',
}

export const AutoResize = Template.bind({})
AutoResize.args = {
  ...Values.args,
  autoResize: true,
  height: 36,
  maxWidth: 250,
}

export const DisabledWithValues = Template.bind({})
DisabledWithValues.args = {
  ...Values.args,
  disabled: true,
}

export const DisabledWithOutValues = Template.bind({})
DisabledWithOutValues.args = {
  ...Basic.args,
  disabled: true,
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  ...Values.args,
  readOnly: true,
}
ReadOnly.parameters = {
  storyshots: { disable: true },
}

export default {
  component: InputChips,
  title: 'InputChips',
}
