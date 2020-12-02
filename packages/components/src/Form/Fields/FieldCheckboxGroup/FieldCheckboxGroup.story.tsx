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
import {
  FieldCheckboxGroup,
  FieldCheckboxGroupProps,
} from './FieldCheckboxGroup'

export default {
  component: FieldCheckboxGroup,
  title: 'FieldCheckboxGroup',
}

const options = [
  {
    label: 'Cheddar',
    value: 'cheddar',
  },
  {
    label: 'Gouda',
    value: 'gouda',
  },
  {
    disabled: true,
    label: 'Swiss',
    value: 'swiss',
  },
  {
    label: 'Roquefort',
    value: 'roquefort',
  },
  {
    label: 'Cheddar',
    value: 'cheddar',
  },
  {
    label: 'Gouda',
    value: 'gouda',
  },
  {
    disabled: true,
    label: 'Swiss',
    value: 'swiss',
  },
  {
    label: 'Roquefort',
    value: 'roquefort',
  },
  {
    label: 'Cheddar',
    value: 'cheddar',
  },
  {
    label: 'Gouda',
    value: 'gouda',
  },
  {
    disabled: true,
    label: 'Swiss',
    value: 'swiss',
  },
  {
    label: 'Roquefort',
    value: 'roquefort',
  },
]

const defaultValueCheckbox = ['swiss', 'cheddar']

const Template: Story<FieldCheckboxGroupProps> = (args) => (
  <FieldCheckboxGroup
    {...args}
    autoFocus
    defaultValue={defaultValueCheckbox}
    label="Cheeses"
    description="Pick all your cheeses"
    options={options}
  />
)

export const Basic = Template.bind({})
Basic.args = {}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const Required = Template.bind({})
Required.args = {
  required: true,
}

export const Inline = Template.bind({})
Inline.args = {
  inline: true,
}

export const Error = Template.bind({})
Error.args = {
  validationMessage: {
    message: 'Select at least 1 cheese',
    type: 'error',
  },
}

export const ErrorInline = Template.bind({})
ErrorInline.args = {
  inline: true,
  required: true,
  validationMessage: {
    message: 'Select at least 1 cheese',
    type: 'error',
  },
}

// export const Controlled = () => 'TODO'

// const defaultValueRadio = 'swiss'

// <RadioGroup
//   defaultValue={defaultValueRadio}
//   options={options}
//   onChange={alert}
// />
// <RadioGroup defaultValue={defaultValueRadio} inline options={options} />
// <FieldRadioGroup
//   onChange={setValueRadio}
//   value={valueRadio}
//   required
//   label="Cheeses (controlled)"
//   options={options}
// />
// <FieldRadioGroup
//   defaultValue={defaultValueRadio}
//   inline
//   required
//   label="Cheeses"
//   options={options}
// />
