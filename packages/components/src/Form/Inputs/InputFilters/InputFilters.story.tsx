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

import React, { useState } from 'react'
import { Story } from '@storybook/react/types-6-0'
import { filters } from '../../../__mocks__/sampleInputFilters'
import { InputText } from '../InputText'
import { InputFilters, InputFiltersProps, FieldFilter } from './InputFilters'
import { InputFilterCustomEditorProps } from './inputFilterCustomEditor'

const Template: Story<InputFiltersProps> = ({ filters, ...args }) => {
  const [controlledFilters, setControlledFilters] = useState(filters)
  return (
    <InputFilters
      {...args}
      filters={controlledFilters}
      onChange={setControlledFilters}
    />
  )
}

export const Basic = Template.bind({})
Basic.args = {
  filters: filters,
}

export const HideFilter = Template.bind({})
HideFilter.args = {
  ...Basic.args,
  hideFilterIcon: true,
}

const EditorComponent: InputFilterCustomEditorProps = (
  closeEditor,
  filterOptions,
  onChange,
  value
) => {
  const handleChange = (newValues: string[]) => {
    onChange(newValues.sort().join(', '))
  }
  return (
    <>
      <InputText onChange={handleChange} />
    </>
  )
}

const customFilters: FieldFilter[] = [
  {
    editor: EditorComponent,
    field: 'important',
    formatValue: (value) =>
      value && value.charAt(0).toUpperCase() + value.slice(1),
    label: 'Important',
    options: ['a', 'b', 'c'],
    value: 'string',
  },
]

const CustomTemplate: Story<InputFiltersProps> = ({ ...args }) => {
  const [controlledFilters, setControlledFilters] = useState(customFilters)
  return (
    <InputFilters
      {...args}
      filters={controlledFilters}
      onChange={setControlledFilters}
    />
  )
}

export const CustomEditor = CustomTemplate.bind({})
CustomEditor.args = {}

export default {
  component: InputFilters,
  title: 'InputFilters',
}
