/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import React, { FormEvent, forwardRef, Ref, useState } from 'react'
import styled from 'styled-components'
import {
  border,
  BorderProps,
  layout,
  LayoutProps,
  reset,
} from '@looker/design-tokens'
import {
  CustomizableInputTextAttributes,
  InputText,
  InputTextProps,
} from '../InputText'
import { InputSearchControls } from './InputSearchControls'

interface InputSearchLayoutProps extends BorderProps, LayoutProps {}

export interface InputSearchProps
  extends Omit<InputTextProps, 'height' | 'size' | 'width'> {
  /**
   * hides clear button and summary text
   */
  hideControls?: boolean
  /**
   * adds text when input value in not empty
   */
  summary?: string

  onClear?: () => void

  value?: string
  width?: string
  height?: string
}

const InputSearchLayout = styled.div<InputSearchLayoutProps>`
  ${reset}
  ${border}
  ${layout}

  align-items: center;
  display: flex;
  background: ${props => props.theme.colors.palette.white};
  position: relative;

  &:focus-within {
    border-color: transparent;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${InputText} {
    border: none;
    width: 100%;
    appearance: none;

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      appearance: none;
    }
  }
`

InputSearchLayout.defaultProps = {
  border: '1px solid',
  borderColor: 'palette.charcoal300',
  borderRadius: CustomizableInputTextAttributes.borderRadius,
}

const InputSearchComponent = forwardRef(
  (props: InputSearchProps, ref: Ref<HTMLInputElement>) => {
    const {
      border,
      borderBottom,
      borderColor,
      borderLeft,
      borderRadius,
      borderRight,
      borderTop,
      hideControls = false,
      onChange,
      onClear,
      summary,
      value = '',
      width = '100%',
      ...inputProps
    } = props
    const [inputValue, setValue] = useState(value)

    const handleClear = () => {
      setValue('')
      onClear && onClear()
    }

    const updateValue = (event: FormEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value)
      onChange && onChange(event)
    }

    const controls = !hideControls && inputValue.length > 0 && (
      <InputSearchControls onClear={handleClear} summary={summary} />
    )

    return (
      <InputSearchLayout
        border={border}
        borderColor={borderColor}
        borderRadius={borderRadius}
        borderTop={borderTop}
        borderBottom={borderBottom}
        borderLeft={borderLeft}
        borderRight={borderRight}
        width={width}
      >
        <InputText
          type="search"
          onChange={updateValue}
          value={inputValue}
          focusStyle={{ outline: 'none' }}
          border="none"
          width="100%"
          {...inputProps}
          ref={ref}
        />
        {controls}
      </InputSearchLayout>
    )
  }
)

InputSearchComponent.displayName = 'InputSearchComponent'

export const InputSearch = styled(InputSearchComponent)``
