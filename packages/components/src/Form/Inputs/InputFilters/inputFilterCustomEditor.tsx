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

import React, { ReactNode } from 'react'
import { CheckboxGroup, RadioGroup } from '../OptionsGroup'
import { FieldFilterOptions } from './InputFilters'

export type InputFilterCustomEditorProps = (
  closeEditor: () => void,
  filterOptions: FieldFilterOptions,
  onChange: (value?: string) => void,
  value?: string
) => ReactNode

export const inputFilterCustomEditor: InputFilterCustomEditorProps = (
  closeEditor,
  filterOptions,
  onChange,
  value
) => {
  const { multiple = false } = filterOptions

  const options = filterOptions.options
    ? filterOptions.options.map((value) => ({ label: value, value }))
    : []

  const handleChangeCheckbox = (newValues: string[]) => {
    onChange(newValues.sort().join(', '))
  }

  const handleChangeRadio = (newValue: string) => {
    onChange(newValue)
    closeEditor()
  }

  return multiple ? (
    <CheckboxGroup
      value={value ? value.split(', ') : []}
      options={options}
      onChange={handleChangeCheckbox}
    />
  ) : (
    <RadioGroup value={value} options={options} onChange={handleChangeRadio} />
  )
}
