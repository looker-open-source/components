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
import { SelectMulti, SelectMultiProps } from '../SelectMulti'

const Template: Story<SelectMultiProps> = (args) => <SelectMulti {...args} />

export const Basic = Template.bind({})
Basic.args = {
  options: [
    { label: 'Cheddar', value: 'cheddar' },
    { label: 'Gouda', value: 'gouda' },
    { label: 'Swiss', value: 'swiss' },
  ],
}

export const Placeholder = Template.bind({})
Placeholder.args = {
  ...Basic.args,
  placeholder: 'Placeholder',
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Basic.args,
  disabled: true,
}

export const DisabledPlaceholder = Template.bind({})
DisabledPlaceholder.args = {
  ...Placeholder.args,
  disabled: true,
}

export const Error = Template.bind({})
Error.args = {
  ...Basic.args,
  validationType: 'error',
}

export const ErrorPlaceholder = Template.bind({})
ErrorPlaceholder.args = {
  ...Placeholder.args,
  validationType: 'error',
}

export const Values = Template.bind({})
Values.args = {
  ...Basic.args,
  values: ['cheddar', 'gouda'],
}

export const DefaultValues = Template.bind({})
DefaultValues.args = {
  ...Basic.args,
  defaultValues: ['gouda', 'swiss'],
}

export const WrappingValues = Template.bind({})
WrappingValues.args = {
  ...Basic.args,
  defaultValues: ['cheddar', 'gouda', 'swiss'],
  width: 250,
}

export const ErrorValues = Template.bind({})
ErrorValues.args = {
  ...Error.args,
  values: ['cheddar', 'gouda'],
}

export const ErrorWrappingValues = Template.bind({})
ErrorWrappingValues.args = {
  ...WrappingValues.args,
  defaultValues: ['cheddar', 'gouda', 'swiss'],
  validationType: 'error',
}

export default {
  component: SelectMulti,
  title: 'SelectMulti',
}
