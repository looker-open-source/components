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

import pick from 'lodash/pick'
import React, { ChangeEvent, forwardRef, Ref, useState } from 'react'
import isFunction from 'lodash/isFunction'
import styled from 'styled-components'
import { typography, TypographyProps } from '@looker/design-tokens'
import { inputPropKeys, InputProps } from '../InputProps'

export interface InlineInputTextProps
  extends TypographyProps,
    Omit<InputProps, 'type'> {
  underlineOnlyOnHover?: boolean
  value?: string
  simple?: boolean
}

export const InlineInputTextInternal = forwardRef(
  (
    {
      className,
      onChange,
      underlineOnlyOnHover,
      value: valueProp,
      placeholder,
      simple = false,
      ...props
    }: InlineInputTextProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [value, setValueChange] = useState(valueProp || '')

    const displayValue = isFunction(onChange) ? valueProp : value

    const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValueChange(event.currentTarget.value)
    }

    const handleChange = isFunction(onChange) ? onChange : handleValueChange

    /**
     * &#8203; is a zero-width space – ensures that visibleText gets accurate line-height applied
     */

    return (
      <div className={className} data-testid="inlineInputText">
        <Input
          onChange={handleChange}
          simple={simple}
          underlineOnlyOnHover={underlineOnlyOnHover}
          value={displayValue}
          ref={ref}
          {...pick(props, inputPropKeys)}
        />
        <VisibleText displayValue={displayValue}>
          {displayValue || placeholder || ' '}
        </VisibleText>
      </div>
    )
  }
)

InlineInputTextInternal.displayName = 'InlineInputTextInternal'

const Input = styled.input.attrs({ type: 'text' })<InlineInputTextProps>`
  background: transparent;
  border: none;
  caret-color: ${({ theme }) => theme.colors.text0};
  color: inherit;
  font: inherit;
  height: 100%;
  left: 0;
  outline: none;
  padding: 0;
  position: absolute;
  text-align: inherit;
  text-transform: inherit;
  top: 0;
  width: 100%;
`

interface VisibleTextProps {
  displayValue?: string
}

const VisibleText = styled.div<VisibleTextProps>`
  color: ${({ displayValue, theme }) =>
    displayValue ? 'transparent' : theme.colors.text5};
  text-align: inherit;
  white-space: pre;
`

export const InlineInputText = styled(InlineInputTextInternal)`
  ${typography}
  border: none;
  border-bottom: 1px dashed;
  border-bottom-color: ${({ theme, underlineOnlyOnHover, simple }) =>
    underlineOnlyOnHover || simple ? 'transparent' : theme.colors.ui3};
  color: inherit;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  min-width: 2rem;
  position: relative;
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
`
