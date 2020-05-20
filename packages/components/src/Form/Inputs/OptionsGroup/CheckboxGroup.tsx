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

import xor from 'lodash/xor'
import React, { FC, useCallback, useRef } from 'react'
import { useID } from '../../../utils'
import { Fieldset } from '../../Fieldset'
import { FieldCheckbox } from '../../Fields'
import { OptionsGroupProps } from './OptionsGroup'

export type CheckboxGroupProps = OptionsGroupProps<string[]>

function getCheckedProps(
  optionValue: string,
  value?: string[],
  defaultValue?: string[]
) {
  const key = value ? 'checked' : 'defaultChecked'
  const valueToUse = value || defaultValue || []
  return { [key]: valueToUse.includes(optionValue) }
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  disabled,
  name: propsName,
  options,
  defaultValue = [],
  value,
  onChange,
  ...rest
}) => {
  const name = useID(propsName)
  // Keep track of the group's value for onChange argument if value prop is not used
  // (i.e.uncontrolled but with onChange prop)
  const uncontrolledValueRef = useRef(defaultValue)

  const getChangeHandler = useCallback(
    (optionValue: string) => {
      return onChange
        ? () => {
            const oldValue = value || uncontrolledValueRef.current
            const newValue = xor(oldValue, [optionValue])
            onChange(newValue)
            uncontrolledValueRef.current = newValue
          }
        : undefined
    },
    [onChange, value]
  )

  const checkboxes = options.map((option) => {
    const checkedProps = getCheckedProps(option.value, value, defaultValue)
    const handleChange = getChangeHandler(option.value)

    return (
      <FieldCheckbox
        onChange={handleChange}
        disabled={option.disabled || disabled}
        key={option.value}
        label={option.label}
        name={name}
        value={option.value}
        {...checkedProps}
      />
    )
  })

  return (
    <Fieldset data-testid="checkbox-list" {...rest}>
      {checkboxes}
    </Fieldset>
  )
}
