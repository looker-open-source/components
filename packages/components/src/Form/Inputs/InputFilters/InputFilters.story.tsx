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

import React, { useState, FormEvent } from 'react'
import { Story } from '@storybook/react/types-6-0'
import { filters } from '../../../__mocks__/sampleInputFilters'
import { InputText } from '../InputText'
import { InputFilters, InputFiltersProps, FieldFilter } from './InputFilters'
import { InputFilterEditorRenderProp } from './inputFilterEditor'

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

const withValue = {
  field: 'status',
  formatValue: (value: string) => value.toUpperCase(),
  options: ['Failed', 'Success'],
  value: 'Success',
}

const EditorComponent: InputFilterEditorRenderProp = ({
  closeEditor,
  onChange,
  value = '',
}) => {
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value)
  }
  return (
    <InputText
      data-autofocus="true"
      value={value}
      onChange={handleChange}
      onBlur={closeEditor}
    />
  )
}

const customFilters: FieldFilter[] = [
  {
    editor: EditorComponent,
    field: 'important',
    label: 'Important',
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

export const Basic = Template.bind({})
Basic.args = {
  filters: filters,
}

export const FilterSelected = Template.bind({})
FilterSelected.args = {
  filters: [withValue, ...filters],
}

export const HideFilter = Template.bind({})
HideFilter.args = {
  ...Basic.args,
  hideFilterIcon: true,
}

export const CustomEditor = CustomTemplate.bind({})
CustomEditor.args = {
  filters: customFilters,
}
CustomEditor.parameters = {
  storyshots: { disable: true },
}

export default {
  component: InputFilters,
  title: 'InputFilters',
}
