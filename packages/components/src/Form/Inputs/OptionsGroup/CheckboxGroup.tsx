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

import React, { FC, useState } from 'react'
import { Fieldset } from '../../Fieldset'
import { FieldCheckbox } from '../../Fields'
import { OptionsGroupProps } from './OptionsGroup'

export type CheckboxGroupValue = string[]

export interface CheckboxGroupProps extends OptionsGroupProps {
  defaultValue?: CheckboxGroupValue
  value?: CheckboxGroupValue
  onChange?: (value: CheckboxGroupValue) => void
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  disabled,
  inline,
  options,
  defaultValue = [],
  value,
  onChange,
}) => {
  const [currentOptions, setCurrentOptions] = useState(value || defaultValue)

  const handleChange = (option: string) => {
    const newValues = currentOptions.includes(option)
      ? [...currentOptions.filter((v) => v !== option)]
      : [...currentOptions, option]

    !value && setCurrentOptions(newValues)
    onChange && onChange(newValues)
  }
  const checkboxes = options.map((option, index) => (
    <FieldCheckbox
      onChange={() => handleChange(option.value)}
      disabled={option.disabled || disabled}
      key={index}
      label={option.label}
      checked={currentOptions.includes(option.value)}
      value={option.value}
    />
  ))

  return (
    <Fieldset data-testid="checkbox-list" inline={inline}>
      {checkboxes}
    </Fieldset>
  )
}
