/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import type { Ref, ReactNode } from 'react'
import React, { forwardRef, useCallback, useRef } from 'react'
import styled from 'styled-components'
import { useID } from '../../../utils'
import { Fieldset } from '../../../Fieldset'
import { FieldCheckbox } from '../../Fields/FieldCheckbox'
import type { FieldsetProps } from '../../../Fieldset'
import { inputHeight } from '../height'

export interface CheckboxGroupOptionProps {
  label: string
  value: string
  disabled?: boolean
  detail?: ReactNode
}

export type CheckboxGroupProps = Omit<FieldsetProps, 'onChange'> & {
  name?: string
  id?: string
  inline?: boolean
  autoFocus?: boolean
  disabled?: boolean
  required?: boolean
  options: CheckboxGroupOptionProps[]
  validationType?: 'error'
  defaultValue?: string[]
  value?: string[]
  onChange?: (value: string[]) => void
}

// For controlled scenario we want to use checked & value,
// for uncontrolled, defaultChecked & defaultValue
function getCheckedProps(
  optionValue: string,
  value?: string[],
  defaultValue?: string[]
) {
  const key = value ? 'checked' : 'defaultChecked'
  const valueToUse = value || defaultValue || []
  return { [key]: valueToUse.includes(optionValue) }
}

const CheckboxGroupLayout = forwardRef(
  (
    {
      autoFocus,
      disabled,
      inline,
      name: propsName,
      options,
      defaultValue = [],
      value,
      onChange,
      validationType,
      ...rest
    }: CheckboxGroupProps,
    ref: Ref<HTMLDivElement>
  ) => {
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

    const checkboxes = options.map((option, index) => {
      const checkedProps = getCheckedProps(option.value, value, defaultValue)
      const autoFocusProps = index === 0 && autoFocus ? { autoFocus } : {}
      const handleChange = getChangeHandler(option.value)

      return (
        <FieldCheckbox
          onChange={handleChange}
          disabled={option.disabled || disabled}
          key={option.value}
          label={option.label}
          detail={option.detail}
          name={name}
          validationType={validationType}
          value={option.value}
          {...checkedProps}
          {...autoFocusProps}
        />
      )
    })

    return (
      <Fieldset
        data-testid="checkbox-list"
        inline={inline}
        wrap={inline}
        gap={!inline ? 'u1' : undefined}
        width={inline ? 'auto' : undefined}
        ref={ref}
        {...rest}
      >
        {checkboxes}
      </Fieldset>
    )
  }
)

CheckboxGroupLayout.displayName = 'CheckboxGroupLayout'

export const CheckboxGroup = styled(CheckboxGroupLayout)`
  ${FieldCheckbox} {
    ${({ inline }) => (inline ? `line-height: ${inputHeight};` : '')}
  }
`
