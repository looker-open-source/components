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

import type { ChangeEvent, Ref } from 'react'
import React, { forwardRef, useState } from 'react'
import isFunction from 'lodash/isFunction'
import styled from 'styled-components'
import type { TypographyProps } from '@looker/design-tokens'
import { omitStyledProps, typography } from '@looker/design-tokens'
import type { InputProps, InputTextTypeProps } from '../InputProps'
import { pickInputProps } from '../InputProps'
import { innerInputStyle } from '../innerInputStyle'

export interface InlineInputTextProps
  extends TypographyProps,
    Omit<InputProps, 'type'>,
    InputTextTypeProps {
  underlineOnlyOnHover?: boolean
  simple?: boolean
}

const InlineInputTextLayout = forwardRef(
  (
    {
      className,
      defaultValue,
      onChange,
      placeholder,
      type = 'text',
      value: valueProp,
      ...props
    }: InlineInputTextProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [value, setValueChange] = useState(valueProp || defaultValue || '')

    const displayValue = isFunction(onChange) ? valueProp : value

    const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValueChange(event.currentTarget.value)
    }

    const handleChange = isFunction(onChange) ? onChange : handleValueChange

    return (
      <span className={className}>
        <StyledInput
          onChange={handleChange}
          value={displayValue}
          placeholder={placeholder}
          type={type}
          ref={ref}
          {...omitStyledProps(pickInputProps(props))}
        />
        <StyledText>{displayValue || placeholder || ' '}</StyledText>
      </span>
    )
  }
)

const StyledInput = styled.input`
  ${innerInputStyle}
  cursor: ${({ readOnly, disabled }) =>
    readOnly || disabled ? 'not-allowed' : undefined};
  font: inherit;
  left: 0;
  padding: 0;
  position: absolute;
  text-align: inherit;
  text-transform: inherit;
  top: 0;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
  }
  &[type='number'] {
    appearance: textfield;
  }
`

const StyledText = styled.span`
  align-self: center;
  color: transparent;
  line-height: inherit;
  /* max-width & overflow keep this span from blocking the x button
  in InputSearch, etc, with autoResize and maxWidth */
  max-width: 100%;
  overflow: hidden;
  text-align: inherit;
  white-space: pre;
`

export const InlineInputTextBase = styled(InlineInputTextLayout)`
  display: inline-flex;
  justify-content: center;
  min-width: 2rem;
  position: relative;
`

export const InlineInputText = styled(InlineInputTextBase)`
  ${typography}
  border: none;
  border-bottom: 1px dashed;
  border-bottom-color: ${({ theme, underlineOnlyOnHover, simple, readOnly }) =>
    underlineOnlyOnHover || simple || readOnly
      ? 'transparent'
      : theme.colors.ui3};
  color: inherit;
  flex-direction: column;
  max-width: 100%;
  overflow: hidden;
  text-align: inherit;

  :focus,
  :hover {
    background-color: ${({ theme }) => theme.colors.ui1};
    border-bottom-color: ${({ theme }) => theme.colors.key};
    outline: none;
  }

  :focus {
    border-bottom-style: solid;
  }

  :disabled,
  :hover {
    border-bottom-color: ${({ theme }) => theme.colors.text1};
  }

  :hover {
    border-bottom-color: ${({ readOnly }) => readOnly && 'transparent'};
  }

  input:disabled {
    color: ${({ theme }) => theme.colors.text1};
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text1};
  }
`
