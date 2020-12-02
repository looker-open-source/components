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
import React, { useState } from 'react'
import { ButtonItem } from './ButtonItem'
import { ButtonToggle, ButtonToggleProps } from './ButtonToggle'

export default {
  component: ButtonToggle,
  title: 'ButtonToggle',
}

const Template: Story<ButtonToggleProps & { initialValue?: string }> = ({
  initialValue,
  ...args
}) => {
  const [toggle, setToggle] = useState(initialValue)
  return <ButtonToggle {...args} value={toggle} onChange={setToggle} />
}

export const Basic = Template.bind({})
Basic.args = {
  children: (
    <>
      <ButtonItem>Ruby</ButtonItem>
      <ButtonItem>TypeScript</ButtonItem>
      <ButtonItem>Python</ButtonItem>
    </>
  ),
}

export const InitialValue = Template.bind({})
InitialValue.args = {
  ...Basic.args,
  initialValue: 'Ruby',
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...InitialValue.args,
  disabled: true,
}

export const Nullable = Template.bind({})
Nullable.args = {
  ...Basic.args,
  nullable: true,
}

export const NullableInitialValue = Template.bind({})
NullableInitialValue.args = {
  ...InitialValue.args,
  nullable: true,
}

export const Options = Template.bind({})
Options.args = {
  initialValue: 'Gouda',
  options: [
    { label: 'Smoked Gouda', value: 'Gouda' },
    { value: 'Cheddar' },
    { disabled: true, value: 'Swiss' },
  ],
}
