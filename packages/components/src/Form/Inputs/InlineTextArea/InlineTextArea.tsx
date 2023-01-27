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
import type {
  TypographyProps,
  SpaceProps,
  CompatibleHTMLProps,
  LayoutProps,
} from '@looker/design-tokens'
import { typography } from '@looker/design-tokens'
import { pickInputProps } from '../InputProps'

export interface InlineTextAreaProps
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
      value: valueProp = '',
      placeholder,
      ...props
    }: InlineTextAreaProps,
    ref: Ref<HTMLTextAreaElement>
  ) => {
    const [value, setValueChange] = useState(valueProp)

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
          {...pickInputProps(props)}
        />
        <VisibleText displayValue={displayValue}>
          {displayValue || placeholder}
        </VisibleText>
      </div>
    )
  }
)

const Input = styled.textarea<InlineTextAreaProps>`
  background: transparent;
  border: none;
  caret-color: ${({ theme }) => theme.colors.text5};
  color: transparent;
  cursor: ${({ readOnly, disabled }) =>
    readOnly || disabled ? 'not-allowed' : undefined};
  font: inherit;
  height: 100%;
  left: 0;
  margin: 0; /* override browser default(s) */
  outline: none;
  padding: 0;
  position: absolute;
  resize: none;
  text-align: inherit;
  text-transform: inherit;
  top: 0;
  vertical-align: top; /* textarea is inline-block so this removes 4px generated below */
  width: 100%;
`

interface VisibleTextProps {
  displayValue?: string
}

const VisibleText = styled.div<VisibleTextProps>`
  color: ${({ displayValue, theme }) =>
    displayValue ? 'inherit' : theme.colors.text1};
`

export const InlineTextArea = styled(InlineTextAreaLayout)`
  ${typography}

  border: none;
  border-bottom: 1px dashed;
  border-bottom-color: ${({ theme, underlineOnlyOnHover, readOnly }) =>
    underlineOnlyOnHover || readOnly ? 'transparent' : theme.colors.ui3};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.text1 : 'inherit'};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${({ theme }) => theme.lineHeights.medium};
  min-width: 2rem;
  position: relative;
  text-align: inherit;
  white-space: pre-wrap;

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
`
