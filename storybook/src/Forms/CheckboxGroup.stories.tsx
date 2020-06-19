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
import { Fieldset, FieldCheckboxGroup } from '@looker/components'

export const All = () => (
  <Fieldset>
    <Basic />
    <Disabled />
    <Required />
    <Error />
    <ErrorInline />
    {/* <Controlled /> */}
  </Fieldset>
)

export default {
  component: All,
  title: 'Forms/CheckboxGroup',
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

export const Basic = () => (
  <FieldCheckboxGroup
    defaultValue={defaultValueCheckbox}
    label="Cheeses"
    description="Pick all your cheeses"
    options={options}
  />
)

export const Disabled = () => (
  <FieldCheckboxGroup
    defaultValue={defaultValueCheckbox}
    label="Cheeses"
    description="Pick all your cheeses"
    options={options}
    disabled
  />
)

export const Required = () => (
  <FieldCheckboxGroup
    defaultValue={defaultValueCheckbox}
    label="Cheeses"
    inline
    description="Pick all your cheeses"
    options={options}
  />
)

export const Inline = () => (
  <FieldCheckboxGroup
    defaultValue={defaultValueCheckbox}
    label="Cheeses"
    inline
    description="Pick all your cheeses"
    options={options}
  />
)

export const Error = () => (
  <FieldCheckboxGroup
    defaultValue={defaultValueCheckbox}
    label="Cheeses"
    validationMessage={{
      message: 'Select at least 1 cheese',
      type: 'error',
    }}
    description="Pick all your cheeses"
    options={options}
  />
)

export const ErrorInline = () => (
  <FieldCheckboxGroup
    defaultValue={defaultValueCheckbox}
    label="Cheeses"
    inline
    required
    validationMessage={{
      message: 'Select at least 1 cheese',
      type: 'error',
    }}
    description="Pick all your cheeses"
    options={options}
  />
)

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
