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
import {
  typography,
  TypographyProps,
  SpaceProps,
  CompatibleHTMLProps,
  LayoutProps,
} from '@looker/design-tokens'
import { inputPropKeys } from '../InputProps'

interface InlineTextAreaProps
  extends Omit<LayoutProps, 'size'>,
    SpaceProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLTextAreaElement> {
  underlineOnlyOnHover?: boolean
  value?: string
}

export const InlineTextAreaLayout = forwardRef(
  (
    {
      className,
      onChange,
      underlineOnlyOnHover,
      value: valueProp,
      placeholder,
      ...props
    }: InlineTextAreaProps,
    ref: Ref<HTMLTextAreaElement>
  ) => {
    const [value, setValueChange] = useState(valueProp || '')

    const displayValue = isFunction(onChange) ? valueProp : value

    const handleValueChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setValueChange(event.currentTarget.value)
    }

    const handleChange = isFunction(onChange) ? onChange : handleValueChange

    return (
      <div className={className} data-testid="inline-text-area">
        <Input
          onChange={handleChange}
          ref={ref}
          underlineOnlyOnHover={underlineOnlyOnHover}
          value={displayValue}
          {...pick(props, inputPropKeys)}
        />
        <VisibleText displayValue={displayValue}>
          {displayValue || placeholder}
        </VisibleText>
      </div>
    )
  }
)

InlineTextAreaLayout.displayName = 'InlineTextAreaLayout'

const Input = styled.textarea<InlineTextAreaProps>`
  background: transparent;
  border: none;
  color: transparent;
  font: inherit;
  caret-color: ${({ theme }) => theme.colors.text0};
  height: 100%;
  left: 0;
  outline: none;
  padding: 0;
  position: absolute;
  resize: none;
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
    displayValue ? 'inherit' : theme.colors.text5};
`

export const InlineTextArea = styled(InlineTextAreaLayout)`
  ${typography}

  border: none;
  border-bottom: 1px dashed;
  border-bottom-color: ${(props) =>
    props.underlineOnlyOnHover ? 'transparent' : props.theme.colors.ui3};
  color: inherit;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  min-width: 2rem;
  min-height: ${(props) => props.theme.lineHeights.medium};
  text-align: inherit;
  white-space: pre-wrap;

  :focus,
  :hover {
    outline: none;
    border-bottom-color: ${(props) => props.theme.colors.key};
    background-color: ${(props) => props.theme.colors.ui1};
  }

  :focus {
    border-bottom-style: solid;
  }
`
