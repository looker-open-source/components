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
import type { Ref, ReactNode } from 'react'
import React, { forwardRef, useCallback } from 'react'
import styled from 'styled-components'
import { useID } from '../../../utils'
import { Fieldset } from '../../../Fieldset'
import { FieldRadio } from '../../Fields/FieldRadio'
import { inputHeight } from '../height'
import type { FieldsetProps } from '../../../Fieldset'

export interface RadioGroupOptionProps {
  label: string
  value: string
  disabled?: boolean
  detail?: ReactNode
}

export type RadioGroupProps = Omit<FieldsetProps, 'onChange'> & {
  name?: string
  id?: string
  inline?: boolean
  autoFocus?: boolean
  disabled?: boolean
  required?: boolean
  options: RadioGroupOptionProps[]
  validationType?: 'error'
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
}

// For controlled scenario we want to use checked & value,
// for uncontrolled, defaultChecked & defaultValue
function getCheckedProps(
  optionValue: string,
  isControlled: boolean,
  value?: string,
  defaultValue?: string
) {
  const key = isControlled ? 'checked' : 'defaultChecked'
  const valueToUse = isControlled ? value : defaultValue
  return { [key]: valueToUse === optionValue }
}

const RadioGroupLayout = forwardRef(
  (
    {
      autoFocus,
      defaultValue,
      disabled,
      inline,
      name: propsName,
      onChange,
      options,
      validationType,
      value,
      ...rest
    }: RadioGroupProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const name = useID(propsName)
    const isControlled = onChange !== undefined && defaultValue === undefined

    const getChangeHandler = useCallback(
      (optionValue: string) => {
        return onChange ? () => onChange(optionValue) : undefined
      },
      [onChange]
    )

    const radios = options.map((option, index) => {
      const checkedProps = getCheckedProps(
        option.value,
        isControlled,
        value,
        defaultValue
      )

      const autoFocusProps = index === 0 && autoFocus ? { autoFocus } : {}

      return (
        <FieldRadio
          detail={option.detail}
          disabled={option.disabled || disabled}
          key={option.value}
          label={option.label}
          name={name}
          onChange={getChangeHandler(option.value)}
          validationType={validationType}
          {...checkedProps}
          {...autoFocusProps}
        />
      )
    })

    return (
      <Fieldset
        data-testid="radio-list"
        role="radiogroup"
        inline={inline}
        wrap={inline}
        gap={!inline ? 'u1' : undefined}
        width={inline ? 'auto' : undefined}
        ref={ref}
        {...rest}
      >
        {radios}
      </Fieldset>
    )
  }
)

RadioGroupLayout.displayName = 'RadioGroupLayout'

export const RadioGroup = styled(RadioGroupLayout)`
  ${FieldRadio} {
    ${({ inline }) => (inline ? `line-height: ${inputHeight};` : '')}
  }
`
