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

import * as CSS from 'csstype'
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
import { ResponsiveValue, TLengthStyledSystem } from 'styled-system'
import { inputPropKeys } from '../InputProps'
import {
  CustomizableInputTextAttributes,
  InputText,
  InputTextProps,
  inputTextDefaults,
  inputTextDisabled,
  inputTextFocus,
  inputTextHover,
  inputTextValidation,
} from '../InputText'
import { useControlWarn, useForkedRef, useWrapEvent } from '../../../utils'
import { Flex } from '../../../Layout'
import { Icon } from '../../../Icon'
import { InputSearchControls } from './InputSearchControls'

const getHeight = (
  py?: ResponsiveValue<CSS.PaddingProperty<TLengthStyledSystem | symbol>>
) => {
  /* Subtracting vertical padding and border from input text height
  Setting height this way instead of on the parent div allows
  InputChip to expand vertically as needed
  min-height doesn't work because then height: 100% on the children is ignored */
  const verticalSpace =
    typeof py === 'number'
      ? `${((py || 0) + 1) * 2}px`
      : `(${String(py)} * 2) - 2px`
  return `calc(${CustomizableInputTextAttributes.height} - ${verticalSpace})`
}

export interface InputSearchProps extends InputTextProps {
  /**
   * hides clear button and summary text
   */
  hideControls?: boolean
  /**
   * hides search Icon
   */
  hideSearchIcon?: boolean
  /**
   * overrides the internal logic that shows the clear icon when there's a value
   */
  showClear?: boolean
  /**
   * adds text when input value in not empty
   */
  summary?: string
  /**
   * handle when the user clicks the x icon button to clear the value
   */
  onClear?: (e: MouseEvent<HTMLButtonElement>) => void
  defaultValue?: string
  value?: string

  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseDown?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseEnter?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseLeave?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseOver?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseOut?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseUp?: (e: MouseEvent<HTMLDivElement>) => void
}

export const SearchIcon = styled(Icon)`
  color: ${props => props.theme.colors.palette.charcoal400};
  padding-left: ${props => props.theme.space.small};
`

const InputSearchComponent = forwardRef(
  (
    {
      onChange,
      onClear,
      onClick,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseOut,
      onMouseOver,
      onMouseUp,

      children,
      className,
      defaultValue,
      hideControls = false,
      hideSearchIcon = false,
      showClear,
      summary,
      value: controlledValue = '',

      ...props
    }: InputSearchProps,
    forwardedRef: Ref<HTMLInputElement>
  ) => {
    const isControlled = useControlWarn({
      controllingProps: ['onChange', 'onClear', 'value'],
      isControlledCheck: () => onChange !== undefined,
      name: 'InputSearch',
    })
    const [uncontrolledValue, setValue] = useState(
      defaultValue || controlledValue
    )
    const inputValue = isControlled ? controlledValue : uncontrolledValue

    const internalRef = useRef<null | HTMLInputElement>(null)
    const ref = useForkedRef<HTMLInputElement>(internalRef, forwardedRef)

    function handleMouseDown() {
      // set focus to input on mousedown of container
      // need requestAnimationFrame here due to browser updating focus _after_ mousedown is called
      window.requestAnimationFrame(() => {
        internalRef.current && internalRef.current.focus()
      })
    }

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
        showClear={showClear || inputValue.length > 0}
        summary={summary}
        height={getHeight(props.py)}
        disabled={props.disabled}
      />
    )

    const mouseHandlers = {
      onClick,
      onMouseDown: useWrapEvent(handleMouseDown, onMouseDown),
      onMouseEnter,
      onMouseLeave,
      onMouseOut,
      onMouseOver,
      onMouseUp,
    }

    // 12/17/2019 removing type="search" since React doesn't support onSearch yet
    // resulting in undetectable changes that effect the value

    const input = (
      <InputText
        onChange={handleChange}
        value={inputValue}
        focusStyle={{ outline: 'none' }}
        pr="0"
        {...pick(props, inputPropKeys)}
        ref={ref}
      />
    )

    return (
      <Flex
        className={className}
        {...omit(props, inputPropKeys)}
        {...mouseHandlers}
      >
        {!hideSearchIcon && <SearchIcon name="Search" size={30} />}
        {children ? (
          <Flex alignItems="flex-start" flexWrap="wrap">
            {children}
            {input}
          </Flex>
        ) : (
          input
        )}
        {controls}
      </Flex>
    )
  }
)

InputSearchComponent.displayName = 'InputSearchComponent'

export const InputSearch = styled(InputSearchComponent)`
  align-items: center;
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
    appearance: none;
    background: transparent;
    box-shadow: none;
    flex: 1;

    width: 100%;
    height: ${props => getHeight(props.py)};

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      appearance: none;
    }
  }
`

InputSearch.defaultProps = {
  ...omit(CustomizableInputTextAttributes, ['height', 'px']),
  ...inputTextDefaults,
  pr: 'xxsmall',
  py: 2,
}
