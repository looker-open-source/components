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
import React, { forwardRef, Ref } from 'react'
import isFunction from 'lodash/isFunction'
import styled from 'styled-components'
import { typography, TypographyProps } from '@looker/design-tokens'
import { inputPropKeys, InputProps } from '../InputProps'

interface InlineInputTextProps
  extends TypographyProps,
    Omit<InputProps, 'type'> {
  underlineOnlyOnHover?: boolean
  value?: string
}

export const InlineInputTextInternal = forwardRef(
  (
    {
      className,
      onChange,
      underlineOnlyOnHover,
      value,
      ...props
    }: InlineInputTextProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [valueChange, setValueChange] = React.useState(value || '')

    const displayValue = isFunction(onChange) ? value : valueChange

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValueChange(event.currentTarget.value)
    }

    const handleChange = isFunction(onChange) ? onChange : handleValueChange

    return (
      <span className={className}>
        <Input
          onChange={handleChange}
          underlineOnlyOnHover={underlineOnlyOnHover}
          value={displayValue}
          ref={ref}
          size={1}
          {...pick(props, inputPropKeys)}
        />
        <HiddenText>{displayValue}</HiddenText>
      </span>
    )
  }
)

InlineInputTextInternal.displayName = 'InlineInputTextInternal'

const Input = styled.input.attrs({ type: 'text' })<InlineInputTextProps>`
  background: transparent;
  border: none;
  border-bottom: 1px dashed;
  border-bottom-color: ${(props) =>
    props.underlineOnlyOnHover
      ? 'transparent'
      : props.theme.colors.palette.charcoal300};
  padding: 0;
  font: inherit;
  color: inherit;
  text-transform: inherit;
  width: 100%;

  :focus,
  :hover {
    outline: none;
    border-bottom-color: ${(props) => props.theme.colors.palette.purple400};
    background-color: ${(props) => props.theme.colors.palette.charcoal100};
  }

  :focus {
    border-bottom-style: solid;
  }
`

const HiddenText = styled.span`
  height: 0;
  overflow: hidden;
  white-space: pre-wrap;
  padding: 0 1px;
`

export const InlineInputText = styled(InlineInputTextInternal)`
  ${typography}

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
`
