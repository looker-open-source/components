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
import { FieldTextArea, FieldTextAreaProps } from './FieldTextArea'

export default {
  component: FieldTextArea,
  title: 'FieldTextArea',
}

const Template: Story<FieldTextAreaProps> = (args) => (
  <FieldTextArea {...args} />
)

export const Basic = Template.bind({})
Basic.args = { label: 'Text Area' }

export const Disabled = Template.bind({})
Disabled.args = { ...Basic.args, disabled: true }

export const Required = Template.bind({})
Required.args = { ...Basic.args, required: true }

export const Error = Template.bind({})
Error.args = {
  ...Basic.args,
  validationMessage: { message: 'Error Message', type: 'error' },
}

export const Inline = Template.bind({})
Inline.args = {
  ...Basic.args,
  inline: true,
}

export const NoResize = Template.bind({})
NoResize.args = {
  placeholder: 'no resize',
  resize: false,
}
