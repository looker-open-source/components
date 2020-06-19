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
import React, { forwardRef, useCallback, Ref } from 'react'
import styled from 'styled-components'
import { useID } from '../../../utils'
import { Fieldset } from '../../Fieldset'
import { FieldRadio } from '../../Fields/FieldRadio'
import { inputHeight } from '../InputText/InputText'
import { OptionsGroupProps } from './OptionsGroup'

export type RadioGroupProps = OptionsGroupProps<string>

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
      disabled,
      inline,
      name: propsName,
      options,
      defaultValue,
      value,
      onChange,
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

    const radios = options.map((option) => {
      const checkedProps = getCheckedProps(
        option.value,
        isControlled,
        value,
        defaultValue
      )

      return (
        <FieldRadio
          disabled={option.disabled || disabled}
          key={option.value}
          detail={option.detail}
          label={option.label}
          name={name}
          onChange={getChangeHandler(option.value)}
          {...checkedProps}
        />
      )
    })

    return (
      <Fieldset
        data-testid="radio-list"
        inline={inline}
        wrap={inline}
        gap={!inline ? 'xxsmall' : undefined}
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
