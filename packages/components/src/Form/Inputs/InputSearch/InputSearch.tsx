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

import omit from 'lodash/omit'
import pick from 'lodash/pick'
import React, {
  FormEvent,
  MouseEvent,
  forwardRef,
  Ref,
  useState,
  useRef,
} from 'react'
import styled from 'styled-components'
import { inputPropKeys } from '../InputProps'
import {
  InputText,
  InputTextProps,
  inputTextDefaults,
  inputTextDisabled,
  inputTextFocus,
  inputTextHover,
  inputTextValidation,
} from '../InputText'
import { useControlWarn, useForkedRef, useWrapEvent } from '../../../utils'
import { Box } from '../../../Layout'
import { InputSearchControls } from './InputSearchControls'

export interface InputSearchProps extends InputTextProps {
  /**
   * hides clear button and summary text
   */
  hideControls?: boolean
  /**
   * adds text when input value in not empty
   */
  summary?: string
  /**
   * handle when the user clicks the x icon button to clear the value
   */
  onClear?: (e: MouseEvent<HTMLButtonElement>) => void
  value?: string

  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseDown?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseEnter?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseLeave?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseOver?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseOut?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseUp?: (e: MouseEvent<HTMLDivElement>) => void
}

const InputSearchComponent = forwardRef(
  (
    {
      hideControls = false,

      onChange,
      onClear,
      onClick,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseOut,
      onMouseOver,
      onMouseUp,

      className,
      summary,
      value: controlledValue = '',

      ...props
    }: InputSearchProps,
    forwardedRef: Ref<HTMLInputElement>
  ) => {
    const isControlled = useControlWarn({
      controllingProps: ['onChange', 'onClear', 'value'],
      isControlledCheck: () => onChange !== undefined,
      name: 'ButtonGroup',
    })
    const [uncontrolledValue, setValue] = useState(controlledValue)
    const inputValue = isControlled ? controlledValue : uncontrolledValue

    const internalRef = useRef<null | HTMLInputElement>(null)
    const ref = useForkedRef<HTMLInputElement>(internalRef, forwardedRef)

    const focusInput = () => internalRef.current && internalRef.current.focus()

    const handleClear = (e: MouseEvent<HTMLButtonElement>) => {
      setValue('')
      if (onClear) {
        onClear(e)
      } else if (onChange) {
        onChange({
          currentTarget: { value: '' },
        } as FormEvent<HTMLInputElement>)
      }
    }

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value)
      onChange && onChange(event)
    }

    const controls = !hideControls && (
      <InputSearchControls
        onClear={handleClear}
        showClear={inputValue.length > 0}
        summary={summary}
      />
    )

    const mouseHandlers = {
      onClick: useWrapEvent(focusInput, onClick),
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseOut,
      onMouseOver,
      onMouseUp,
    }

    // 12/17/2019 removing type="search" since React doesn't support onSearch yet
    // resulting in undetectable changes that effect the value

    return (
      <Box
        className={className}
        {...omit(props, inputPropKeys)}
        {...mouseHandlers}
      >
        <InputText
          onChange={handleChange}
          value={inputValue}
          focusStyle={{ outline: 'none' }}
          {...pick(props, inputPropKeys)}
          ref={ref}
        />
        {controls}
      </Box>
    )
  }
)

InputSearchComponent.displayName = 'InputSearchComponent'

export const InputSearch = styled(InputSearchComponent)`
  align-items: center;
  display: flex;
  position: relative;
  background-color: ${props => props.theme.colors.palette.white};

  &:hover {
    ${inputTextHover}
  }

  &:focus-within {
    ${inputTextFocus}
  }

  ${props => (props.disabled ? inputTextDisabled : '')}

  ${inputTextValidation}

  ${InputText} {
    border: none;
    width: 100%;
    appearance: none;
    background: transparent;
    box-shadow: none;

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      appearance: none;
    }
  }
`

InputSearch.defaultProps = {
  ...inputTextDefaults,
}
