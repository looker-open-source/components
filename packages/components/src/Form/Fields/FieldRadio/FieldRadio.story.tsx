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
import { Story } from '@storybook/react/types-6-0'
import { FieldRadio, FieldRadioProps } from './FieldRadio'

const Template: Story<FieldRadioProps> = (args) => <FieldRadio {...args} />

export const Basic = Template.bind({})
Basic.args = {
  id: 'fieldRadioId',
  label: 'Field Radio Example',
  name: 'thumbsUp',
}

export const DetailDescription = Template.bind({})
DetailDescription.args = {
  ...Basic.args,
  description: 'describe something here.',
  detail: '0/50',
}

export const Checked = Template.bind({})
Checked.args = {
  ...Basic.args,
  checked: true,
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

export const Error = Template.bind({})
Error.args = {
  ...Basic.args,
  validationMessage: { message: 'This is an error', type: 'error' },
}

export const DetailDescriptionError = Template.bind({})
DetailDescriptionError.args = {
  ...DetailDescription.args,
  validationMessage: { message: 'This is an error', type: 'error' },
}

export default {
  component: FieldRadio,
  title: 'FieldRadio',
}
